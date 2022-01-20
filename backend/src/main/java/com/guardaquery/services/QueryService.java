package com.guardaquery.services;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.guardaquery.domain.Cliente;
import com.guardaquery.domain.Query;
import com.guardaquery.repositories.QueryRepository;

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
	public Query insert(Query obj) {
		obj.setId(null);
		obj = repo.save(obj);
		return obj;
	}
	
	public URI uploadFile(MultipartFile multipartFile, Long id) {
		Query query = repo.findByIdQuery(id);
		URI uri = s3.uploadFile(multipartFile);
		query.setUrlQuery(uri.toString());
		repo.save(query);
		return uri;
	}
	
	
	
	
	
	
}
