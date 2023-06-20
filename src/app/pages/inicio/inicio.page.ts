import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
//import { Componente } from './interfaces/interfaces';

//crear una interface para definir propiedades que el componente lista va
//interface Componente {
//icon: string;
//name: string;
//redirecto:string;
//}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;
  constructor(private menuCtrl:MenuController ,
              private dataService: DataService){}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  
  }
   mostrarMenu() {
    this.menuCtrl.toggle();
     //this.menuCtrl.open('first');
      }
  //  toggleMenu(){
   //
}

  
