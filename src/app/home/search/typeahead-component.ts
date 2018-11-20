import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterSerach } from 'src/app/shared/table/table-layout/filters/filter.model';
import { APP_ROUTE_SISTEMA, } from 'src/app/app.api';

@Component({
  selector: 'ngbd-typeahead',
  templateUrl: './typeahead-component.html'
})
export class NgbdTypeaheadComponent implements OnInit {

  @Input() tenant

  public searchText:string = ''
  
  public route = APP_ROUTE_SISTEMA

  @Output() results = new EventEmitter()

  @Input() status = ''


  @Input() busca = true

  @Input() filterSerach: FilterSerach

  constructor() { }

  ngOnInit(): void {


  }

  load() {

    this.filterSerach.search = this.searchText

    this.filterSerach.status = this.status

    this.results.emit(this.filterSerach)

  }

  search(){

    this.load()

  }

}