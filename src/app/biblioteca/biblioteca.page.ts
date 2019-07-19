import { Component, OnInit } from '@angular/core';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor( private util: UtilProvider) { }

  ngOnInit() {
  }

  aumentarFonte() {
    this.util.aumentarFonte();
  }
 
  diminuirFonte() {
    this.util.diminuirFonte();
  }

}
