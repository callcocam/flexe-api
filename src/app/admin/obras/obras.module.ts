import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModule } from './project/project.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectModule
  ],
  declarations: []
})
export class ObrasModule { }
