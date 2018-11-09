import { Component, Input, OnInit } from '@angular/core';
import { ColumnSetting, ColumnMap } from './layout.model';
import { Settings } from '../../settings.model';
import { ResourcesService } from '../../resources.service';
import { SnotifyService } from 'ng-snotify';
import { PagerService } from '../pager.service';

@Component({
    selector: 'ct-table',
    templateUrl: './table-layout.component.html',
    styleUrls: ['./table-layout.component.css'],
    preserveWhitespaces: true
})
export class TableLayoutComponent implements OnInit {

    constructor(private service: ResourcesService, private alert: SnotifyService, private pagerService: PagerService) { }

    @Input() tableClass: string = 'table table-striped table-sm'

    @Input() tableId: string = 'table'

    @Input() routeAdd: string = 'admin'

    @Input() controller: string = 'admin'

    @Input() resource: string;

    public settings: Settings
    // pager object
    public pager: any = {};

    public direction: boolean = false;

    public column: string = 'id';

    public records: any[]

    public params

    public options: any = { controller: 'admin' }

    public caption: string = 'Lista de dados'

    public headers: ColumnSetting[]

    public columnMaps: ColumnMap[]

    // paged items
    public pagedItems: any[];

    public colspam:number = 1

    ngOnInit(): void {

        this.service.path = this.resource


        this.service.build(this.params).getList().subscribe(response => {

            this.settings = new Settings(response)

            this.load()

        })

    }

    changePage($event, page) {

        $event.preventDefault();
         console.log(page)
        this.params.page = page

        this.onSearch()
    }

    onOrder(name, order) {

        if (order) {

            this.column = name

            this.params.column = name

            this.params.order = this.transform()

            this.onSearch()
        }


    }

    transform() {

        if (!this.direction) {

            this.direction = true;

            return "DESC"

        }

        this.direction = false;

        return "ASC"

    }

    load() {
        this.records = null

        if (this.settings) {

            this.records = this.settings.rows

            this.params = this.settings.params

            this.headers = this.settings.headers

            this.caption = this.settings.title

            this.options = this.settings.options

            this.controller = this.options.controller  

            this.columnMaps = Object.keys(this.headers).map(key => {
                               
                return new ColumnMap(this.headers[key]);

            });

            this.pager = this.pagerService.getPager(parseInt(this.params.totalItems), parseInt(this.params.page), parseInt(this.params.limit));

        }
    }

    nextPage():number{

        let num:number = 1

        return parseInt(this.pager.currentPage) + num

    }

    
    previosPage(){

        let num:number = 1

        return parseInt(this.pager.currentPage)- num

    }
    onParamsSearch(evemt) {

        this.params = evemt;

        this.onSearch()

    }

    onSearch() {


        this.service.build(this.params).list().subscribe(response => {

            this.settings = new Settings(response)

            this.load()

        })




    }

}
