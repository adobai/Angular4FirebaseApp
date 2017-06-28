import { Component, OnInit, OnDestroy } from '@angular/core';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-message',
  templateUrl: './auth-message.component.html',
  styleUrls: ['./auth-message.component.css']
})
export class AuthMessageComponent implements OnInit {

  msgtitle: string = 'Loading...';
  message: string = '';
  errMsg: boolean;


  constructor(private authService: AuthService) {

   }
  
  ngOnInit(){
    this.msgtitle = this.authService.getAuthTitle();
    this.message = this.authService.getAuthMessage();
    this.errMsg = this.authService.getErrMsg();
  }

  ngOnDestroy(){

  }

}
