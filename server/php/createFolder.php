<?php

/*ini_set('display_errors', '1');
ini_set('error_reporting', E_ALL);*/

include('phpqrcode/qrlib.php'); 
	
$encoded = file_get_contents('php://input');
$decoded = json_decode($encoded, true);
  
$userid = $decoded['userid'];
$dest = $decoded['dst'];
$source = $decoded['src'];

/*$userid = "Judd";
$dest = "Daniel";
$source = "Hendrix";*/
 
$src = "../nmblis/$source/";
$dst = "../nmblis/$dest/";
$dstqr = "../nmblis/$dest/qr/";
$dstmeta = "../nmblis/$dest/meta/";

function recurse_copy($src,$dst) {
  $dir = opendir($src);
    @mkdir($dst);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            if ( is_dir($src . '/' . $file) ) {
                recurse_copy($src . '/' . $file,$dst . '/' . $file);
            }
            else {
                copy($src . '/' . $file,$dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

function deleteDir($path)
{
    return is_file($path) ?
            @unlink($path) :
            array_map(__FUNCTION__, glob($path.'/*')) == @rmdir($path);
}
 
recurse_copy($src,$dst);
deleteDir($dstqr);
deleteDir($dstmeta);
mkdir($dstqr);
mkdir($dstmeta);

$qrDir = $dstqr; 
     
$codeContents = "/nmblis/$userid/$dest/"; 

$fileName = 'nmblis'.$dest.'.png'; 
     
$pngAbsoluteFilePath = $qrDir.$fileName; 
QRcode::png($codeContents, $pngAbsoluteFilePath); 

?>