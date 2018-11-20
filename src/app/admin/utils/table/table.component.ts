import { Component, OnInit, ViewChildren, QueryList ,Input, Output, EventEmitter } from '@angular/core';
import { FilterSerach } from 'src/app/shared/table/table-layout/filters/filter.model';

import { PagerService } from '../pager.service';
import { ResourcesService } from '../../../shared/resources.service'
import { Settings } from '../settings.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


   @Output() eventPage = new EventEmitter()

   @Input() settings: Settings

    public params
    // pager object
    public pager: any = {};

 ngOnInit(): void {

		this.params = this.settings.params

		this.pager = this.pagerService.getPager(parseInt(this.params.totalItems), parseInt(this.params.page), parseInt(this.params.limit));

    }

  constructor(private service: ResourcesService,private pagerService: PagerService) {}

    changePage($event, page) {

        $event.preventDefault();
        
        this.params.page = page

        this.pager.currentPage = page

        this.eventPage.emit(this.params)
    }


    nextPage():number{

        let num:number = 1

        return parseInt(this.pager.currentPage) + num

    }

    
    previosPage(){

        let num:number = 1

        return parseInt(this.pager.currentPage)- num

    }
   

}

