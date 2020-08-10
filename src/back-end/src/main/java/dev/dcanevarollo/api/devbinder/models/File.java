package dev.dcanevarollo.api.devbinder.models;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, length = 20)
    private String type;

    @Column(nullable = false, length = 20)
    private String subtype;

    @Transient
    private String url;

    public String getUrl() {
        return "files/" + id;
    }

}
