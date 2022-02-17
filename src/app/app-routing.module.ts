import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hosts', pathMatch: 'full' },
  { path: 'hosts', loadChildren: () => import('./hosts/hosts.module').then(m => m.HostsModule) },
  { path: 'branches', loadChildren: () => import('./branches/branches.module').then(m => m.BranchesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
