import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { PagesModule } from './modules/pages/pages.module';
import {  } from './components/organisms/organisms.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
