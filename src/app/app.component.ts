import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styles.css']
})
export class AppComponent {
  title = 'Estacionamiento';
  public companies: MenuItem[] = [
    { url: '/espacio', nombre: 'Vehiculos' },
    { url: '/vehiculo', nombre: 'Espacios' }
    
  ];

  
}
