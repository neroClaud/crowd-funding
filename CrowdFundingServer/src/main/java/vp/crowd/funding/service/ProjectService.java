package vp.crowd.funding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.Project;
import vp.crowd.funding.repository.ProjectRepository;

@Component
public class ProjectService {
	
	
	@Autowired
	ProjectRepository projectRepository;
	
	public List<Project> findAll() {
		return projectRepository.findAll();
	}
	
	public Page<Project> findAll(Pageable page) {
		return projectRepository.findAll(page);
	}

	public Project findOne(Long id) {
		return projectRepository.findOne(id);
	}

	public Project save(Project project) {
		return projectRepository.save(project);
	}

	public void remove(Long id) {
		projectRepository.delete(id);
	}
	public List<Project> findByGoalBetween(double first,double second){
		return projectRepository.findByGoalBetween(first, second);
	}
	public List<Project> findByCityId(Long id){
		return projectRepository.findByCityId(id);
	}
	public List<Project> findByGoalBetweenAndCityId(double first,double second,Long id){
		return projectRepository.findByGoalBetweenAndCityId(first, second, id);
	}


}
