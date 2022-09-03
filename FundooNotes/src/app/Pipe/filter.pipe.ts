import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchNote: any){
    console.log(searchNote)
    if (searchNote === ''){
      return value;
    }
    const Message = [];
    for(const note of value){
      if(note.title.toLowerCase().includes(searchNote.toLowerCase()) || note.description.toLowerCase().includes(searchNote.toLowerCase())){
        Message.push(note)
      }
    }
    return Message;
  }

}