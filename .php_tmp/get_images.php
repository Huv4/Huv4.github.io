<?php
require_once "main.php";
$dir = SITE_ROOT . "/uploads//";
$photos = scandir($dir);
//unset($photos[0], $photos[1]);
header('Content-Type: application/json');
echo json_encode($photos);
