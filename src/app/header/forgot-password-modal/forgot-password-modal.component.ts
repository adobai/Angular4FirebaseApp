import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.css']
})
export class ForgotPasswordModalComponent implements OnInit {

    @ViewChild('forgotPasswordModal') public forgotPasswordModal: ModalDirective;
    isShowModal: boolean = false;


    constructor(private authService: AuthService){

    }

    ngOnInit() {
    }

    show(){ this.isShowModal = true; }
    hide(){ this.forgotPasswordModal.hide(); }
    onHidden(){ this.isShowModal = false; }

    onForgotPassword(form: NgForm){
      const value = form.value;
      this.authService.forgotPassword(value.email);
      if (this.authService.getAuthStatus) {this.forgotPasswordModal.hide()};
    }
}
