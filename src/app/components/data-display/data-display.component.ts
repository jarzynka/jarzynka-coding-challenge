import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log("Do I have any data?", JSON.stringify(this.data));
  }

}
