import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
