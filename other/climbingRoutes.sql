# mysql -uroot --default_character_set=utf8 < D:\Repositories\spraywall\other\climbingRoutes.sql

drop database if exists climbinggym;;

create database climbinggym default charset utf8;
use climbinggym;



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
    id int not null,
    route int not null,
    posx decimal(5,4) not null,
    posy decimal(5,4) not null,
    radius int not null,
    color char(7) not null
);

create table user(
    id int not null primary key auto_increment,
    nickname varchar(50) not null,
    email varchar(50) not null,
    password varchar(50) not null
);

create table climbedroute(
    user int not null,
    route int not null,
    grade int(2),
    date datetime not null,
    isfavourite boolean not null
);

alter table route add foreign key (setter) references user(id);
alter table climbedroute add foreign key (user) references user(id);
alter table climbedroute add foreign key (route) references route(id);
alter table hold add foreign key (route) references route(id);
alter table route add foreign key (wall) references wall(id);
alter table wall add foreign key (admin) references user(id);

#1-4
insert into user(id, nickname,email,password)
values
(null,'Owner','Owner@gmail.com','5198*/98*49*/**/38;['),
(null,'Penjac1','penjac1@gmail.com','5f892ef2fefee3y;['),
(null,'Setter1','Setter1@gmail.com','59849p98;tju;'),
(null,'Penjac2','penjac2@gmail.com','1651@698-hh4e64g;');
#1
insert into wall(id,admin,name,password,image)
values
(null,1,'Wall1','1234','url?');
#1
insert into route(id,wall,setter,name,setgrade,dateSet)
values
(null,1,3,'route1',10,'2022-11-23');

#1-5
insert into hold(id,route,posx,posy,radius,color)
values
(null,1,0.5404,0.53504,16,'#6fsa65e'),
(null,1,0.7545,0.220,16,'#4wg5544'),
(null,1,0.4055,0.7450,16,'#4wg5544'),
(null,1,0.66665,0.344450,16,'#4wg5544'),
(null,1,0.5745,0.14350,16,'#4afeeaf');

insert into climbedroute(user,route,grade,date,isfavourite)
values
(2,1,11,'2022-11-23',false),
(4,1,10,'2022-11-23',true);