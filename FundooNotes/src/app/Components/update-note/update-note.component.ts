import { Component, OnInit, Inject } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any
  description: any
  id: any

  constructor(private noteService: NotesService,public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.title=data.title;
    this.description=data.description;
    this.id=data.noteId;
  }

  ngOnInit(): void {
  }
  onClose() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId: this.id
    }

    this.noteService.updatenote(this.id, reqData).subscribe((response: any) => {
      console.log("Update ",response);
    this.dialogRef.close();
    });
  }
}
