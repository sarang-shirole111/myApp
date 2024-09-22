import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  showContactflag = false;
  showContact(){
    this.showContactflag = !this.showContactflag;
  }
}
