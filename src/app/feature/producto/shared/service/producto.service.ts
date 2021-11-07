import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Espacio } from '../model/espacio';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Espacio[]>(`${environment.endpoint}/espacio`, this.http.optsName('consultar espacios'));
  }

  public guardar(espacio: Espacio) {
    return this.http.doPost<Espacio, boolean>(`${environment.endpoint}/espacio`, espacio,
                                                this.http.optsName('crear/actualizar productos'));
  }

  public eliminar(espacio: Espacio) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/espacio/${espacio.id}`,
                                                 this.http.optsName('eliminar productos'));
  }
}
