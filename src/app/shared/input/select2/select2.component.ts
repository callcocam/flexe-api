import { Component, OnInit, Input, ContentChild, Output, EventEmitter } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { MEAT_API } from 'src/app/app.api';
import { ResourcesService } from '../../resources.service';

@Component({
  selector: 'app-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.css']
})
export class Select2Component implements OnInit {

  public selectData: Array<Select2OptionData>;

  @Output() selected = new EventEmitter<string>();

  public options:Select2Options;
  public ajaxOptions:Select2AjaxOptions;

  @Input() value: any

  onChange: any

  @Input() id: string = 'id'

  @Input() text: string = 'name'

  @Input() resource: string

  @Input() label: string

  @Input() errorMessage: string

  constructor(private service: ResourcesService) { }

  ngOnInit() {

    if (this.resource === undefined) {

      throw new Error('Nenhum resouce valido foi pasado')

    }

    this.service.path = this.resource;

    this.ajaxOptions = {

      url: `${MEAT_API}/api${this.resource}/select/${this.id}/${this.text}`,

      data: function (params) {

        var query = {

          search: params.term

        }

        return query;
      }
    }

    this.service.select2(this.id, this.text, this.value).subscribe(response => {

      this.selectData = response.rows

      this.options = {
        width:'100%',

        theme: 'bootstrap',

        placeholder: "Select a state",

        allowClear: true,

        ajax: this.ajaxOptions
      }

    })

  }

  public changed(e: any): void {

    this.value = e.value;
    this.selected.emit(this.value)
  }

  hasSuccess(): boolean {

    return this.value

  }

  hasError(): boolean {

    return !this.value

  }
}
