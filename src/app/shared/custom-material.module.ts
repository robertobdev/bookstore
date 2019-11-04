import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatOptionModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatBadgeModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule, MatBadgeModule,
  ],
  exports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatMenuModule,
    MatIconModule, MatOptionModule, MatDialogModule, MatSnackBarModule, MatBadgeModule,
  ],
})
export class CustomMaterialModule { }
