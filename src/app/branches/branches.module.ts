import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BranchesRoutingModule } from './branches-routing.module';
import { FilterComponent } from './components/filter/filter.component';
import { FireComponent } from './components/fire/fire.component';
import { BranchesComponent } from './pages/branches/branches.component';


@NgModule({
  declarations: [
    BranchesComponent,
    FilterComponent,
    FireComponent,
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BranchesModule { }
