import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/*import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /*private url = 'http://192.169.244.120:8050';
  private socket;*/

  constructor() { }

  ngOnInit() {
    /*new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('client_location_sicom_phi', (data) => {
        observer.next(data);
      });
    }).subscribe(message => {
      console.log('DATA LOCATION:',message);
    });*/
  }

}
