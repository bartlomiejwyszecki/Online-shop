import { Component,  Input, OnInit } from '@angular/core'; 

@Component({
  templateUrl: './stars.html',
  styleUrls: ['./stars.css'],
  selector: 'stars'
})
export class StarsComponent {
  @Input() count: number = 5; 
  @Input() rating: number = 0;
}
