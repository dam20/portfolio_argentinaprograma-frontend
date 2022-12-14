import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: String = 'http://backend.dmoyano.ml/';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getPersonData(id: number = 1): Observable<any> {
    return this.http.get<any>(this.url + 'person/' + id);
  }

  setPersonData(id: number, body: any): Observable<any> {
    //console.log(body);
    return this.http.post<any>(this.url + 'person/edit/' + id, body);
  }

  setAboutMeData(id: number, body: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/edit/aboutme/' + id, body);
  }

  addExperience(id: number, body: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/new/xp/' + id, body);
  }

  deleteExperience(id: number, experience: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/delete/xp/' + id, experience);
  }

  addEducation(id: number, body: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/new/education/' + id, body);
  }

  deleteEducation(id: number, education: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/delete/education/' + id, education);
  }

  addSkill(id: number, body: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/new/skill/' + id, body);
  }

  deleteSkill(id: number, body: any): Observable<any> {
    return this.http.post<any>(
      this.url + 'person/delete/skill/' + id,
      body
    );
  }

  addProject(id: number, body: any): Observable<any> {
    return this.http.post<any>(this.url + 'person/new/project/' + id, body);  }
  
    deleteProject(id: number, body: any): Observable<any> {
    return this.http.post<any>(
      this.url + 'person/delete/project/' + id,
      body
    );
  }

  isLogged(): boolean { 
    return sessionStorage.getItem('currentUser') != null;
  }
}
