import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product/product.page').then((m) => m.ProductPage),
      },

      // protected
      {
        path: 'cart',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'chat',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/chat/chat-list.page').then((m) => m.ChatListPage),
      },
      {
        path: 'chat/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/chat/chat-thread.page').then((m) => m.ChatThreadPage),
      },
      {
        path: 'notifications',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/notifications/notifications.page').then(
            (m) => m.NotificationsPage
          ),
      },
      {
        path: 'profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },

      // brand
      {
        path: 'brand/sign-up',
        loadComponent: () =>
          import('./pages/brand/sign-up.page').then((m) => m.BrandSignUpPage),
      },
      {
        path: 'brand/setup',
        loadComponent: () =>
          import('./pages/brand/setup.page').then((m) => m.BrandSetupPage),
      },
      {
        path: 'brand/dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/brand/dashboard.page').then(
            (m) => m.BrandDashboardPage
          ),
      },
    ],
  },

  // auth (guest only)
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/auth/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'sign-up',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/auth/sign-up.page').then((m) => m.SignUpPage),
  },
  {
    path: 'verify',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/auth/verify.page').then((m) => m.VerifyPage),
  },
  {
    path: 'forgot',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/auth/forgot.page').then((m) => m.ForgotPage),
  },
  {
    path: 'verify-reset',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/auth/verify-reset.page').then((m) => m.VerifyResetPage),
  },
  {
    path: 'reset',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/auth/reset.page').then((m) => m.ResetPage),
  },

  { path: '**', redirectTo: '' },
];
