import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Input()
  person!: {
    id: number;
    aboutMe: String;
  };

  modalData = {
    message: '',
  };
  
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
  }

  editAboutMeModal(id: number) {
    const body = this.modalData.message;
    this.portfolioService
      .setAboutMeData(id, body)
      .subscribe((data) => {
        console.log(JSON.stringify('data' + data));
        window.location.reload();
      });
  }
}
