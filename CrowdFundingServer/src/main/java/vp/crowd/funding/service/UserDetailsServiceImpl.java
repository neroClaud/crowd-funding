package vp.crowd.funding.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import vp.crowd.funding.model.SecurityUser;
import vp.crowd.funding.repository.UserRepository;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
	PasswordEncoder passwordEncoder;

    @Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		SecurityUser user = userRepository.findByUsername(username);
		
		if (user == null) {
		  throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
		} else {
			
			List<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
				
			grantedAuthorities.add(new SimpleGrantedAuthority(user.getRole().toString()));
			
			return new org.springframework.security.core.userdetails.User(
				  user.getUsername(),
				  user.getPassword(),
				  grantedAuthorities);
		}
	  }
	  

	public SecurityUser register(SecurityUser securityUser) {

		if (userRepository.findByUsername(securityUser.getUsername()) != null) {
			return null; // ako vec postoji korisnik sa tim korisnickim imenom
		} else {
			securityUser.setPassword(passwordEncoder.encode(securityUser.getPassword()));
			return userRepository.save(securityUser);
		}
	}
	
	public SecurityUser findByUserName(String username) {
		return userRepository.findByUsername(username);
	}
}
