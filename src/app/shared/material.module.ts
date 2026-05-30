import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';


const materialModules = [

  CommonModule,

  FormsModule,

  ReactiveFormsModule,

  MatButtonModule,

  MatInputModule,

  MatFormFieldModule,

  MatTableModule,

  MatDialogModule,

  MatSelectModule,

  MatDatepickerModule,

  MatNativeDateModule,

  MatPaginatorModule,

  MatSnackBarModule,

  MatIconModule,

  MatCardModule
];

@NgModule({

  imports: [
    ...materialModules
  ],

  exports: [
    ...materialModules
  ]
})

export class MaterialModule {}