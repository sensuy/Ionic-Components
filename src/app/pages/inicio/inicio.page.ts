
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componenentes: Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.componenentes = this.dataService.getMenuOpts();
  }


  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
