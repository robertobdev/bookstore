import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatOptionModule, MatMenuModule, MatDialogModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule,
  ],
  exports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule,
  ],
})
export class CustomMaterialModule { }
