import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject:any;
  noteId : any;
  color : any;
  colorarray = [// [, '', '', '', ', ', '#cbf0f8', '#aecbfa']
  {color:'white'},{color:'#f28b82',name:'red'},{color:'#fbbc04',name:'orange'},
  {color:'#fff475',name:'yellow'},{color:'#ccff90', name:'green'},{color:'#a7ffeb',name:'teal'},
  {color: '',name:'blue'},{name:'Dark blue'},{name:'Purple'},{name:'pink'},{name:'brown'},
  {name:'Grey'}];


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
    })
  }

  onArchive(){
    let reqData={
      noteId:this.noteObject.noteId,
    }
    console.log(reqData);
    this.noteService.archivenotes(reqData).subscribe((response: any) =>{
      console.log("Note Archived Successfully", response);
    })
  }

   setColor(Color:any){
    console.log(Color)
    this.noteObject.color=Color
    this.noteId=this.noteObject.noteId
    let data = {
      color : Color
    }
    this.noteService.ColorNote(this.noteId,data).subscribe((result: any) => {
      console.log(result); 

  })
}
}