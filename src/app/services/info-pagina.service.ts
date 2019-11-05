import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPagina listo ;u;');

    this.cargarinfo();
    this.cargrEquipo();
   }

   private cargarinfo(){
    // leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;

    });
   }

   private cargrEquipo(){
    this.http.get('https://angular-html-669f1.firebaseio.com/equipo.json')
    .subscribe( ( resp: any[] ) => {
      this.equipo = resp;
      // console.log(resp)
      });
  }
}
