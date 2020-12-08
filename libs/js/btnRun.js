$('#btnRun').click(function(){ //api switchboard
    const fetch = $('#selFetch').val();
    switch(fetch){
        case "getCountryInfo":
            countryParse();
            break;
        case "getChildren":
            childrenParse();
            break;
    }
})