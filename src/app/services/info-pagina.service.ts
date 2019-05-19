import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoPagAbout } from '../interfaces/info-pag-about.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina ={};
  equipotrab: InfoPagAbout={};
  cargada = false;
  equipo?: any = {};

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //console.log("Servicio InfoPaginaService activo");
    // Leer archivo ./assets/data/data-pagina.json JSON
    this.http.get('/assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina) =>{
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
      //console.log(resp['twitter']);
    });
  }

  private cargarEquipo(){
    //console.log("Servicio InfoPaginaService activo");
    // Leer archivo ./assets/data/data-pagina.json JSON
    this.http.get('https://portafolio-d8e89.firebaseio.com/equipo.json')
    .subscribe((resp?:InfoPagAbout) =>{
      this.cargada = true;
      this.equipotrab = resp;
      //this.equipo = resp;
      //console.log(this.equipo);
      //console.log(resp['twitter']);
    });
  }
}
