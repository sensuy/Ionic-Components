import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componenentes: Componente[] = [
    { icon: 'american-football', name: 'Action sheet', redirectTo: '/action-sheet' },
    { icon: 'logo-google-playstore', name: 'Alert', redirectTo: '/alert' },
    { icon: 'beaker', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'radio-button-on', name: 'Buttons and router', redirectTo: '/bottons' },
    { icon: 'card', name: 'Card', redirectTo: '/card' },
    { icon: 'checkmark-circle-outline', name: 'Checkbox', redirectTo: '/check' },
    { icon: 'calendar', name: 'DateTime', redirectTo: '/date-time' },
    { icon: 'car', name: 'Fabs', redirectTo: '/fab' },
    { icon: 'grid', name: 'Grid - Rows', redirectTo: '/grid' },
    { icon: 'infinite', name: 'Infinit Scroll', redirectTo: '/infinite-scroll' },
    { icon: 'hammer', name: 'Input - Forms', redirectTo: '/input' },

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
