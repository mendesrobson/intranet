import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value); 
    console.log(f.valid);  
    this.router.navigate(["/user-profile"]);
  }
}
