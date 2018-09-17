package vp.crowd.funding.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import vp.crowd.funding.model.City;
import vp.crowd.funding.service.CityService;

@RestController
public class CityController {

	@Autowired
	CityService cityService;

	
	@GetMapping(value = "api/cities")
	public ResponseEntity<List<City>> getAllCities() {
		List<City> retVal = cityService.findAll();
		return new ResponseEntity<>(retVal,HttpStatus.OK);
	}

	
	@GetMapping(value = "api/cities/{id}")
	public ResponseEntity<City> getProject(@PathVariable Long id) {
		City city = cityService.findOne(id);
		if (city == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(city, HttpStatus.OK);
	}

}
