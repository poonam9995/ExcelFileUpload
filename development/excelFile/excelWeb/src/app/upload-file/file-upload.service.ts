import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  readonly baseURL = "http://localhost:4000/excelFile";
  constructor(private http: HttpClient) { }
  passUploadFile(data){
   return this.http.post(this.baseURL,data);
  }
  confirmUploadEmployee(data){
  return this.http.post(this.baseURL+'/confirmEmployee',data);
 }
 confirmUploadManager(data){
  return this.http.post(this.baseURL+'/confirmManager',data);
 }
}
