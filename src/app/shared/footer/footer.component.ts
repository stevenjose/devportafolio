import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  autor: String = "JOSE G LOPEZ A";
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
