import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService, Heroe} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  private heroes:Heroe[] = [];
  private termino:string;

  constructor(private _activated:ActivatedRoute,
     private _heroesService:HeroesService,
   private _router:Router) {

   }

  ngOnInit() {
    this._activated.params.subscribe(params => {
      this.termino = params['textSearch'];
      let heroesArr:Heroe[] = this._heroesService.buscarHeroes(this.termino);
      console.log("HEROES ENCONTRADOS:", heroesArr);
      this.heroes = heroesArr;
    });
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe', idx])
  }

}
