$('#childrenBtn').click(function childrenParse() {

    $.ajax({
        
        url: "libs/php/getChildren.php",
        type: 'POST',
        dataType: 'JSON',
        data: {
            country: $('#selChildCountry').val(),
        },
        success: function(result) {
            console.log(result);
            console.log(result.status);
            if (result.status.name == "ok") {
                console.log('adding table');
                let table = `
                <tr>
                    <td id="childCount"></td>
                </tr>
                <tr>
                    <th>District</th>
                    <th>Population</th>
                </tr>
                `;
                for(i =0; i < result.data.length; i++) {
                    table += `<tr><td>${result.data[i].name}</td><td>${result.data[i].population}</td></tr>`;
                };
                document.getElementById("childrenTableDisplay").innerHTML = table;
                $('#childCount').html(`Number of districts: ${result.data.length}`);
                document.getElementById('childrenDetails').style.display = "block";
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log({jqXHR, textStatus, errorThrown});
            document.getElementById("childrenTableDisplay").innerHTML = `Error ${jqXHR.status}: ${textStatus} <br /> Discription: ${errorThrown}`;
        }
    });
});