import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TieredMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
