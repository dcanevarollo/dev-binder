package dev.dcanevarollo.api.devbinder.models;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
public class Tech {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @ManyToMany(mappedBy = "techs")
    private Set<User> users = new HashSet<>();

}
