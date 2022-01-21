package com.guardaquery.services;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.guardaquery.domain.Cliente;
import com.guardaquery.domain.Query;
import com.guardaquery.repositories.QueryRepository;
import com.guardaquery.services.exceptions.FileException;

@Service
public class QueryService {
	
	@Autowired
	private QueryRepository repo;
	
	@Autowired
	private ClienteService cliService;
	
	@Autowired 
	private S3Service s3;
	
	public Query findById(Integer id) {
		Query obj = repo.getById(id);
		return obj;
	}
	
	public List<Query> findAll(){
		return repo.findAll();
	}
	
	public List<Query> findAllByCliente(Integer id){
		Cliente cli = cliService.findById(id);
		List<Query> list = repo.findAllByCliente(cli);
		return list;
	}
	
	public List<Query> findAllByNomeCliente(String nome){
		Cliente cli = cliService.findByNome(nome);
		List<Query> list = repo.findAllByCliente(cli);
		return list;
	}
	
	
	public Query insert(Query obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public URI uploadFile(MultipartFile multipartFile, Long id, String nome) {
		
		Cliente cli = cliService.findByNome(nome);
		Query query = repo.findByIdQuery(id);
		if(cli != null && query != null) {
		URI uri = s3.uploadFile(multipartFile);
		query.setUrlQuery(uri.toString());
		repo.save(query);
		return uri;
		}else {
			throw new FileException("DEU RUIM GURIZADA Metodo uploadFile QueryService" +cli.getNome()+" "+query.getId());
		}
	}
	
	
	
	
	
	
}
