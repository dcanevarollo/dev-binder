package dev.dcanevarollo.api.devbinder.controllers;

import dev.dcanevarollo.api.devbinder.models.User;
import dev.dcanevarollo.api.devbinder.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User store(@RequestBody User user) {
        return repository.save(user);
    }

    @GetMapping("/{id}")
    public User show(@PathVariable UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }

}
