import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';
import { LastDeployComponent } from './last-deploy/last-deploy.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ModalComponent,
    LastDeployComponent,
  ],
  exports: [
    LayoutComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class MainModule { }
