import { Comment } from './../model/comment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }

  postComment(comment: Comment): Observable<Comment> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Comment>('api/comments', JSON.stringify(comment), { headers });
  }
  getCommentsByProjectId(id: number): Observable<Comment[]> {
    let params = new HttpParams();
    params = params.append('id', id.toString());

    return this.http.get<Comment[]>(`api/projects/${id}/comments`, { params });

  }
}
