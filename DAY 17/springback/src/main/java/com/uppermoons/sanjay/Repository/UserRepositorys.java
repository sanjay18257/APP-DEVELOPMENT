package com.uppermoons.sanjay.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uppermoons.sanjay.Model.User;

public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
