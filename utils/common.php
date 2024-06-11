<?php
ini_set('displayerrors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
define('PROJECT_FOLDER', '/shogi-game/'); 
define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . '/shogi-game/');

session_start();