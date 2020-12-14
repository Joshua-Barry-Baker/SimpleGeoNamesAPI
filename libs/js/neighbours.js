$('#neighboursBtn').click(function neighboursParse() {

    $.ajax({
        
        url: "libs/php/getNeighbours.php",
        type: 'POST',
        dataType: 'JSON',
        data: {
            country: $('#selNeighbours').val(),
        },
        success: function(result) {
            console.log(result);
            console.log(result.status);
            if (result.status.name == "ok") {
                console.log('adding table');
                let table = `
                <tr>
                    <td id="neighboursCount"></td>
                </tr>
                <tr>
                    <th>District</th>
                    <th>Population</th>
                </tr>
                `;
                for(i =0; i < result.data.length; i++) {
                    table += `<tr><td>${result.data[i].name}</td><td>${result.data[i].population}</td></tr>`;
                };
                document.getElementById("neighboursTableDisplay").innerHTML = table;
                $('#neighboursCount').html(`Number of Neighbours: ${result.data.length}`);
                document.getElementById('neighboursDetails').style.display = "block";
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log({jqXHR, textStatus, errorThrown});
            document.getElementById("neighboursTableDisplay").innerHTML = `Error ${jqXHR.status}: ${textStatus} <br /> Discription: ${errorThrown}`;
            document.getElementById('neighboursDetails').style.display = "block";
        }
    });
});