import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  @Input() page: string

  @Input() action: string = "Liastar"

  @Input() route: string = "admin"

  @Input() description: string

  @Input() icone: string = 'fa-dashboard'

  constructor() { }

  ngOnInit() {



  }

}
