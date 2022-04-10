import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { PerfilDialogComponent } from '../modals/perfil-dialog/perfil-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private auth: AuthService, 
              private toast: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit(): void {}

  openPerfil(): void {
    const dialogRef = this.dialog.open(PerfilDialogComponent, {
      height: '350px',
      width: '600px',
    });

    dialogRef.afterClosed();
  }

  logout(){
    this.router.navigate(['login']);
    this.auth.logout();
    this.toast.info('Logout realizado com sucesso!', 'Logout')
  }

}
