package dev.dcanevarollo.api.devbinder.services;

import dev.dcanevarollo.api.devbinder.models.User;
import dev.dcanevarollo.api.devbinder.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = repository.findByUsername(username);

        if (!user.isPresent()) throw new UsernameNotFoundException(username);

        return user.get();
    }

}
