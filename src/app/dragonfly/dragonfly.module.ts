import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list/unit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DragonService } from './dragon.service';

import { DragonDirective } from './dragon.directive';

import { displayRowPipe } from './display.row';
import { HttpModule } from '@angular/http';
import { PaginateListComponent } from './paginate-list/paginate-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  exports : [
    UnitListComponent,
    DragonDirective
  ],
  declarations: [
    UnitListComponent,
    displayRowPipe,
    DragonDirective,
    PaginateListComponent
  ],
  providers: [DragonService]
})
export class DragonflyModule { }
