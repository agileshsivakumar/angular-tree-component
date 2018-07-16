import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModuleClass } from './tree/tree.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeModuleClass],
  bootstrap: [AppComponent]
})
export class AppModule {}
