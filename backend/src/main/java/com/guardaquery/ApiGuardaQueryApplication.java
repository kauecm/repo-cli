package com.guardaquery;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiGuardaQueryApplication implements CommandLineRunner{

	
	public static void main(String[] args) {
		SpringApplication.run(ApiGuardaQueryApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	}

}
