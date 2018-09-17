package vp.crowd.funding.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.City;
@Component
public interface CityRepository extends JpaRepository<City, Long>{

}
