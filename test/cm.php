<?php
  Flight::route('/man', man);
  Flight::route('/woman', woman);
  
  Flight::route('/man/head', man_head);
  Flight::route('/man/head/@number', function($number) {
    man_head($number) });
    
  Flight::route('/man/chest', man_chest);
  Flight::route('/man/pants', man_pants);
  Flight::route('/man/shoes', man_shoes);
  
  Flight::route('/woman/head', woman_head);
  Flight::route('/woman/chest', woman_chest);
  Flight::route('/woman/skirts', woman_skirts);
  Flight::route('/woman/pants', woman_pants);
  Flight::route('/woman/shoes',  woman_shoes);
  Flight::route('/woman/@position', function($position) {
    woman_dynamic($position) });
  Flight::route('@url', warning);

  Flight::start();

  man_head() {
    sql_man_head();
  }😶

  function sql_man_head() {
    return 'SELECT link FROM clothes WHERE position="head" AND gender=1';
    return 'SELECT link FROM clothes WHERE position="chest" AND gender=1';
    return 'SELECT link FROM clothes WHERE position="pants" AND gender=1';
    return 'SELECT link FROM clothes WHERE position="skirts" AND gender=1';
    return 'SELECT link FROM clothes WHERE position="shoes" AND gender=1';
  }

  function json_parse() {
   
  }