create database loja;
use lojan;

create table login(

email varchar(50) primary key,
senha int 
);

create table cadastro(
id int auto_increment primary key,
email varchar(50),
senha int,
nome varchar(50),
data_de_nascimento date,
endereço varchar(50),
numero_de_telefone int,
classe varchar(50)

);

create table categoria(
id int auto_increment primary key,
Nome varchar(50),
descricao varchar(100),
quant_prod int
);

create table produtos (
id_prod int auto_increment primary key,
nome_prod varchar(50),
valor_prod float,
categoria_prod int,
quant_unit int,
nome_vendedor varchar(50)
);
alter table cadastro add id_categoria int;
alter table cadastro add constraint id_categoria foreign key(id_categoria) references categoria(id); 
alter table produtos add constraint categoria_prod foreign key (categoria_prod) references categoria (id);

