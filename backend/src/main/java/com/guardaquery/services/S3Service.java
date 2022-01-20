package com.guardaquery.services;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.guardaquery.services.exceptions.FileException;

@Service
public class S3Service {

	@Autowired
	private AmazonS3 s3Client;

	@Value("${s3.bucket}")
	private String bucketName;

	private Logger LOG = LoggerFactory.getLogger(S3Service.class);

	public URI uploadFileTxt(MultipartFile multipartFile) {
		try {
			String fileName = multipartFile.getOriginalFilename();
			InputStream is;
			is = multipartFile.getInputStream();
			String contentType = multipartFile.getContentType();
			return uploadFile(is, fileName, contentType);
		} catch (IOException e) {
			throw new RuntimeException("Erro de IO" + e.getMessage());
		}

	}

	public URI uploadFileTxt(InputStream is, String fileName, String contentType) {
		try {
			ObjectMetadata meta = new ObjectMetadata();
			meta.setContentType(contentType);
			LOG.info("Iniciando Upload de arquivo");
			s3Client.putObject(bucketName, fileName, is, meta);
			LOG.info("Tudo em cima patrão");

			return s3Client.getUrl(bucketName, fileName).toURI();
		} catch (URISyntaxException e) {
			throw new RuntimeException("Eerro ao converter URL para URI...");
		}
	}

	public URI uploadFile(MultipartFile multipartFile) {

		// as tres informações basicas para fazer upload via web Service
		try {
			String fileName = multipartFile.getOriginalFilename();
			InputStream is = multipartFile.getInputStream();
			String contantType = multipartFile.getContentType();
			return uploadFile(is, fileName, contantType);
		} catch (IOException e) {
			throw new FileException("Erro de IO: " + e.getMessage());
		}
	}

	private URI uploadFile(InputStream is, String fileName, String contantType) {
		try {
			ObjectMetadata objMetadata = new ObjectMetadata();
			LOG.info("INICIANDO UPLOAD");
			s3Client.putObject(bucketName, fileName, is, objMetadata);
			LOG.info("UPLOAD FINALIZADO!!!!!!!!");

			return s3Client.getUrl(bucketName, fileName).toURI();
		} catch (URISyntaxException e) {
			throw new FileException("Erro ao converter URL em URI");
		}
	}

}
