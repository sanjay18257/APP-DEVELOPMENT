package com.uppermoons.sanjay.Model;


import com.uppermoons.sanjay.Model.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Campaigns")
public class Campaign {
	
//	@GeneratedValue(strategy = GenerationType.UUID)
@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	private Long pid;
	private String businessName;
	private String campaignName;
	private String description;
	private String email;
	private String phno;
	  @Enumerated(EnumType.STRING)
	private Role role;



}
