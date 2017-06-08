import { Component, OnInit, ViewChild } from '@angular/core';
import {HeatmapLayer} from '@ngui/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre:string ="Andres";
  arreglo = [1,2,3,4,5,6,7,8,9];
  video = "uoX_3HE8ScI?ecver=2";

  @ViewChild(HeatmapLayer) heatmapLayer: HeatmapLayer;

  heatmap: google.maps.visualization.HeatmapLayer;
  map: google.maps.Map;

  heatmapData = [
    new google.maps.LatLng(37.782, -122.447),
    new google.maps.LatLng(37.782, -122.445),
    new google.maps.LatLng(37.782, -122.443),
    new google.maps.LatLng(37.782, -122.441),
    new google.maps.LatLng(37.782, -122.439),
    new google.maps.LatLng(37.782, -122.437),
    new google.maps.LatLng(37.782, -122.435),
    new google.maps.LatLng(37.785, -122.447),
    new google.maps.LatLng(37.785, -122.445),
    new google.maps.LatLng(37.785, -122.443),
    new google.maps.LatLng(37.785, -122.441),
    new google.maps.LatLng(37.785, -122.439),
    new google.maps.LatLng(37.785, -122.437),
    new google.maps.LatLng(37.785, -122.435)
  ];

  ngOnInit() {
    this.heatmapLayer['initialized$'].subscribe(heatmap => {
      this.heatmap = heatmap;
      this.map = this.heatmap.getMap();
    });
  }

  toggleHeatmap() {
    this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
  }

  changeGradient() {
    let gradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ];
    this.heatmap.set('gradient', this.heatmap.get('gradient') ? null : gradient);
  }

  changeRadius() {
    this.heatmap.set('radius', this.heatmap.get('radius') ? null : 20);
  }

  changeOpacity() {
    this.heatmap.set('opacity', this.heatmap.get('opacity') ? null : 0.2);
  }

  loadRandomPoints() {
    this.heatmapData = [];

    for (let i = 0 ; i < 9; i++) {
      this.addPoint();
    }
  }

  addPoint() {
    let randomLat = Math.random() * 0.0099 + 37.782551;
    let randomLng = Math.random() * 0.0099 + -122.445368;
    let latlng = new google.maps.LatLng(randomLat, randomLng);
    this.heatmapData.push(latlng);
  }

}
