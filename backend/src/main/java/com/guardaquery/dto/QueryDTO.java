package com.guardaquery.dto;

import com.guardaquery.domain.Query;

public class QueryDTO {

	private Integer id;

	private Long idQuery;

	private String nome;
	
	private String descricao;

	private String sqgb;
	
	private String tipoQuery;
	
	private String urlQuery;
	
	private Integer idCliente;
	

	public QueryDTO(Integer id, Long idQuery, String nome, String descricao, String sqgb, String tipoQuery,
			String urlQuery) {
		this.id = id;
		this.idQuery = idQuery;
		this.nome = nome;
		this.descricao = descricao;
		this.sqgb = sqgb;
		this.tipoQuery = tipoQuery;
		this.urlQuery = urlQuery;
	}
	
	public QueryDTO(Query query) {
		this.id = query.getId();
		this.idQuery = query.getIdQuery();
		this.nome = query.getNome();
		this.descricao = query.getDescricao();
		this.sqgb = query.getSqgb();
		this.tipoQuery = query.getTipoQuery();
		this.urlQuery = query.getUrlQuery();
		this.idCliente = query.getCliente().getId();
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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
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

	public String getUrlQuery() {
		return urlQuery;
	}

	public void setUrlQuery(String urlQuery) {
		this.urlQuery = urlQuery;
	}
	
}
