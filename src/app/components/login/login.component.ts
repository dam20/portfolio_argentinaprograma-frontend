import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = '';
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private route: Router) {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      }
    );
  }

  ngOnInit(): void {
  }
  get Username() {
    return this.form.get("username");
  }
  get Password() {
    return this.form.get("password");
  }

  onSend(event: Event) {
    event.preventDefault();
    this.authenticationService.login(this.form.value).subscribe(data => {
      console.log("Data: " + JSON.stringify(data));
      this.route.navigate(["/profile"]);
    },
    (err) => {
      console.log(err);
      this.error = err;
    });
  }
}
