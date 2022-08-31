import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any;

  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
  }

  onDelete(){
    // let reqData={
    //   noteId:this.noteObject.noteId,
    // }
    // console.log('Moved to Trash');
    // this.noteId=[this.noteObject.noteId]
    // this.noteService.trashnotes(this.noteId).subscribe((res:any) => {
    //   console.log(res);
    // })
    let reqData={
      noteId:this.noteObject.noteId,
    }
    console.log(reqData)
    this.noteService.trashnotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
    })
  }
}