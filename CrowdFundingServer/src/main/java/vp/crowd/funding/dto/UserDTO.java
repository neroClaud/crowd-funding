package vp.crowd.funding.dto;

import vp.crowd.funding.model.SecurityUser;

public class UserDTO {
	
	
	private String username;
	private String password;
	private String firstname;
	private String lastname;
	
	
	
	public UserDTO() {
		super();
	}
	public UserDTO(String username, String password, String firstName, String lastName) {
		super();
		this.username = username;
		this.password = password;
		this.firstname = firstName;
		this.lastname = lastName;
		
	}
	public UserDTO(SecurityUser secUser) {
		this.username = secUser.getUsername();
		this.password = secUser.getPassword();
		this.firstname = secUser.getFirstName();
		this.lastname = secUser.getLastName();
		
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	@Override
	public String toString() {
		return "UserDTO [username=" + username + ", password=" + password + ", firstname=" + firstname + ", lastname="
				+ lastname + "]";
	}
	

	
	
	

}
