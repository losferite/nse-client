import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HostsComponent } from './hosts/hosts.component';
import { BranchesComponent } from './branches/branches.component';
import { FilterComponent } from './branches/filter/filter.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HostsComponent,
    BranchesComponent,
    FilterComponent,
  ],
  exports: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class MainModule { }
