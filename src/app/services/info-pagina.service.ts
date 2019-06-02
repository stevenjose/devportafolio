import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagAbout } from '../interfaces/info-pag-about.interface';
import { InfoPrincipal } from '../interfaces/infor-pag-principal';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  info: InfoPagina ={ };
  cargada = false;
  equipo?: InfoPagAbout[];
  infoPagPrinc: InfoPrincipal[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarInfoPrincipal();
  }

  private cargarInfo(){
    //console.log("Servicio InfoPaginaService activo");
    // Leer archivo ./assets/data/data-pagina.json JSON
    this.http.get('/assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina) =>{
      this.cargada = true;
      this.info = resp;
      console.log(resp);
      //console.log(resp['twitter']);
    });
  }

  private cargarEquipo(){
    //console.log("Servicio InfoPaginaService activo");
    // Leer archivo ./assets/data/data-pagina.json JSON
    this.http.get('https://portafolio-d8e89.firebaseio.com/equipo.json')
    .subscribe((resp: InfoPagAbout[]) =>{
      this.cargada = true;
      this.equipo = resp;
    });
  }

  private cargarInfoPrincipal(){

    this.http.get('https://portafolio-d8e89.firebaseio.com/data-principal.json')
    .subscribe((resp: InfoPrincipal[]) =>{
      this.cargada = true;
      this.infoPagPrinc = resp;
    });
  }
}
