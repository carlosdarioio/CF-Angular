//ng g c components/heroe -is
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { partitionArray } from '@angular/compiler/src/util';
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent {
  heroe: any = {}; //cccreando objeto
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    //regresa observador / promesa que esta pendiente a cambios
    this.activatedRoute.params.subscribe((params) => {
      console.log(params); //params['id']
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  //ngOnInit(): void {}
}
