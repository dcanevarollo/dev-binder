package dev.dcanevarollo.api.devbinder.controllers;

import dev.dcanevarollo.api.devbinder.models.User;
import dev.dcanevarollo.api.devbinder.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository repository;

    @PostMapping
    public ResponseEntity<User> store(@RequestBody User user) {
        User userCreated = repository.save(user);

        return new ResponseEntity<>(userCreated, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> show(@PathVariable UUID id) {
        User user = repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
