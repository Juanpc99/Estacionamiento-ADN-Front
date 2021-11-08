import { NgModule } from "@angular/core";
import { VehiculoService } from "./shared/service/vehiculo.service";
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ListarVehiculosComponent } from './components/listar-vehiculo/listar-vehiculo.component';


@NgModule({

    declarations: [
        VehiculoComponent,
        ListarVehiculosComponent
    ],
    imports: [
        VehiculoRoutingModule,
        SharedModule
    ],
    providers: [
        VehiculoService
    ]
})
export class VehiculoModule {}