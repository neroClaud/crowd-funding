package vp.crowd.funding.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.crowd.funding.model.SecurityUser;

@Component
public interface UserRepository extends JpaRepository<SecurityUser, Long> {
    public SecurityUser findByUsername(String username);
}