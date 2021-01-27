import { Component, Input } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.html'
})
export class SearchComponent { 
  @Input() count: number = 5; 
  @Input() rating: number = 0;
}


