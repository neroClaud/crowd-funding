import { Project } from './../model/project';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../model/page';

@Injectable()
export class ProjectServiceService {

  constructor(private http: HttpClient) { }


  getProjects(page: number): Observable<Page<Project>> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', '3');

    return this.http.get<Page<Project>>('api/projects', { params });
  }
  getProjectsList(first?: number, second?: number, cityId?: number): Observable<Project[]> {
    let params = new HttpParams();
    if (+first) {
      params = params.append('first', first.toString());
    }
    if (+second) {
      params = params.append('second', second.toString());
    }
    if (+cityId) {
      params = params.append('cityId', cityId.toString());
    }
    return this.http.get<Project[]>('projects', { params });
  }

  postProject(file: File, title: string, description: string, id: number, goal: number): Observable<Project> {
    let formdata: FormData = new FormData();

    formdata.append('title', title);
    formdata.append('file', file);
    formdata.append('description', description);
    formdata.append('id', id.toString());
    formdata.append('goal', goal.toString());

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<Project>("api/projects", formdata, { headers });
  }

  getSingleProject(id: number): Observable<Project> {

    return this.http.get<Project>(`api/projects/${id}`);
  }

  updateProject(project: Project): Observable<Project> {
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put<Project>(`api/projects/${project.id}`, JSON.stringify(project), { headers });
  }
}
