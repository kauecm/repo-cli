package com.guardaquery.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.guardaquery.domain.Cliente;
import com.guardaquery.dto.ClienteDTO;
import com.guardaquery.repositories.ClienteRepository;
import com.guardaquery.repositories.QueryRepository;

@Service
public class ClienteService {
	
	@Autowired 
	private ClienteRepository repo;
	
	@Autowired
	private QueryRepository queryRepo;
	
	public Cliente findById(Integer id) {
		Optional<Cliente>cli = repo.findById(id);
		return cli.get();
	}
	
	public ClienteDTO findClientesDTOByNome(String nome){
		Cliente cli = repo.findByNome(nome);
		ClienteDTO cliDTO = new ClienteDTO(cli);
		return cliDTO;
	}
	
	public ClienteDTO findClientesDTOById(Integer id) {
		Cliente cli = repo.findById(id).get();
		ClienteDTO cliDTO = new ClienteDTO(cli);
		return cliDTO;
	}
	
	@Transactional(readOnly = true)
	public Page<ClienteDTO> findAllDTO(Pageable pageable){
		Page<Cliente> cli = repo.findAll(pageable);
		Page<ClienteDTO> cliDTO = cli.map(x -> new ClienteDTO(x));
		return cliDTO;
	}
	
	public Cliente findByNome(String nome) {
		Cliente cli = repo.findByNome(nome);
		return cli;
	}
	
	public Cliente insert(Cliente cli) {
		return repo.save(cli);
	}
	
}
