import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/info-producto.interfaces';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando = true;
constructor(private http: HttpClient) {
      this.cargarProductos();
   }

  private cargarProductos(){

// tslint:disable-next-line: no-shadowed-variable
    return new Promise(  ( resolve, reject ) => {
      this.http.get('https://portafolio-d8e89.firebaseio.com/productos_idx.json')
          .subscribe( (resp: Producto[]) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });

    });
  }

  public getProductos(id: string){
    return this.http.get('https://portafolio-d8e89.firebaseio.com/productos/'+id+'.json');
  }


  buscarProducto( termino: string ) {


    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }


  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }

    });


  }

}
