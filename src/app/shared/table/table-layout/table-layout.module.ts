import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyPipe, DatePipe} from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import { FiltersComponent } from './filters/filters.component';
import { FormatCellPipe } from './format-cell.pipe';
import { StyleCellDirective } from './style-cell.directive';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PagerComponent } from '../pager/pager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThComponent } from './th/th.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  declarations: [TableLayoutComponent, FiltersComponent, FormatCellPipe, StyleCellDirective, PagerComponent, ThComponent],
  
  exports:[TableLayoutComponent, FiltersComponent, PagerComponent],
  providers:[CurrencyPipe, DatePipe]
})
export class TableLayoutModule { }
