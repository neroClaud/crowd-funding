import { Router } from '@angular/router';
import { CityService } from './../services/city.service';
import { City } from './../model/city';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectServiceService } from '../services/project-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddProjectComponent implements OnInit {
  title: string = "";
  id: number = 0;
  description: string = "";
  goal: number = 0;

  cities: City[];
  selectedFiles: FileList
  currentFileUpload: File
  imageUrl: string = "/assets/default.png"

  constructor(private cityService: CityService,
    private projectService: ProjectServiceService,
    private router: Router) { }

  ngOnInit() {
    this.loadCities();
  }

  selectFile(event) {
    const file = event.target.files.item(0)
    var reader = new FileReader();

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(file);
    } else {
      alert('invalid format!');
    }
  }
  loadCities() {
    this.cityService.getCities().subscribe(
      (res) => {
        this.cities = res;
      });
  }

  postProject() {
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log(this.title, this.id, this.description, this.goal);
    this.projectService.postProject(this.currentFileUpload, this.title, this.description, this.id, this.goal).subscribe(event => {
      this.router.navigate(['main']);
    })

    this.selectedFiles = undefined
  }

}
