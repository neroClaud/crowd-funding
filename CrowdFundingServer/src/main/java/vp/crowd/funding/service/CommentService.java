package vp.crowd.funding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.Comment;
import vp.crowd.funding.repository.CommentRepository;

@Component
public class CommentService {	
	
	@Autowired
	CommentRepository commentRepository;
		
	public List<Comment> findByProjectId(Long id){
		return commentRepository.findByProjectId(id);
	}

	public Comment saveComment(Comment comment) {
		return commentRepository.save(comment);
	}
	
	
}
