import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  defaultImage: String ='https://scientia1.files.wordpress.com/2014/02/universidad1.png';
  @Input()
  person!: {
    id: number;
    educations: any;
  };

  modalData: any = {};

  constructor(private portfolioService: PortfolioService) { }


  ngOnInit(): void {
  }


  addNewEducationModal(id: number) {
    const body = this.modalData;
    this.portfolioService.addEducation(id, body).subscribe((data) => {
      console.log(JSON.stringify('data' + data));
      window.location.reload();
    });
  }

  deleteEducation(id: number, education: any) {
    this.portfolioService.deleteEducation(id, education).subscribe(() => {
      window.location.reload();
    });
  }
}
