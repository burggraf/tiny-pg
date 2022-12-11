PGPASSWORD=password psql -U postgres -h localhost -p 5011 -c "create table people (id serial primary key, name text);insert into people (name) values ('Adam'),('Betty'),('Charles');"
sleep 3
PGPASSWORD=password psql -U postgres -h localhost -p 5012 -c "select * from people;"
sleep 3
PGPASSWORD=password psql -U postgres -h localhost -p 5011 -c "alter table people add column age numeric;update people set age = 22 where name = 'Charles';"
sleep 3
PGPASSWORD=password psql -U postgres -h localhost -p 5013 -c "select * from people;"
