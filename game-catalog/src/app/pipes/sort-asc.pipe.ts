import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAsc'
})
export class SortAscPipe implements PipeTransform {

  transform(items: any[], sortAsc:boolean):any[] {
   if(sortAsc){
    return items.sort((a,b)=>b.price -a.price)
   }else{
    return items.sort((a,b)=>a.price -b.price)
   }

}}
