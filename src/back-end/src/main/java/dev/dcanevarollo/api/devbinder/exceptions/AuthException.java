package dev.dcanevarollo.api.devbinder.exceptions;

import org.springframework.security.core.AuthenticationException;

public class AuthException extends AuthenticationException {
    public AuthException() {
        super("Cannot authenticate with those credentials");
    }
}
