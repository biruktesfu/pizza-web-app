create table customers (
    id serial primary key,
    email text,
    password text,
    location text,
    phone_number text
);


create table restaurants (
    id serial primary key,
    name varchar(100),
    location varchar(100),
    phone_number varchar(100)
);

create table restaurant_admin (
    id serial primary key,
    restaurant_id integer references restaurants (id),
    email varchar(100),
    password text
    roles text[]

);

create table topping (
    id serial primary key,
    toppings text[]

);


create table pizza (
    id serial primary key,
    name varchar(500),
    restaurant_id int references restaurants,
    topping_id int references topping

);


create table orders (
    id serial primary key,
    restaurant_id integer references restaurants,
    pizza_id integer references pizza,
    topping_id integer references topping,
    price integer,
    additional_toppings text[]
);

