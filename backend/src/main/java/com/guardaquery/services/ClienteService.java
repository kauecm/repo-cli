package com.guardaquery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guardaquery.domain.Cliente;
import com.guardaquery.domain.Query;
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
	
	public List<Cliente> findAll(){
		return repo.findAll();
	}
	
	public Cliente findByNome(String nome) {
		Cliente cli = repo.findByNome(nome);
		return cli;
	}
	
	public Cliente insert(Cliente cli) {
		return repo.save(cli);
	}
	
}
