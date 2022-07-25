import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
