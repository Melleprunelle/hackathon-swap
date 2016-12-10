#!/usr/bin/env sh

POSITIONS="1 2 3 4 5"
CATEGORIES="1 2"
INSERT_CLOTHE="INSERT INTO clothes (link,position_id,categories_id) VALUES ('%s',%d,%d);"

get_url() {
  local url
  url="${1}"
}

check_int() {
  local integers value default
  value=$"${1}"; shift
  default="${1}"; shift
  integers="${*}"
  for i in ${integers}
  do
    if [ $i = ${value} ]
    then 
      return 0
    fi
  done
  echo "${default}"
  return 1
}

_insert() {
  local link position category
  link="${1}"
  position=$(check_int "${2}" 1 "${POSITIONS}")
  category=$(check_int "${3}" 1 "${CATEGORIES}")
  printf -- "${INSERT_CLOTHE}\n" "${link}" "${position}" "${category}"
}

_usage() {
  printf -- "usage: $0 insert link position category\n"
  printf -- "usage: $0 random link\n"
}

_insert_random() {
  local line
  while read line 
  do
    for j in ${line} 
    do
      _insert ${j} 1 1
    done
  done
}

arg="${1}"; shift
case "${arg}" 
in 
  insert) _insert ${*};;
  random) _insert "${1}" $((1+(RANDOM%5))) $((1+(RANDOM%2)));;
  stdin) _insert_random;;
  *) _usage;;
esac
