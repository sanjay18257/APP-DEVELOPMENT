package com.uppermoons.sanjay.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uppermoons.sanjay.Model.Campaign;
import com.uppermoons.sanjay.Service.CampaignService;
import com.uppermoons.sanjay.dto.request.CampaignRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/Campaign")	
@RequiredArgsConstructor
public class CampaignController {
	
	private final CampaignService templateService;
	
	@PostMapping("/create")
	  public ResponseEntity<String> register(
	      @RequestBody CampaignRequest request
	  ) {
	      boolean isSaved = templateService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Campaign created successfully!")
	                : ResponseEntity.badRequest().build();
	  }
	@GetMapping("/get")
	 public ResponseEntity<List<Campaign>> getAllProducts() {
        List<Campaign> productList = templateService.getAllProducts();
        return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
                : ResponseEntity.noContent().build();
    }
	@PutMapping("/edit/{pid}")
	public ResponseEntity<String> updateCampaign(@RequestBody CampaignRequest request, @PathVariable("pid") Long pid) {
	    boolean isUpdate = templateService.updateCampaign(request, pid);
	    return isUpdate
	            ? ResponseEntity.status(201).body("Campaign updated successfully!")
	            : ResponseEntity.notFound().build();
	}
	  
	  @DeleteMapping("/delete/{pid}")
	  public ResponseEntity<String> delete(@PathVariable("pid") Long pid)
		{
		  boolean isDelete = templateService.delete(pid);
		  return isDelete ? ResponseEntity.status(201).body("Deleted Successfull!") 
	        		: ResponseEntity.notFound().build();
		}
	
//	  @PutMapping("/edit/{pid}")
//	    public ResponseEntity<TemplateResponse> updateProduct(@RequestBody TemplateRequest request, @PathVariable Long pid) {
//	        TemplateResponse productResponse = templateService.updateProduct(request, pid);
//	        return productResponse != null ? ResponseEntity.ok().body(productResponse) : ResponseEntity.notFound().build();
//	    }
	

}