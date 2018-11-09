import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css']
})
export class ThComponent implements OnInit {


  @Input() map:any
  @Input() column:string = 'id'
  @Input() direction:boolean = true

  constructor() { }

  ngOnInit() {
  }

}
