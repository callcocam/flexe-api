import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './messages/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { TableLayoutModule } from './table/table-layout/table-layout.module';
import { PagerService } from './table/pager.service';
import { AppRoutingModule } from '../app-routing.module';
import { InputInlineComponent } from './input/input-inline.component';
import { InputHiddenComponent } from './input/input-hidden.component';
import { InputRadioComponent } from './input/input-radio/input-radio.component';
import { FileUploadComponent } from './input/file-upload/file-upload.component';
import { FileUploadPreviewComponent } from './input/file-upload-preview/file-upload-preview.component';
import { BreadcrumbComponent } from '../admin/utils/breadcrumb/breadcrumb.component';
import { Select2Component } from './input/select2/select2.component';
import { Select2Directive } from './input/select2/select2.directive';
import { Select2Module } from 'ng2-select2';
import { MaskDirective } from './input/mask.directive';
import { DtPickerDirective } from './input/dt-picker.directive';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
    declarations: [InputComponent,
        SnackbarComponent,
        InputInlineComponent,
        InputHiddenComponent,
        InputRadioComponent,
        FileUploadComponent,
        FileUploadPreviewComponent,
        BreadcrumbComponent,
        Select2Component,
        Select2Directive,
        MaskDirective,
        DtPickerDirective,
        TabsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TableLayoutModule,
        Select2Module
    ],
    exports: [
        InputComponent,
        InputInlineComponent,
        InputHiddenComponent,
        InputRadioComponent,
        FileUploadComponent,
        FileUploadPreviewComponent,
        FormsModule,
        ReactiveFormsModule,
        SnackbarComponent,
        TableLayoutModule,
        BreadcrumbComponent,
        Select2Component,
        Select2Module,
        MaskDirective,
        TabsComponent]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NotificationService, PagerService]
        }
    }
}
