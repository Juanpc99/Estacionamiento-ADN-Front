import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Espacio } from '../../shared/model/espacio';
import { EspacioService } from '../../shared/service/espacio.service';
//import { ProductoService } from '../../shared/service/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.styles.css']
})
export class ListarProductoComponent implements OnInit {
  public listaEspacios: Observable<Espacio[]>;

  constructor(protected espacioService: EspacioService) { }

  ngOnInit() {
    this.listaEspacios = this.espacioService.consultar();
  }

}
