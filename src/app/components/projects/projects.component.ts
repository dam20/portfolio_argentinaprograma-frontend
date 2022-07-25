import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  modalData: any = {};

  @Input()
  person!: {
    id: number;
    projects: any;
  };
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  addNewProjectModal(id: number) {
    this.portfolioService.addProject(id, this.modalData).subscribe(() => {
      window.location.reload();
    });
  }
  deleteProjectModal(id: number, proyecto: any) {
    this.portfolioService.deleteProject(id, proyecto).subscribe(() => {
      window.location.reload();
    });
  }
}
