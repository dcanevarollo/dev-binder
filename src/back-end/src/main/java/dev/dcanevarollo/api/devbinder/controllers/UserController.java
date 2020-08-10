package dev.dcanevarollo.api.devbinder.controllers;

import dev.dcanevarollo.api.devbinder.models.User;
import dev.dcanevarollo.api.devbinder.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User store(@RequestBody User user) {
        return service.save(user);
    }

    @GetMapping("/{id}")
    public User show(@PathVariable UUID id) {
        try {
            return service.findById(id);
        } catch (Exception err) {
            err.printStackTrace();
            return null;
        }
    }

}
