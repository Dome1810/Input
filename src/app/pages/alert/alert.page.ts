import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo!: String;

  constructor(private alertCtrl: AlertController) { }
  ngOnInit() {
  }
  async presentInput(){

    const input=await this.alertCtrl.create({
    header: "Input",
    subHeader:"Ingrese su nombre",
    inputs: [
      {
        name: "txtNombre",
        type: "text",
        placeholder: "Nombre"
      }
    ],
    buttons:[{
      text:"Cancelar",
      role:"cancel",
      handler:()=>{
        console.log("Confirm Cancel");

      }
    },{
      text:"ok",
      handler:(data) =>{
        console.log("Confirm ok",data);
        this.titulo =data.txtNombre;
      }
    }]
    })
    await input.present();
  }

  async presentAlert() {
  const alert = await this.alertCtrl.create({
  backdropDismiss: false,
  header: 'Alert',
  subHeader: 'Important message',
  message: 'This is an alert!',
  buttons: ['OK']
  });
  await alert.present();
  }
  async presentAlertMultilpeButton() {
    const alert = await this.alertCtrl.create({
    backdropDismiss: false,
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['Cancel', 'Opne Modal', 'Delete']
    });
    await alert.present();
    };
  }
  