$('#childrenBtn').click(function childrenParse() {

    $.ajax({
        
        url: "libs/php/getChildren.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        success: function(result) {
            console.log(result);
            
            if (result.status.name == "ok") {

                document.getElementById("apiTableDisplay").innerHTML =
                `<div>
                    <tr>
                        <th>Continent</th>
                        <th>Capital</th>
                        <th>Languages</th>
                        <th>Population</th>
                        <th>Area (km<sup>2</sup>)</th>
                    </tr>
                    <tr>
                        <td id="txtContinent"></td>
                        <td id="txtCapital"></td>
                        <td id="txtLanguages"></td>
                        <td id="txtPopulation"></td>
                        <td id="txtArea"></td>
                    </tr>
                </div>`;

                $('#txtContinent').html(result['data'][0]['continent']);
                $('#txtCapital').html(result['data'][0]['capital']);
                $('#txtLanguages').html(result['data'][0]['languages']);
                $('#txtPopulation').html(result['data'][0]['population']);
                $('#txtArea').html(result['data'][0]['areaInSqKm']);
                
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log({jqXHR, textStatus, errorThrown})
            document.getElementById("apiTableDisplay").innerHTML = `Error ${jqXHR.status}: ${errorThrown}`;
        }
    });
});