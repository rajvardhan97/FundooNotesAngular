import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataService } from 'src/app/Services/dataService/data.service';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesList:any;
  @Output() refreshDisplay = new EventEmitter<string>();
  message : any;
  searchNote : any;

  constructor(private dialog: MatDialog, private data : DataService) { }

  ngOnInit(): void {
    console.log("Success",this.notesList);
    
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process",res)
      this.searchNote = res;
    })
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
