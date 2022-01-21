package com.guardaquery.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.guardaquery.domain.Cliente;
import com.guardaquery.dto.ClienteDTO;
import com.guardaquery.services.ClienteService;

@RestController
@RequestMapping(value="/clientes")
public class ClienteResource {

	@Autowired
	private ClienteService service;
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Cliente> findById(@PathVariable Integer id){
		Cliente cli = service.findById(id);
		return ResponseEntity.ok().body(cli);
	}
	
	@GetMapping(value="/nome/{nome}")
	public ResponseEntity<ClienteDTO> findByNome(@PathVariable String nome){
		ClienteDTO dto = service.findClientesDTOByNome(nome);
		return ResponseEntity.ok().body(dto);
	}
	
	
	
	@GetMapping
	public ResponseEntity<Page<ClienteDTO>> findAll(Pageable pageable){
		Page<ClienteDTO>cli = service.findAllDTO(pageable);
		return ResponseEntity.ok().body(cli);
	}
	
	@PostMapping
	public ResponseEntity<Void> insert(@Validated @RequestBody Cliente obj){
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
}
