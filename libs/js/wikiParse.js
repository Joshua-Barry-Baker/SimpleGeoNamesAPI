$('#wikiBtn').click(function wikiParse() {

    $.ajax({
        
        url: "libs/php/getWiki.php",
        type: 'POST',
        dataType: 'JSON',
        data: {
            country: $('#selWiki').val(),
            max: $('#selWikiMax').val()
        },
        success: function(result) {
            console.log(result);
            console.log(result.status);
            if (result.status.name == "ok") {
                console.log('adding wiki');
                let table = `
                <tr>
                    <td id="wikiCount"></td>
                </tr>
                <tr>
                    <th>Location</th>
                    <th>Summary</th>
                    <th>Country Code</th>
                    <th>Full Article</th>
                </tr>
                `;
                for(i =0; i < result.data.length; i++) {
                    table += `<tr><td>${result.data[i].title}</td>
                    <td>${result.data[i].summary}</td>
                    <td>${result.data[i].countryCode}</td>
                    <td><a href="https://${result.data[i].wikipediaUrl}" target="_blank" rel="noopener noreferrer">link to page on wikipedia</a></td>
                    </tr>`;
                };
                document.getElementById("wikiTableDisplay").innerHTML = table;
                $('#wikiCount').html(`Found ${result.data.length} Locations`);
                document.getElementById('wikiDetails').style.display = "block";
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log({jqXHR, textStatus, errorThrown});
            document.getElementById("wikiTableDisplay").innerHTML = `Error ${jqXHR.status}: ${textStatus} <br /> Discription: ${errorThrown}`;
            document.getElementById('wikiDetails').style.display = "block";
        }
    });
});