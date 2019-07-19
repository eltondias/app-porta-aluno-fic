
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Inject } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class UtilProvider {

  menuEmitter = new EventEmitter();
 




  constructor(public http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController,
    @Inject(DOCUMENT) private document
    ) {
 
  }



  async loading(mensagem, duracao?) {
    const loading = await this.loadingController.create({
      message: mensagem,
      duration: (duracao)? duracao : 200
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  BRL(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  public aumentarFonte() {
    let fontSize =  this.document.body.style.fontSize;
    let size: number = (fontSize == '')? 1: <number> fontSize.replace('rem','')
    console.log( size++);
    fontSize = (size++) + 'rem'
    console.log( fontSize)
    this.document.body.style.fontSize = fontSize;
  }

  public diminuirFonte() {
    let fontSize =  this.document.body.style.fontSize;
    let size: number = (fontSize == '')? 1: <number> fontSize.replace('rem','')  
    fontSize = (--size) + 'rem'
    console.log( fontSize)
    this.document.body.style.fontSize = fontSize;
  }


}
