package vp.crowd.funding.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.Comment;
@Component
public interface CommentRepository extends JpaRepository<Comment, Long>{
	
	
	public List<Comment> findByProjectId(Long id);
	
	
	
	
	
}
