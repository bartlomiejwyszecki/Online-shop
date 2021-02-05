import { Component } from '@angular/core';
import { ProductService } from '../../data/data';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.html',
  providers: [ProductService]
})
export class SearchComponent { 
  categories!: string[];
  formModel: FormGroup;

  constructor(private ProductService: ProductService) {
    this.categories = this.ProductService.getAllCategories();

    const fb = new FormBuilder();
    this.formModel = fb.group({
      'price': [null, positiveNumberValidator],
      'category': [-1]
    })
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}

function positiveNumberValidator(control: FormControl): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null || typeof price === 'number' && price > 0 ?
    null : { positivenumber: true };
}


