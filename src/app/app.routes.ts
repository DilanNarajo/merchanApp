import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule) },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsPageModule) },
  { path: 'report-detail/:id', loadChildren: () => import('./pages/report-detail/report-detail.module').then(m => m.ReportDetailPageModule) },
  { path: 'report-mode', loadChildren: () => import('./pages/report-mode/report-mode.module').then(m => m.ReportModePageModule) },
  { path: 'address', loadChildren: () => import('./pages/address/address.module').then(m => m.AddressPageModule) },
  { path: 'camera', loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraPageModule) },
  { path: 'permissions', loadChildren: () => import('./pages/permissions/permissions.module').then(m => m.PermissionsPageModule) },
  { path: 'photo-preview', loadChildren: () => import('./pages/photo-preview/photo-preview.module').then(m => m.PhotoPreviewPageModule) },
];
