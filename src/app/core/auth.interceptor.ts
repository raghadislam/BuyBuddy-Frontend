// src/app/core/auth.interceptor.ts
import {
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import {
  BehaviorSubject,
  catchError,
  filter,
  switchMap,
  take,
  throwError,
} from 'rxjs';

const AUTH_PATHS = [
  '/auth/login',
  '/auth/signup',
  '/auth/verify-email',
  '/auth/resend-verification',
  '/auth/refresh',
  '/auth/logout',
  '/forget-password',
  '/auth/verify-reset-code',
  '/auth/reset-password',
];

let refreshInProgress = false;
const refresh$ = new BehaviorSubject<boolean>(false);

function isAuthEndpoint(req: HttpRequest<any>) {
  const url = req.url.toLowerCase();
  return AUTH_PATHS.some((p) => url.includes(p));
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token;

  console.log('toke', token);

  // Always send cookies (for refresh), attach Authorization if we have it
  const authedReq = token
    ? req.clone({
        withCredentials: true,
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    : req.clone({ withCredentials: true });

  console.log('authedReq', authedReq);

  return next(authedReq).pipe(
    catchError((err: HttpErrorResponse) => {
      console.log('err', err);

      // If it's not 401, or this is an auth endpoint, or we have no token -> do NOT refresh
      if (err.status !== 401 || isAuthEndpoint(req) || !auth.token) {
        return throwError(() => err);
      }

      // If a refresh is already happening, wait for it, then retry once
      if (refreshInProgress) {
        return refresh$.pipe(
          filter((done) => done === true),
          take(1),
          switchMap(() => {
            const retry = auth.token
              ? req.clone({
                  withCredentials: true,
                  setHeaders: { Authorization: `Bearer ${auth.token}` },
                })
              : req.clone({ withCredentials: true });
            return next(retry);
          })
        );
      }

      // Start a single refresh
      refreshInProgress = true;
      refresh$.next(false);

      return auth.refresh().pipe(
        switchMap(() => {
          // mark refresh complete
          refreshInProgress = false;
          refresh$.next(true);

          // retry original once with new token (if any)
          const retry = auth.token
            ? req.clone({
                withCredentials: true,
                setHeaders: { Authorization: `Bearer ${auth.token}` },
              })
            : req.clone({ withCredentials: true });
          return next(retry);
        }),
        catchError((refreshErr) => {
          console.log('refreshErr');

          // stop the loop: clear tokens/state and surface the 401
          refreshInProgress = false;
          refresh$.next(true);
          auth.clearToken(); // do not call logout() here to avoid extra network spam
          return throwError(() => refreshErr);
        })
      );
    })
  );
};
