import { Component } from '@angular/core';
/* ``=ctrl+96 */
@Component({
  selector: 'app-body',
  //template: ``,
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabiildad',
    autor: 'Ben Parker',
  };

  personajes: string[] = ['SpiderMan', 'Venom', 'Octupus'];
}
