import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HostsRoutingModule } from './hosts-routing.module';
import { HostsComponent } from './pages/hosts/hosts.component';


@NgModule({
  declarations: [
    HostsComponent,
  ],
  imports: [
    CommonModule,
    HostsRoutingModule
  ]
})
export class HostsModule { }
