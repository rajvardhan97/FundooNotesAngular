import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any;
  @Output() refreshEvent = new EventEmitter<string>();
  noteId : any;
  color : any;
  colorarray: Array<any> = [{ code: "white", name: "White" }, { code: "tomato", name: "Red" },
  { code: "orange", name: "Orange" }, { code: "gold", name: "Yellow" },
  { code: "lightgreen", name: "Green" }, { code: "lightblue", name: "Teal" },
  { code: "turquoise", name: "Blue" }, { code: "royalblue", name: "Dark-Blue" },
  { code: "mediumorchid", name: "Purple" }, { code: "pink", name: "Pink" },
  { code: "peru", name: "Brown" }, { code: "grey", name: "Gray" }];


  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
  }

  onDelete(){
    let reqData={
      noteId:this.noteObject.noteId,
    }
    console.log(reqData)
    this.noteService.trashnotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
      this.refreshEvent.emit(response);
    })
  }

  onArchive(){
    let reqData={
      noteId:this.noteObject.noteId,
    }
    console.log(reqData);
    this.noteService.archivenotes(reqData).subscribe((response: any) =>{
      console.log("Note Archived Successfully", response);
      this.refreshEvent.emit(response);
    })
  }

   setColor(color:any){
    let reqData = {
      noteId:this.noteObject.noteId,
      color : color.name
    }
    this.noteService.ColorNote(reqData).subscribe((result: any) => {
      console.log('Color applied',result); 
      this.refreshEvent.emit(result);
  })
}
}