<?php
    $eta=-hrtime(true);
    
    $url='http://api.geonames.org/wikipediaSearchJSON?q=' . $_REQUEST['country'] . '&maxRows=' . $_REQUEST['max'] . '&username=joshuabarrybaker';

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);

    $result=curl_exec($ch);

    curl_close($ch);

    $decode = json_decode($result, true);

    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "mission saved";
    $eta+=hrtime(true);
    $output['status']['returnedIn']=$eta/1e+6 . 'ms';
    $output['data'] = $decode['geonames'];

    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($output);
?>