import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentInput() {
    const input = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre: ',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Insert name'

        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('Ok: ', data);
            this.titulo = data.txtNombre;
          }
        }
      ]
    });

    input.present();
  }

}
