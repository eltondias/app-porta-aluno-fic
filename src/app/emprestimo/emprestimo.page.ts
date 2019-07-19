import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../services/biblioteca.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.page.html',
  styleUrls: ['./emprestimo.page.scss'],
})
export class EmprestimoPage implements OnInit {

  obra: any;
  dataInicio =  new Date(); 
  dataFim =  new Date(); 

  constructor( private util: UtilProvider, public alertController: AlertController, private bibliotecaService: BibliotecaService, private route: ActivatedRoute, public loadingController: LoadingController ) { }

  async loading(mensagem) {
    const loading = await this.loadingController.create({ message: mensagem, duration: 1000 });
    await loading.present();
  }

  ngOnInit() {

    this.dataFim.setDate( this.dataFim.getDate() + 15 );

    this.route.params.subscribe(params => {
      this.getObra(params['id']);
      this.loading('');
    });
  }
 

  getObra(id) {
    this.bibliotecaService.getObra({id: id}).subscribe( res => {
      if(res.body) {
       this.obra = res.body;
       console.log(this.obra)
      }
    })
  }

 async confirmarEmprestimo(){
    this.loading('Confirmando empréstimo');

    setTimeout(() => {
      this.alert();
    }, 1100);
   

  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Confirmação de empréstimo',
      subHeader: '',
      message: 'O livro foi emprestado com sucesso',
      buttons: ['OK']
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
