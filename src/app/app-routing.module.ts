import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule) },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsPageModule) },
  { path: 'report-detail', loadChildren: () => import('./pages/report-detail/report-detail.module').then(m => m.ReportDetailPageModule) },
  { path: 'report-mode', loadChildren: () => import('./pages/report-mode/report-mode.module').then(m => m.ReportModePageModule) },
  { path: 'address', loadChildren: () => import('./pages/address/address.module').then(m => m.AddressPageModule) },
  { path: 'camera', loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraPageModule) },
  { path: 'permissions', loadChildren: () => import('./pages/permissions/permissions.module').then(m => m.PermissionsPageModule) },
  { path: 'photo-preview', loadChildren: () => import('./pages/photo-preview/photo-preview.module').then(m => m.PhotoPreviewPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
