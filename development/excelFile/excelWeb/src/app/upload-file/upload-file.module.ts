import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    ReactiveFormsModule,
   FormsModule 
  ]
})
export class UploadFileModule { }
