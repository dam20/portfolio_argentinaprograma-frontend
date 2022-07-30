import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()
  person!: {
    id: number;
    name: String;
    surname: String;
    birthDate: String;
    nacionalidad: String;
    aboutMe: String;
    location: String;
    profile: {
      background: String;
      profilePicture: String;
    };
    educations: [];
    experiences: [];
    skills: [];
    projects: [];
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goLogin(): void {
    this.router.navigateByUrl('/login');
  }
  logOut(): void {
    sessionStorage.removeItem('currentUser');
    window.location.reload();
    }
  isLogged(): boolean {
    return sessionStorage.getItem('currentUser') != null;
  }
}
