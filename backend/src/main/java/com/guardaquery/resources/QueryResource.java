package com.guardaquery.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.guardaquery.domain.Cliente;
import com.guardaquery.domain.Query;
import com.guardaquery.services.QueryService;

@RestController
@RequestMapping(value="/queries")
public class QueryResource {

	@Autowired
	private QueryService service;
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Query> findById(@PathVariable Integer id){
		Query query = service.findById(id);
		return ResponseEntity.ok().body(query);
	}
	@GetMapping
	public ResponseEntity<List<Query>> findAll(){
		List<Query>query= service.findAll();
		return ResponseEntity.ok().body(query);
	}
	
	@GetMapping(value = "/cliente/{id}")
	public ResponseEntity<List<Query>>findAllByCliente(@PathVariable Integer id){
			List<Query> query = service.findAllByCliente(id);
			return ResponseEntity.ok().body(query);
	}
	
	@PostMapping
	public ResponseEntity<Query> insert(@Validated @RequestBody Query obj){
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}
	
	@PutMapping(value = "/files")
	public ResponseEntity<Void> insertFile(@RequestParam(name="file") MultipartFile file, @RequestParam(name = "id") Long id){
		URI uri = service.uploadFile(file,id);
		return ResponseEntity.created(uri).build();
	}
	
}
