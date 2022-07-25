import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  porcent: String = 'width: 0%';
  modalData: any = {};
  myItemModal: any;

  @Input()
  person!: {
    id: number;
    skills: any;
  };
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    
  }

  selectItem(item: any) {
    this.myItemModal = item;
  }

  addNewSkillModal(id: number) {
    this.modalData.knowledgeLevel = 'width:' + this.modalData.knowledgeLevel.toString();
    const body = this.modalData;
    this.portfolioService.addSkill(id, body).subscribe(() => {
      window.location.reload();
    });
  }

  deleteSkillModal(id: number, skill: any) {
    this.portfolioService.deleteSkill(id, skill).subscribe(() => {
      window.location.reload();
    });
  }

}
