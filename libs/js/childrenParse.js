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
            
            if (result.status.name == "ok") {
                console.log('adding table');
                let table = `
                <tr>
                    <td id="childCount">childCount</td>
                </tr>
                `;
                table += "<tr>";
                result.data.array.forEach(i => {
                    table += `<td>${data[i].adminName1}</td>`;
                    console.log(`added ${data[i].adminName1} to table`);
                });
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