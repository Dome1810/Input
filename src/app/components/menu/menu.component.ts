import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Componente } from 'src/app//interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private dataServices: DataService) { }

  ngOnInit() {
  this.componentes = this.dataServices.getMenuOpts();
}
}