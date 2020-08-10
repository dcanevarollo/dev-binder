package dev.dcanevarollo.api.devbinder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableJpaRepositories("dev.dcanevarollo.api.devbinder.repos")
@CrossOrigin(origins = "*")
public class DevBinderApplication {

    public static void main(String[] args) {
        SpringApplication.run(DevBinderApplication.class, args);
    }

}
