import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private matSnackBar: MatSnackBar) { }


  openSnackBar(content: string) {
    this.matSnackBar.open(content, 'Aceptar', {
      duration: 2000,
      horizontalPosition: 'start',
    });
  }
}
