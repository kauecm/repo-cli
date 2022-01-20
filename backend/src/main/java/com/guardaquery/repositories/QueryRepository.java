package com.guardaquery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.guardaquery.domain.Cliente;
import com.guardaquery.domain.Query;


@Repository
public interface QueryRepository extends JpaRepository<Query, Integer>{

	@Transactional(readOnly = true)
	List<Query> findAllByCliente(Cliente cliente);
	
	@Transactional(readOnly = true)
	Query findByIdQuery(Long id);
	
}
