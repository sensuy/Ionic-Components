import { Componente } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.httpClient.get<Componente[]>('/assets/data/menu.json');
  }
}
