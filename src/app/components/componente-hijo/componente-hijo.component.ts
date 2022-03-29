import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.scss']
})

export class ComponenteHijoComponent {

  constructor(private dataService: DataServiceService) {}

  @Input() nombreHijo: string = 'Sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  cambiarNombre() {
    this.nombreHijo = 'Samara'
    this.cambioNombreHijo.emit(this.nombreHijo)
    this.dataService.nombreUsuario = this.nombreHijo
  }

}
