import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailablePipe } from './available.pipe';
import { SortAscPipe } from './sort-asc.pipe';



@NgModule({
  declarations: [
    AvailablePipe,
    SortAscPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[AvailablePipe,SortAscPipe],

})
export class PipesModule { }
