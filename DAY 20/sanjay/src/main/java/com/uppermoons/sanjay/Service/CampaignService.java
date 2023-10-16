package com.uppermoons.sanjay.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.uppermoons.sanjay.Model.Campaign;
import com.uppermoons.sanjay.Model.enumerate.Role;
import com.uppermoons.sanjay.Repository.CampaignRepository;
import com.uppermoons.sanjay.dto.request.CampaignRequest;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class CampaignService {
	
	private final CampaignRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	public boolean registertemp(CampaignRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = Campaign.builder()
	            .pid(request.getId())
	            .campaignName(request.getCampaignName())
	            .businessName(request.getBusinessName())
	            .email(request.getEmail())
	            .phno(request.getPhno())
	            .description(request.getDescription())
	            .role(Role.USER)
	            .build();
	    repository.save(user);
//	    var jwtToken = jwtservice.generateToken(user);
	    
		return true;
	}
	 public List<Campaign> getAllProducts() {
	        List<Campaign> productList = repository.findAll();

	        return productList;
	    }
	 
	 public boolean updateCampaign(CampaignRequest request, Long pid) {
	        Optional<Campaign> optionalCampaign = repository.findById(pid);

	        if (optionalCampaign.isPresent()) {
	            Campaign campaign = optionalCampaign.get();
	            campaign.setCampaignName(request.getCampaignName());
	            campaign.setBusinessName(request.getBusinessName());
	            campaign.setEmail(request.getEmail());
	            campaign.setPhno(request.getPhno());
	            campaign.setDescription(request.getDescription());

	            // Save the updated campaign to the repository
	            repository.save(campaign);

	            return true;
	        } else {
	            throw new EntityNotFoundException("Campaign with id " + pid + " not found");
	        }
	    } 
		public boolean delete(Long pid) {
			repository.deleteById(pid);
			return true;
		}

}