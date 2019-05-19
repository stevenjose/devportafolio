import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // refenrenciar el servicio creado para trabajar con la api-rest atributo de tipo infoPaginaService de tipo la interfaz InfoPaginaService
  constructor(public _servicio: InfoPaginaService,
              private route: Router) {

  }

  ngOnInit() {
  }

  buscarProducto(termino: string){
    if(termino.length < 1){
      return;
    }
  this.route.navigate(['/search',termino]);
    console.log(termino);
  }

}
