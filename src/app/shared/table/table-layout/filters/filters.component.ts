import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ResourcesService } from 'src/app/shared/resources.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() params: any

  @Output() onParamsSearch = new EventEmitter<any>()

  formFilterGroup: FormGroup

  constructor(private formBuilder: FormBuilder, private service: ResourcesService) { }

  ngOnInit() {

    this.formFilterGroup = new FormGroup({

      page: new FormControl(this.params.page),

      status: new FormControl(this.params.status),

      number: new FormControl(this.params.number),

      between: new FormControl(this.params.between),

      order: new FormControl(this.params.order),

      column: new FormControl(this.params.column),

      search: new FormControl(this.params.search),

      limit: new FormControl(this.params.limit)
    })

  }

  onSearch() {

    Object.keys(this.formFilterGroup.controls).map(key=>{

      this.params[key] =this.formFilterGroup.get(key).value

   })
    
    this.onParamsSearch.emit(this.params)

  }

}
