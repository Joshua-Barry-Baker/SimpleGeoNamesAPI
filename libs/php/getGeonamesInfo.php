<?php
    $eta=-hrtime(true);
    
    $url='http://api.geonames.org/countryInfoJSON?formatted=true&lang='. $_REQUEST['lang'] . '&country' . $_REQUEST['country'] . '$username=JBBaker&style=full';
    
    $eta+=hrtime(true);
    $output['status']['returnedIn']=$eta/1e+6 . 'ms';
?>