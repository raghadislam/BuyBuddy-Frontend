import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponse, User } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private api = environment.api;
  private accessTokenKey = 'bb_access_token';

  private _user$ = new BehaviorSubject<User | null>(null);
  user$ = this._user$.asObservable();

  get user() {
    return this._user$.value;
  }
  get isLoggedIn() {
    return !!this._user$.value;
  }
  get token() {
    return localStorage.getItem(this.accessTokenKey) || '';
  }

  /** Call once on app start (e.g., in shell constructor) */
  init() {
    if (this.token) {
      this.me()
        .pipe(catchError(() => of(null)))
        .subscribe();
    } else {
      this.refresh()
        .pipe(catchError(() => of(null)))
        .subscribe();
    }
  }

  // ---------- Core calls ----------
  signUp(payload: {
    name: string;
    userName: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN' | 'BRAND' | 'MANAGER' | 'GUEST';
  }) {
    return this.http.post(`${this.api}/auth/signup`, payload);
  }

  verifyEmail(email: string, code: string) {
    return this.http.post(`${this.api}/auth/verify-email`, { email, code });
  }

  resendVerification(email: string) {
    return this.http.post(`${this.api}/auth/resend-verification`, { email });
  }

  login(email: string, password: string) {
    // console.log(email, password);

    return this.http
      .post<LoginResponse>(`${this.api}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          const token =
            res?.accessToken ??
            res?.token ??
            res?.data?.accessToken ??
            res?.data?.tokens?.access?.token;

          if (!token) {
            console.error('Login response has no access token', res);
            throw new Error('No access token in login response');
          }

          this.setToken(token); // <-- save it
          // this.setToken(res.accessToken);
          console.log('res', res);
          this._user$.next(res.data.account.user);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.accessTokenKey);
    this._user$.next(null);
    return this.http
      .post(`${this.api}/auth/logout`, {})
      .pipe(catchError(() => of(null)));
  }

  me() {
    return this.http
      .get<User>(`${this.api}/auth/me`)
      .pipe(tap((u) => this._user$.next(u)));
  }

  refresh() {
    return this.http
      .post<{ accessToken: string }>(`${this.api}/auth/refresh`, {})
      .pipe(
        tap((r) => this.setToken(r.accessToken)),
        tap(() => this.me().subscribe())
      );
  }

  // ---------- Forgot / Reset ----------
  forgotPassword(email: string) {
    // NB: your endpoint path is `/forget-password`
    return this.http.post(`${this.api}/forget-password`, { email });
  }

  verifyResetCode(email: string, code: string) {
    return this.http.post(`${this.api}/auth/verify-reset-code`, {
      email,
      code,
    });
  }

  resetPassword(
    resetToken: string,
    newPassword: string,
    confirmNewPassword: string
  ) {
    return this.http.post(`${this.api}/auth/reset-password`, {
      resetToken,
      newPassword,
      confirmNewPassword,
    });
  }

  private setToken(token: string) {
    this.accessTokenKey = token;
    localStorage.setItem(this.accessTokenKey, token);
  }
  clearToken() {
    localStorage.removeItem(this.accessTokenKey);
  }
}
