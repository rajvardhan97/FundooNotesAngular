import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesList:any;
  @Output() refreshDisplay = new EventEmitter<string>();
  message : any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Success",this.notesList);
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent,  {
     width: '45%px',
     height: 'auto',
     panelClass: 'updateDialog',
     data:note
     });
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed',result);
     })
  }
  RefreshEvent($event:any){
    console.log($event);
    this.message = $event;
    this.refreshDisplay.emit(this.message);
  }
}
