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
                    <td id="childCount">childCount</td>
                </tr>
                `;
                table += "<tr>";
                for(i =0; i < result.data.length; i++) {
                    table += `<td>${result.data[i].adminName1}</td>`;
                    console.log(`added ${result.data[i].adminName1} to table`);
                }
                table += "</tr>";
                document.getElementById("childrenTableDisplay").innerHTML = table;
                $('#childCount').html(result.data.length);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log({jqXHR, textStatus, errorThrown});
            document.getElementById("childrenTableDisplay").innerHTML = `Error ${jqXHR.status}: ${textStatus} <br /> Discription: ${errorThrown}`;
        }
    });
});