import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
trashList : any;
@Input() object:any;
noteId : any;

  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
    this.getTrashList();
    
  }
  getTrashList(){
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res);
       this.trashList=res.data;
       this.trashList = this.trashList.filter((object: any) => {
        return object.trash == true;
      })
    })
    }

    unTrash(note:any){
      let reqData={
        noteId:note.noteId,
      }
      console.log(reqData)
      this.noteService.trashnotes(reqData).subscribe((response: any) => {
        console.log("Note Untrashed Successfully",response);
      })
    }
}
