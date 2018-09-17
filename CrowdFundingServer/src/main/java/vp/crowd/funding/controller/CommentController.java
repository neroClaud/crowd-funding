package vp.crowd.funding.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.crowd.funding.model.Comment;
import vp.crowd.funding.service.CommentService;

@RestController
public class CommentController {

	@Autowired
	CommentService commentService;

	@GetMapping(value = "api/projects/{id}/comments")
	public ResponseEntity<List<Comment>> findCOmmentsByProjectId(@PathVariable Long id) {

		List<Comment> retVal = commentService.findByProjectId(id);
		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

	@PostMapping(value = "api/comments")
	public ResponseEntity<Comment> postComment(@RequestBody Comment comment) {
		Comment newComment = commentService.saveComment(comment);
		return new ResponseEntity<>(newComment, HttpStatus.CREATED);
	}
	
	
}
