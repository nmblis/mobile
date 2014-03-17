<?php

$encoded = file_get_contents('php://input');
$decoded = json_decode($encoded, true);

$dest = $decoded['dest'];
$bg = $decoded['bg'];
$logo = $decoded['logo'];
$meta = $decoded['meta'];
$flipsidebg = $decoded['flipsidebg'];
$flipsidelogo = $decoded['flipsidelogo'];

$dirRoot = "../nmblis/$dest";
$dir1 = "bg";
$dir2 = "logo";
$dir3 = "meta";
$dir4 = "flipsidebg";
$dir5 = "flipsidelogo";

$leave_files = array($bg, $logo, $meta, $flipsidebg, $flipsidelogo);


foreach( glob($dirRoot.'/'.$dir1.'/*') as $file ) {
    if( !in_array(basename($file), $leave_files) )
        unlink($file);
}

foreach( glob($dirRoot.'/'.$dir2.'/*') as $file ) {
    if( !in_array(basename($file), $leave_files) )
        unlink($file);
}

foreach( glob($dirRoot.'/'.$dir3.'/*') as $file ) {
    if( !in_array(basename($file), $leave_files) )
        unlink($file);
}

foreach( glob($dirRoot.'/'.$dir4.'/*') as $file ) {
    if( !in_array(basename($file), $leave_files) )
        unlink($file);
}

foreach( glob($dirRoot.'/'.$dir5.'/*') as $file ) {
    if( !in_array(basename($file), $leave_files) )
        unlink($file);
}

?>