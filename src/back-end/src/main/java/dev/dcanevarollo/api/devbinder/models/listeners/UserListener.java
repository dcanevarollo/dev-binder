package dev.dcanevarollo.api.devbinder.models.listeners;

import dev.dcanevarollo.api.devbinder.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.persistence.PrePersist;
import java.time.LocalDateTime;

@Component
public class UserListener {

    static PasswordEncoder passwordEncoder;

    @Autowired
    public void initEncoder(PasswordEncoder passwordEncoder) {
        UserListener.passwordEncoder = passwordEncoder;
    }

    @PrePersist
    public void beforeSave(final User userInstance) {
        if (userInstance.getCreatedAt() == null)
            userInstance.setCreatedAt(LocalDateTime.now());

        String password = userInstance.getPassword();

        if (password != null)
            userInstance.setPassword(passwordEncoder.encode(password));
    }

}
