import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NguiMapModule} from '@ngui/map';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyA6jDcAUiCxLkDQj2qO6mxE8zHTMkXxa-w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
