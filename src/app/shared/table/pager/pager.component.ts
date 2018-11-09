import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ResourcesService } from '../../resources.service';
import { PagerService } from '../pager.service';
import { Settings } from '../../settings.model';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  constructor(private service: ResourcesService, private pagerService: PagerService) { }
 
 @Input() resource: string;
  
  // array of all items to be paged
  @Input()  records: any[];
 
 // pager object
 pager: any = {};

 // paged items
 pagedItems: any[];

 @Input() totalPage: number = 0;

 @Output() onChangePage = new EventEmitter<Settings>();

  pages: Array<number> = [];
  ngOnInit() {
   
    this.setPage(1)
  }


  ngOnChanges(changes: any) {
    if (changes.totalPage) {
      this.pages = Array(this.totalPage)
        .fill(this.totalPage)
        .map((x, i) => {
          return i + 1;
        });
    }
  }

  changePage($event, page) {
   
  }


  setPage(page: number) {
    
    console.log(this.totalPage)
    // get pager object from service
    if(this.totalPage){
      this.pager = this.pagerService.getPager(this.totalPage, page);

      // get current page of items
      this.pagedItems = this.records.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
   
}
}
