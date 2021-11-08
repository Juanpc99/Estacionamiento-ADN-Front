import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/espacio', pathMatch: 'full' },
  { path: 'espacio', loadChildren: () => import('./feature/vehiculo/vehiculo.module').then(mod => mod.VehiculoModule)  },
  { path: 'vehiculo', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
