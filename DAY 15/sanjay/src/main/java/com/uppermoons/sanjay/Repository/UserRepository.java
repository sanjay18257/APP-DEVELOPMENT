package com.uppermoons.sanjay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uppermoons.sanjay.Model.User;

public interface UserRepository extends JpaRepository<User,String>{
    
}
