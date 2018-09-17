import { SlideInOutAnimation } from './../shared/animations';
import { ProjectServiceService } from './../services/project-service.service';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../model/project';



@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  project: Project;
  hide: boolean;
  progressAmount: number = 0;
  constructor(private projectService: ProjectServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.projectService.getSingleProject(this.id).subscribe(
        (res) => {
          this.project = res;

        });
    });


  }
  donate(input: HTMLInputElement) {
    this.project.currentAmount += +input.value;
    this.put();
    input.value = '';
  }
  put() {
    this.projectService.updateProject(this.project).subscribe(
      (res) => {
        this.project = res;
        this.hide = this.getProgressData() > 100 ? true : false;
      })
  }
  getProgressData() {
    var s = ((this.project.goal - this.project.currentAmount) * 100) / this.project.goal;
    var m = 100 - s;
    this.progressAmount = Math.round(m);
    return this.progressAmount;
  }




}
