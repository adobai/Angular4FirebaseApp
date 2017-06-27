import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
