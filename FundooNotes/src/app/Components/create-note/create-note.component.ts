import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
createForm : FormGroup;
display : boolean=true;
submitted = false;
token : any;
title:string=""
description:string=""

  constructor(private formBuilder: FormBuilder,private note : NotesService, private activeRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  onSubmit(){
    this.submitted=true;
    if(this.createForm.valid){
      console.log("Note Created Successfully");
      let reqData = {
        title: this.createForm.value.title,
        description: this.createForm.value.description,
      }
      console.log(reqData);
      this.note.createnotes(reqData).subscribe((response : any) =>{
        console.log(response);
      });
    }
    else{
      this.submitted=false;
      console.log(this.title, this.description);
      if((this.title==null || this.title=="") && (this.description==null||this.description==""))
      {
        console.log("Values are null");
      }
    }
    this.display=true;
  }
}
