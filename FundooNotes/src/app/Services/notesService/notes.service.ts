import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token : any;

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem('token')
   }
  
  createnotes(reqdata : any){
    console.log(reqdata);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.postService('/Notes/Create',reqdata,true,header)
   }
   getallnotes(){
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.getService('/Notes/GetAll',true,header)
   }

   updatenote(noteId:number,reqData:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
  }
  return this.httpService.putService('/Notes/Update?NoteId='+ noteId,reqData,true,header)
}

trashnotes(reqData:any){

  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
        'Authorization':'Bearer '+ this.token
    })
  }
  return this.httpService.putService('/Notes/Trash?NotesId='+ reqData.noteId,{},true,header)
  }
}
