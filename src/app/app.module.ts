import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ProductsComponent } from './components/products/products.component';

// FIRESTORE
import { AngularFireModule } from '@angular/fire'; // BConectarse a los servicios de firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; // servicio de de firebase

// Service
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
