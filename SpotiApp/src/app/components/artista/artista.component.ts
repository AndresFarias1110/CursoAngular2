import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})

export class ArtistaComponent implements OnInit {
  artista:any;
  pistas:any[];
  image:string;

  constructor(private activatedRoute:ActivatedRoute,
              private spotifyService:SpotifyService,
              private _location: Location) { }

  ngOnInit() {

    this.activatedRoute.params
    .map( parametros => parametros['id'])
    .subscribe( id => {

      this.spotifyService.getArtista(id)
      .subscribe(data => {
        this.artista = data;
        this.image = this.artista.images[2].url;
        console.log("Image:", this.image);
      });

      this.spotifyService.getTop(id)
      .subscribe(data => {
        this.pistas = data;
        console.log(this.pistas)
      });

    } )
  }

  returnPage(){
    this._location.back();
  }

}
