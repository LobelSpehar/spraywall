# mysql -uroot --default_character_set=utf8 < D:\Repositories\spraywall\other\climbingRoutesV2.sql

drop database if exists spraywall;;

create database spraywall default charset utf8;
use spraywall;



create table wall(
    id int not null primary key auto_increment,
    admin int not null,
    name varchar(50) not null,
    password varchar(50) not null,
    image varchar(50) not null
);

create table route(
    id int not null primary key auto_increment,
    wall int not null,
    setter int not null,
    name varchar(50) not null,
    setgrade int(2) not null, 
    dateSet datetime not null
);

create table hold(
    id int not null primary key auto_increment,
    wall int not null,
    posx decimal(5,4) not null,
    posy decimal(5,4) not null,
    radius int not null   
);

create table route_hold(
    route int not null,
    hold int not null,
    type int(1) not null
);

create table user(
    id int not null primary key auto_increment,
    nickname varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null
);

create table user_route(
    user int not null,
    route int not null,
    grade int(2),
    date datetime not null,
    favourite boolean not null
);

alter table route add foreign key (setter) references user(id);
alter table route add foreign key (wall) references wall(id);

alter table user_route add foreign key (user) references user(id);
alter table user_route add foreign key (route) references route(id);

alter table hold add foreign key (wall) references wall(id);

alter table wall add foreign key (admin) references user(id);

alter table route_hold add foreign key (route) references route(id);
alter table route_hold add foreign key (hold) references hold(id);
