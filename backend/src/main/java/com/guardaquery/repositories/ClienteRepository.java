package com.guardaquery.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.guardaquery.domain.Cliente;
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

	@Transactional(readOnly = true)
	public Cliente findByNome(String nome);
	
	@Transactional(readOnly = true)
	public Page<Cliente> findAll(Pageable pageable);
	
}
