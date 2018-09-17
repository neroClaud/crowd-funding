import { SlideInOutAnimation } from './../shared/animations';
import { CommentService } from './../services/comment.service';
import { Comment } from './../model/comment';
import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [SlideInOutAnimation]
})
export class CommentComponent implements OnInit {

  @Input() project: Project;
  animationState = 'out';
  comments: Comment[];
  filteredComs: Comment[] = [];
  toCom2: string[];

  toggleShowDiv(i?: number) {
    if (i || i === 0) {
      this.toCom2[i] = this.toCom2[i] === 'out' ? 'in' : 'out';
    } else {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }

  }


  comment: Comment = {
    nick: '',
    text: '',
    project: this.project,
    reference_comment: null
  }


  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.loadComments();
  }
  newCom = {
    nick: '',
    text: '',
    project: this.project,
    reference_comment: null
  }

  replyComment(l: any) {
    this.newCom.project = l.project;
    this.newCom.reference_comment = l;

    this.commentService.postComment(this.newCom).subscribe(
      (res) => {
        this.loadComments();
      });

    this.newCom = {
      nick: '',
      text: '',
      project: null,
      reference_comment: null
    }
  }

  leaveComment() {
    this.comment.project = this.project;

    this.commentService.postComment(this.comment).subscribe(
      (res) => {
        this.loadComments();
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
        this.reset();
      });
  }
  loadComments() {
    this.commentService.getCommentsByProjectId(this.project.id).subscribe(
      (res: Comment[]) => {
        this.comments = res;
        this.filterComs();
        this.toCom2 = this.comments.map(x => 'out');

      });

  }
  reset() {
    this.comment = {
      nick: '',
      text: '',
      project: null,
      reference_comment: null
    }
  }
  filterComs() {
    this.filteredComs = [];
    this.comments.forEach((x) => {
      if (x.reference_comment) {
        this.comments.forEach((y) => {
          if (x.reference_comment.id === y.id) {
            this.filteredComs.push(x);
          }
        });
      }
    });
  }
}
