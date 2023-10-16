package com.uppermoons.sanjay.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.uppermoons.sanjay.Model.User;
import com.uppermoons.sanjay.Model.enumerate.Role;
import com.uppermoons.sanjay.Repository.UserRepositorys;
import com.uppermoons.sanjay.dto.request.RegisterRequest;
import com.uppermoons.sanjay.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserInitialization implements CommandLineRunner{
	private final UserRepositorys userRepository;
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public void run(String... args) throws Exception{
	try {
		
	if(userRepository.count()==0)
	{
		User user = createUser();
		userRepository.save(user);
	}
	}catch(Exception e) {
		System.out.printf("Error during user initialization",e);
	}
	}
	public User createUser() {
		// TODO Auto-generated method stub
	
			
	    var user = User.builder()
	    			.username("Admin123")
	    			.email("Admin123@gmail.com")
	    			.password(passwordEncoder.encode("Admin123"))
	    			.role(Role.ADMIN)
	    			.build();
	           
	            
	      return user;

}
}