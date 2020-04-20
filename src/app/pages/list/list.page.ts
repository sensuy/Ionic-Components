import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonItemSliding;

  usuarios: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers().pipe(
      tap(console.log)
    );
  }

  favorite(user) {
    console.log('favorite: ', user);
    this.lista.closeOpened();
  }
  share(user) {
    console.log('share: ', user);
    this.lista.closeOpened();
  }
  borrar(user) {
    console.log('borrar: ', user);
    this.lista.closeOpened();
  }
}
