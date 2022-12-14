import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  notelist:any;

  constructor(private notes: NotesService) { }

  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit(){
    this.notes.getallnotes().subscribe((response:any)=>{
      console.log(response);
      this.notelist=response.data
      console.log("Array:", this.notelist);
      this.notelist=this.notelist.filter((object: any) => {
        return object.trash == false && object.archive == false;  
    })
  })
}
refreshNote($event:any){
  console.log($event);
  this.onSubmit();
}

}
