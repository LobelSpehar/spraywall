drop database if exists climbinggym;;

create database climbinggym;
use climbinggym;



create table wall(
    id int not null primary key auto_increment,
    admin int,
    name varchar(50),
    password varchar(50),
    image blob
);

create table route(
    id int not null primary key auto_increment,
    wall int,
    setter int,
    name varchar(50),
    setgrade int(2), 
    dateSet datetime
);

create table hold(
    id int,
    posx decimal(5,4),
    posy decimal(5,4),
    radius int,
    color char(7)
);

create table user(
    id int not null primary key auto_increment,
    nickname varchar(50),
    email varchar(50),
    password varchar(50)
);

create table climbedroute(
    user int,
    route int,
    grade int(2),
    date datetime,
    isfavourite boolean
);

alter table route add foreign key (setter) references user(id);
alter table climbedroute add foreign key (user) references user(id);
alter table climbedroute add foreign key (route) references route(id);
alter table hold add foreign key (id) references route(id);
alter table route add foreign key (wall) references wall(id);
alter table wall add foreign key (admin) references user(id);
