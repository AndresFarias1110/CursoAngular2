import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBuscqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = "Bearer BQD0io6y__aiyT9gLBzbCLC2FEBjbHAZFM_byNu0Be3So-l_W9HBxxRYBhJj5sdMdhHEsEenuVR1e4X782fz9w";

  constructor(private http:Http) { }

  getArtistas(termino:string){
    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = "?q="+ termino +"&type=artist";
    let url = this.urlBuscqueda + query;

    return this.http.get(url, { headers }).
                    map( res => {
                      // console.log(res.json().artists.items);
                      this.artistas = res.json().artists.items;


                      return this.artistas;
                    } );
  }

  getArtista(id:string){
    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = "/"+ id;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers }).
                    map( res => {
                      console.log(res.json());
                      //this.artistas = res.json().artists.items;


                      return res.json();
                    } );
  }

  getTop(id:string){
    let headers = new Headers();
    headers.append('authorization', this.token);

    let query = "/"+ id + "/top-tracks?country=US";
    let url = this.urlArtista + query;

    return this.http.get(url, { headers }).
                    map( res => {
                      console.log(res.json().tracks);
                      //this.artistas = res.json().artists.items;
                      return res.json().tracks;
                    } );
  }

}
