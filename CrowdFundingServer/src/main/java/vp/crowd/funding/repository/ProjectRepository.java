package vp.crowd.funding.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.Project;
@Component
public interface ProjectRepository extends JpaRepository<Project, Long> {
		
	public List<Project> findByGoalBetween(double first,double second);
	public List<Project> findByCityId(Long id);
	public List<Project> findByGoalBetweenAndCityId(double first,double second,Long id);
	

}
