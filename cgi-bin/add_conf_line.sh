#!/bin/sh

# set the line to be added to the postgresql.conf file
# $1: file
# $2: token
# $3: value

# check if the line already exists in the postgresql.conf file
if grep -q "^$2 =" $1; then
    # if the line exists, remove it from the postgresql.conf file
    sed -i "/$2 =/d" $1
fi

# add the line to the postgresql.conf file
echo "$2 = $3" >> $1
