import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ModalComponent,
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
