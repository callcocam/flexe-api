import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { SearchComponent } from './../search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TableComponent,SearchComponent],
  exports:[
  TableComponent,SearchComponent
  ]
})
export class TableModule { }
