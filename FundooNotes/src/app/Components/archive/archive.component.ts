import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notesService/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList: any;

  constructor(private noteService : NotesService) { }

  ngOnInit(): void {
    this.getArchiveList();
  }
  getArchiveList() {
    this.noteService.getallnotes().subscribe((response : any)=> {
      console.log(response);
      this.archiveList= response;
      console.log(this.archiveList);
      this.archiveList = response.data.filter((object : any)=>{
        return object.archive == true;
      })
    })
  }

}
