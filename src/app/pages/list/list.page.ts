import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IonItemSliding, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonItemSliding;

  usuarios: Observable<any>;

  constructor(
    private dataService: DataService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers().pipe(
      tap(console.log)
    );
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    console.log('favorite: ', user);
    this.lista.closeOpened();
    this.presentToast('Gurdó en favoritos');
  }
  share(user) {
    console.log('share: ', user);
    this.presentToast('Compartido');
    this.lista.closeOpened();
  }
  borrar(user) {
    console.log('borrar: ', user);
    this.presentToast('Borrado');
    this.lista.closeOpened();
  }
}
