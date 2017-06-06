import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any={};

  constructor(private _activated:ActivatedRoute, private _heroesService:HeroesService) {
    this._activated.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log("Heroe: ", this.heroe);
    })
   }


}
