package vp.crowd.funding.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.City;
import vp.crowd.funding.repository.CityRepository;

@Component
public class CityService {
	

	@Autowired
	CityRepository cityRepository;
	
	public List<City> findAll() {
		return cityRepository.findAll();
	}
	
	public Page<City> findAll(Pageable page) {
		return cityRepository.findAll(page);
	}

	public City findOne(Long id) {
		return cityRepository.findOne(id);
	}

	public City save(City city) {
		return cityRepository.save(city);
	}

	public void remove(Long id) {
		cityRepository.delete(id);
	}


}
