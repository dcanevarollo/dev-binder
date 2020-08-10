begin;

create extension if not exists "uuid-ossp";

create table "user"
(
    id          uuid default uuid_generate_v4() not null
        constraint user_pk
            primary key,
    name        varchar(255)                    not null,
    username    varchar(255)                    not null,
    password    varchar(255)                    not null,
    bio         text,
    current_job varchar(255),
    created_at  timestamp
);

create unique index user_username_uindex
    on "user" (username);

create table followed
(
    user_id     uuid not null
        constraint followed_user_id_fk
            references "user"
            on update cascade on delete cascade,
    follower_id uuid not null
        constraint followed_user_id_fk_2
            references "user"
            on update cascade on delete cascade,
    constraint followed_pk
        primary key (user_id, follower_id)
);

create table post
(
    id         uuid default uuid_generate_v4() not null
        constraint post_pk
            primary key,
    user_id    uuid
        constraint post_user_id_fk
            references "user"
            on update cascade on delete cascade,
    title      varchar(255)                    not null,
    content    text                            not null,
    created_at timestamp                       not null,
    updated_at timestamp                       not null
);

create table file
(
    id      uuid default uuid_generate_v4() not null
        constraint file_pk
            primary key,
    post_id uuid
        constraint file_post_id_fk
            references post
            on update cascade on delete cascade,
    name    varchar(255)                    not null,
    type    varchar(255)                    not null,
    subtype varchar(255)                    not null
);

create table "like"
(
    post_id uuid not null
        constraint like_post_id_fk
            references post
            on update cascade on delete cascade,
    user_id uuid not null
        constraint like_user_id_fk
            references "user"
            on update cascade on delete cascade,
    constraint like_pk
        primary key (post_id, user_id)
);

create table tech
(
    id   uuid default uuid_generate_v4() not null
        constraint tech_pk
            primary key,
    name varchar(255)                    not null
);

create table tech_user
(
    tech_id uuid not null
        constraint tech_user_tech_id_fk
            references tech
            on update cascade on delete cascade,
    user_id uuid not null
        constraint tech_user_user_id_fk
            references "user"
            on update cascade on delete cascade,
    constraint tech_user_pk
        primary key (tech_id, user_id)
);

commit;

