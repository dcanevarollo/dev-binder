package dev.dcanevarollo.api.devbinder.controllers;

import dev.dcanevarollo.api.devbinder.exceptions.AuthException;
import dev.dcanevarollo.api.devbinder.models.User;
import dev.dcanevarollo.api.devbinder.repos.UserRepository;
import dev.dcanevarollo.api.devbinder.utils.LoggedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<User> index() {
        Optional<User> authenticatedUser = userRepository.findById(LoggedUser.getUser().getId());

        if (!authenticatedUser.isPresent())
            throw new AuthException();

        return new ResponseEntity<>(authenticatedUser.get(), HttpStatus.ACCEPTED);
    }

}
