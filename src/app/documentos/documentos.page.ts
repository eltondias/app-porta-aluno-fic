import { UtilProvider } from './../services/util';
import { Component, OnInit, Inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  constructor(public alertController: AlertController, 
  private util:UtilProvider
  ) { }

  ngOnInit() {
  }

  async emitirDoc(mensagem) {
    const alert = await this.alertController.create({
      header: mensagem,
      message: 'Documento gerado com sucesso!',
      buttons: ['Fechar','Baixar documento']
    });

    await alert.present();
  }


  aumentarFonte() {
    this.util.aumentarFonte();
  }
 
  diminuirFonte() {
    this.util.diminuirFonte();
  }




}
