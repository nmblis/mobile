<?php

$encoded = file_get_contents('php://input');
$decoded = json_decode($encoded, true);

$folder = $decoded['nmblisId'];
$path = "../nmblis/$folder";

function rrmdir($dir) { 
   if (is_dir($dir)) { 
     $objects = scandir($dir); 
     foreach ($objects as $object) { 
       if ($object != "." && $object != "..") { 
         if (filetype($dir."/".$object) == "dir") rrmdir($dir."/".$object); else unlink($dir."/".$object); 
       } 
     } 
     reset($objects); 
     rmdir($dir); 
   } 
 }

rrmdir($path);

?>