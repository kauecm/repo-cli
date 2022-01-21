package com.guardaquery.dto;

import java.util.ArrayList;
import java.util.List;

import com.guardaquery.domain.Cliente;
import com.guardaquery.domain.Query;

public class ClienteDTO {
	

	private Integer id;

	private String nome;

	private String tipoCliente;
	
	private List<QueryDTO> query = new ArrayList<QueryDTO>();
	
	public ClienteDTO() {
		
	}

	public ClienteDTO(Integer id, String nome, String tipoCliente, List<QueryDTO> query) {
		super();
		this.id = id;
		this.nome = nome;
		this.tipoCliente = tipoCliente;
		this.query = query;
	}
	
	
	public ClienteDTO(Cliente cli) {
		this.id = cli.getId();
		this.nome = cli.getNome();
		this.tipoCliente = cli.getTipoCliente();
		
		for(Query qr : cli.getQueries()) {
			QueryDTO dto = new QueryDTO(qr);
			this.query.add(dto);		
		}
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipoCliente() {
		return tipoCliente;
	}

	public void setTipoCliente(String tipoCliente) {
		this.tipoCliente = tipoCliente;
	}

	public List<QueryDTO> getQuery() {
		return query;
	}

	public void addQuery(Query quer) {
		QueryDTO dto = new QueryDTO(quer);
		this.query.add(dto);
	}
	
	public void setQuery(List<QueryDTO> query){
		this.query = query;
	}
	
	
	
	
	
}
