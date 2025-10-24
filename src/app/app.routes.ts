export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule) },
  // Agregar el resto de las rutas
];
