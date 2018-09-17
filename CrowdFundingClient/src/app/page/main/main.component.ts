import { FilterData } from './../../filter/filter.component';
import { AuthenticationService } from './../../service/authentication-service.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectServiceService } from '../../services/project-service.service';
import { Page } from '../../model/page';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  projects: Project[];
  constructor(private projectService: ProjectServiceService, private auth: AuthenticationService) { }
  filterObject: FilterData = {
    cityId: 0,
    range: [0, 5000]
  }
  ngOnInit() {
    this.loadProjects();

  }

  loadProjects() {
      this.projectService.getProjectsList(this.filterObject.range[0], 
      this.filterObject.range[1], 
      this.filterObject.cityId).subscribe(
      (res) => {
        this.projects = res;
      });
  }

  try() {
    console.log(this.auth.getCurrentUser());
  }

  filter(filter : FilterData){
    this.filterObject = filter;
    this.loadProjects();
  }

}
