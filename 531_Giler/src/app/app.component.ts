import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '531_Giler';
  lista: string [] = ["prova", "prova2"]
  stringa: string = ""

  salva(){
    this.lista.push(this.stringa)
  }
}
