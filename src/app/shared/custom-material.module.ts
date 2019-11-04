import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatOptionModule, MatMenuModule, MatDialogModule, MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule,
  ],
  exports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule,
  ],
})
export class CustomMaterialModule { }
