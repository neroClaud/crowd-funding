package vp.crowd.funding.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import vp.crowd.funding.model.City;
import vp.crowd.funding.model.Project;
import vp.crowd.funding.service.CityService;
import vp.crowd.funding.service.ProjectService;
import vp.crowd.funding.service.StorageService;

@RestController
public class ProjectController {

	@Autowired
	StorageService storageService;

	@Autowired
	ProjectService projectService;

	@Autowired
	CityService cityService;

	@GetMapping(value = "api/projects")
	public ResponseEntity<Page<Project>> findAll(Pageable page) {

		Page<Project> projects = projectService.findAll(page);
		return new ResponseEntity<>(projects, HttpStatus.OK);

	}

	@GetMapping(value = "/projects")
	public ResponseEntity<List<Project>> findAll(@RequestParam(required = false, defaultValue = "0") double first,
			@RequestParam(required = false, defaultValue = "5000") double second,
			@RequestParam(required = false, defaultValue = "0") Long cityId) {

		List<Project> retVal = null;

		if (cityId == 0) {
			if (first != 0 || second != 5000) {
				retVal = projectService.findByGoalBetween(first, second);
			} else {
				retVal = projectService.findAll();
			}
		} else {
			if (first == 0 && second == 5000) {
				retVal = projectService.findByCityId(cityId);
			} else {
				retVal = projectService.findByGoalBetweenAndCityId(first, second, cityId);
			}
		}

		return new ResponseEntity<>(retVal, HttpStatus.OK);

	}

	@PostMapping(value = "api/projects")
	public ResponseEntity<Project> realUploadProject(@RequestParam("file") MultipartFile file,
			@RequestParam("title") String title, @RequestParam("description") String description,
			@RequestParam("goal") double goal, @RequestParam("id") Long id) {

		System.out.println(title + " " + description + " " + goal + " " + id);
		String imagePath = null;

		try {
			imagePath = storageService.store(file);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}

		City city = cityService.findOne(id);
		if (city == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		Project saved = projectService
				.save(new Project(title, description, goal, 0, "files/" + imagePath, new Date(), city));

		return new ResponseEntity<>(saved, HttpStatus.CREATED);

	}

	@GetMapping("/files/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> getFile(@PathVariable String filename) {
		Resource file = storageService.loadFile(filename);
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
				.body(file);
	}

	@GetMapping(value = "api/projects/{id}")
	public ResponseEntity<Project> getSingleProject(@PathVariable Long id) {
		Project project = projectService.findOne(id);

		if (project == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(project, HttpStatus.OK);
	}

	@PutMapping(value = "api/projects/{id}")
	public ResponseEntity<Project> updateProject(@RequestBody Project project, @PathVariable Long id) {

		Project foundPro = projectService.findOne(id);
		if (foundPro == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		foundPro.setCurrentAmount(project.getCurrentAmount());
		foundPro.setCity(project.getCity());
		foundPro.setDateOfPublication(project.getDateOfPublication());
		foundPro.setDescription(project.getDescription());
		foundPro.setGoal(project.getGoal());
		foundPro.setImagePath(project.getImagePath());
		foundPro.setTitle(project.getTitle());

		final Project saved = projectService.save(foundPro);
		return new ResponseEntity<>(saved, HttpStatus.OK);

	}

	@DeleteMapping(value = "api/projects/{id}")
	public ResponseEntity<String> deleteProject(@PathVariable Long id) {

		Project forDelete = projectService.findOne(id);
		if (forDelete == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		try {
			storageService.deleteFile(forDelete);
		} catch (Exception e) {
			e.printStackTrace();
		}
		projectService.delete(id);
		return new ResponseEntity<>("Uspesno obrisan", HttpStatus.OK);
	}

}
