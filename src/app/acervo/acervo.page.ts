import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.page.html',
  styleUrls: ['./acervo.page.scss'],
})
export class AcervoPage implements OnInit {

  constructor(private bibliotecaService: BibliotecaService,  private util: UtilProvider) { }

  obras = [];
  palavrachave: string;
  titulo: string;
  subtitulo: string
  autor: string;

  ngOnInit() {
   
  }

  consultaracervo() {
    this.bibliotecaService.consultaracervo({palavrachave: this.palavrachave, titulo: this.titulo, subtitulo: this.subtitulo, autor: this.autor}).subscribe( res => {
      if(res.body) {
        console.log(res.body);
        this.obras = res.body;
      }
    })
  }

  aumentarFonte() {
    this.util.aumentarFonte();
  }
 
  diminuirFonte() {
    this.util.diminuirFonte();
  }


}
