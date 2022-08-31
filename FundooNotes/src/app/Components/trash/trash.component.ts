import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
trashList : any;

  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
    this.getTrashList();
    
  }
  getTrashList(){
    this.noteService.getallnotes().subscribe((res: any) => {
      console.log(res);
       this.trashList=res
       this.trashList = res.filter((object: any) => {
        return object.isTrash === true;
      })
    })
    }

}
