package dev.dcanevarollo.api.devbinder.models.listeners;

import dev.dcanevarollo.api.devbinder.models.Post;
import org.springframework.stereotype.Component;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDateTime;

@Component
public class PostListener {

    @PrePersist
    public void beforePersist(final Post postInstance) {
        postInstance.setCreatedAt(LocalDateTime.now());
        postInstance.setUpdatedAt(LocalDateTime.now());
    }

    @PreUpdate
    public void beforeUpdate(final Post postInstance) {
        postInstance.setUpdatedAt(LocalDateTime.now());
    }

}
