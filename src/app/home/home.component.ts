import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from './../shared/components/dialog/dialog.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public username: string;

  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    /** Checks if user is logged by consulting the behaviour */
    if (!this.auth.isConnected()) {
      this.router.navigate(['login']);
      /** Gives time to the component to render the data. */
      setTimeout(() => {
        this.openDialog();
      }, 200);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      height: '300px',
      panelClass: 'dialog'
    });
  }
}
