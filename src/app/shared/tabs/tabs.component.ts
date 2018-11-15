import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

 @Input() navs
 @Input() table
 @Input() title = "Editar"

  constructor() { }

  ngOnInit() {
  }

  select(event){

    event.preventDefault();
  }

}
