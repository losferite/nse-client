import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './main/branches/branches.component';
import { HostsComponent } from './main/hosts/hosts.component';

const routes: Routes = [
  { path: '', redirectTo: 'hosts', pathMatch: 'full' },
  { path: 'hosts', component: HostsComponent },
  { path: 'branches', component: BranchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
