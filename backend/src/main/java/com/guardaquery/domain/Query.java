package com.guardaquery.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Query implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Long idQuery;

	private String nome;
	
	private String descricao;

	private String sqgb;
	
	private String tipoQuery;
	
	private String urlQuery;
	
	@ManyToOne
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;

	public Query() {

	}

	public Query(Integer id, Long idQuery, String nome, String sqgb, String tipoQuery, Cliente cliente) {
		super();
		this.id = id;
		this.idQuery = idQuery;
		this.nome = nome;
		this.sqgb = sqgb;
		this.tipoQuery = tipoQuery;
		this.cliente = cliente;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Long getIdQuery() {
		return idQuery;
	}

	public void setIdQuery(Long idQuery) {
		this.idQuery = idQuery;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSqgb() {
		return sqgb;
	}

	public void setSqgb(String sqgb) {
		this.sqgb = sqgb;
	}

	public String getTipoQuery() {
		return tipoQuery;
	}

	public void setTipoQuery(String tipoQuery) {
		this.tipoQuery = tipoQuery;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	
	public String getUrlQuery() {
		return urlQuery;
	}

	public void setUrlQuery(String urlQuery) {
		this.urlQuery = urlQuery;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Query other = (Query) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	

}
