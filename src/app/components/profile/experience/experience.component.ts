import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isLogged: boolean = false;
  defaultImage: String ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZxoun46uYwuj0W-JEfrEZ7aRawn4KPup_CFqzqj3LozS71yjaGWL08nN1KAYUv4TNg&usqp=CAU';
  @Input()
  person!: {
    id: number;
    experiences: [{
        position: String,
        company: String,
        image: String,
        startDate: String,
        endDate: String,
    }];
  };

  experience = {
    position: '',
    company: '',
    image: '',
    startDate: '',
    endDate: '',
  };

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.isLogged = this.portfolioService.isLogged();
  }

  addNewXpModal(id: number) {
    const body = this.experience;
    this.portfolioService.addExperience(id, body).subscribe((data) => {
      console.log(JSON.stringify('data' + data));
      console.log('saliod');
      window.location.reload();
    });
  }

  deleteXp(id: number, experience: any) {
    this.portfolioService.deleteExperience(id, experience).subscribe(() => {
      window.location.reload();
    });
  }
}
