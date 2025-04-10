import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    canActivate:[authGuard],
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'add-contact',
    canActivate:[authGuard],
    loadComponent: () => import('./pages/add-contact/add-contact.page').then( m => m.AddContactPage)
  },
  {
    path: 'video-call',
    loadComponent: () => import('./pages/video-call/video-call.page').then( m => m.VideoCallPage)
  },
];
