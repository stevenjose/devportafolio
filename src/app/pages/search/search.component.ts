import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public servcioProd: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params)=>  {
      //console.log(params['termino']);
      this.servcioProd.buscarProducto(params['termino']);
    });
  }

}
/**
 * La palabra termino es la definida en las rutas app-routing.module.ts
*/
