package vp.crowd.funding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.crowd.funding.dto.LoginDTO;
import vp.crowd.funding.dto.TokenDTO;
import vp.crowd.funding.dto.UserDTO;
import vp.crowd.funding.model.Role;
import vp.crowd.funding.model.SecurityUser;
import vp.crowd.funding.security.TokenUtils;
import vp.crowd.funding.service.UserDetailsServiceImpl;

@RestController
public class UserController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	TokenUtils tokenUtils;

	@PostMapping(value = "/api/login")
	public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) {
		try {
			final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					loginDTO.getUsername(), loginDTO.getPassword());
			final Authentication authentication = authenticationManager.authenticate(token);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			final UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
			final String genToken = tokenUtils.generateToken(details);

			return new ResponseEntity<>(new TokenDTO(genToken), HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/api/register", method = RequestMethod.POST)
	public ResponseEntity<TokenDTO> register(@RequestBody UserDTO userDTO) {
		
		SecurityUser m = new SecurityUser();
		m.setFirstName(userDTO.getFirstname());
		m.setLastName(userDTO.getLastname());
		m.setPassword(userDTO.getPassword());
		m.setRole(Role.USER);
		m.setUsername(userDTO.getUsername());
		SecurityUser user = userDetailsService.register(m);

		try {
			final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					userDTO.getUsername(), userDTO.getPassword());
			final Authentication authentication = authenticationManager.authenticate(token);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			final UserDetails details = userDetailsService.loadUserByUsername(userDTO.getUsername());
			final String genToken = tokenUtils.generateToken(details);
			
			return new ResponseEntity<>(new TokenDTO(genToken), HttpStatus.OK);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
		}
		
		

	}
	
	@GetMapping(value="api/users")
	public ResponseEntity<Boolean> findByUsername(@RequestParam String username){
		
		SecurityUser user = userDetailsService.findByUserName(username);
		if(user != null) {
			return new ResponseEntity<>(true,HttpStatus.OK);
		}else {
			return new ResponseEntity<>(false,HttpStatus.OK);
		}
		
		
	}
}
