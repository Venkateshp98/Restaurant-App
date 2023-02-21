import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  a = 10;
  b = "10";

  ngOnInit(){

  }

  valueCheck(){
     return this.a;
  }


}
