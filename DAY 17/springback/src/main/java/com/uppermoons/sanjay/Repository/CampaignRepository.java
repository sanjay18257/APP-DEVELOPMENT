package com.uppermoons.sanjay.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uppermoons.sanjay.Model.Campaign;



public interface CampaignRepository extends JpaRepository<Campaign,Long> {
	  Campaign findBypid(Long id);

}