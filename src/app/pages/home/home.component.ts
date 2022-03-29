import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public dataService: DataServiceService) {}

  nombre: string = 'Nombre del Usuario';

  cambiarNombre() {
    this.nombre = 'Juan'
    this.dataService.nombreUsuario = this.nombre
  }

}
