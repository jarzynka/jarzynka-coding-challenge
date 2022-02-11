import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-display-item',
  templateUrl: './data-display-item.component.html',
  styleUrls: ['./data-display-item.component.css']
})
export class DataDisplayItemComponent implements OnInit {

  @Input() title: string = "";
  @Input() value: string = "";
  @Input() level: any;

  constructor() { }

  ngOnInit(): void {
  }

}
