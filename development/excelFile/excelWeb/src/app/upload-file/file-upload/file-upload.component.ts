import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { template } from '@angular/core/src/render3';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
 
})

export class FileUploadComponent implements OnInit {
  public formData = new FormData();
  modalRef: BsModalRef;
res2;
res3;
confirmArr =[];
  constructor(private modalService: BsModalService,private fileupload :FileUploadService ,private toastrService :ToastrService) { }
  uploadfile;
  Upload : FormGroup;
  ngOnInit() {
    this.Upload = new FormGroup({
      file : new FormControl(''),
    });
  }
  onFileChange(event){
    this.uploadfile = event.target.files[0];
    console.log(this.uploadfile);
    this.formData.append("file",this.uploadfile);
    }
  
  onSubmit(){
  
    console.log(this.uploadfile);
    this.fileupload.passUploadFile(this.formData).subscribe((res:any) =>{
      if(res){
       console.log(res.data1);
       console.log(res.data2);
    this.res2= res.data1;
    this.res3= res.data2;
   // this.toastr.success('Data Insert Successfully', 'Toastr fun!');
      }else{
        console.log("***********************");
     //   this.toastr.remove('Data Insert',' !');
  
      }
   });
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  
  close(): void {
    this.modalRef.hide();
   }
   confirm(r2, r3){
     console.log(r2, r3);
    //  this.confirmArr.push(r2);
    //  this.confirmArr.push(r3);
     this.fileupload.confirmUploadEmployee(r2).subscribe((res:any) =>{
      if(res){
      console.log(res);
      this.fileupload.confirmUploadManager(r3).subscribe((res:any)=>{
        this.toastrService.success('Data Upload Successfully', 'Success', {
          timeOut: 3000
        });
        this.modalRef.hide();
      });
     
      }else{
        console.log("***********************");
      }
   });
   }
}
