import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent implements OnInit {

    @ViewChild('loginModal') public loginModal: ModalDirective;
    isShowModal: boolean = false;


    constructor(private authService: AuthService){

    }

    ngOnInit() {
    }

    show(){ this.isShowModal = true; }
    hide(){ this.loginModal.hide(); }
    onHidden(){ this.isShowModal = false; }

    onLogin(form: NgForm){
      const value = form.value;
      this.authService.login(value.email, value.password);
      this.loginModal.hide();
    }
}
