import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculo/listar-vehiculo.component';



const routes: Routes = [
    {
        path: '',
        component: VehiculoComponent,
        children: [
            {
                path: 'listar',
                component: ListarVehiculosComponent
            }
        ]

    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class VehiculoRoutingModule{}