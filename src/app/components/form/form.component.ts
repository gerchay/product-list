import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product = {} as Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    if(this.product.name !== '' && this.product.price != 0 && this.product.description != '') {
      this.productService.addProduct(this.product);
      this.product = {} as Product;
    }
  }
}
