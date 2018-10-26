var record = [];
var row = document.getElementById("row");
function storeValues() {
    var data = {};
    data.name = document.getElementById("inputName").value;
    data.dis = document.getElementById("discription").value;
    data.city = document.getElementById("inputCity").value;

    if(data.name === "" || data.dis === "" || data.city === "") {
        alert("All fields must be filled.");
        var inputs = document.getElementsByClassName("form-control");
        
        return false;
    } else {
        var tmp_data = sessionStorage.getItem("records");
        if (tmp_data == null) {
            record = [];
        } else {
            record = JSON.parse(tmp_data);
        }
        record.push(data);
        //localStorage.setItem('alltitle', JSON.stringify(altitle));
        convertToString(record);
        //sessionStorage.setItem("records", JSON.stringify(record));

        return true;
    }
}

function convertToString(data) {
    sessionStorage.setItem("records", JSON.stringify(data));
}

function remove() {
    try{
        var id = document.getElementById("data-id").value;
        if(isNaN(id) || id === "" ) {
            alert("Please! enter id of to remove.");
            return;
        } else {
            id = Number(id);
            id--;
            var data = JSON.parse(sessionStorage.getItem("records"));
            data.splice(id,1);
            convertToString(data);
            myFunction();
        }
    } catch(err) {
        alert(err + " remove()");
    }
}


function myFunction() {
    if(typeof(Storage) === "undefined") {
        alert("Sorry, your browser doesn't support localStorage.");
    } else {
        
        try{
            var records = JSON.parse(sessionStorage.getItem("records"));
            //alert(records[2].name + "\n" +
            //        records[2].dis + "\n" + records[2].city);
            /*
                for(let i = 0; i < records.length; i++) {
                document.getElementById("cola").value = records.length;
                document.getElementById("col1").value = records[0].name;
                document.getElementById("col2").value = records[0].dis;
                document.getElementById("col3").value = records[0].city;
            }
            */
        
            var tmpDiv = document.getElementById("tmp");

            if(tmpDiv.hasChildNodes) {
                var childern = tmpDiv.childNodes;
                for(let i = 0; i < childern.length; i++) {
                    childern[i].parentElement.removeChild(childern[i]);
                }
            }
            
            for(let i = 0; i < records.length; i++) {
                var row1 = document.createElement("div");
                row1.classList.add("row");
                row1.setAttribute("id", "row1");

                var colId = document.createElement("input");
                colId.classList.add("col");
                colId.classList.add("col-id");
                colId.setAttribute("type", "text");
                colId.setAttribute("id", "cola");
                colId.disabled = true;

                var col1 = document.createElement("input");
                col1.classList.add("col");
                col1.setAttribute("type", "text");
                col1.setAttribute("id", "col1");
                col1.disabled = true;
                
                var col2 = document.createElement("input");
                col2.classList.add("col");
                col2.setAttribute("type", "text");
                col2.setAttribute("id", "col2");
                col2.disabled = true;

                var col3 = document.createElement("input");
                col3.classList.add("col");
                col3.setAttribute("type", "text");
                col3.setAttribute("id", "col3");
                col3.disabled = true;

                colId.value = i+1;
                col1.value = records[i].name;
                col2.value = records[i].dis;
                col3.value = records[i].city;

                row1.appendChild(colId);
                row1.appendChild(col1);
                row1.appendChild(col2);
                row1.appendChild(col3);


                tmpDiv.appendChild(row1);
            }
        } catch(err) {
            alert(err + "    myFunction()");
        } finally {
            
        }
    }
    
}

function disable() {
    var in1 = document.getElementById("col1");
    in1.style.backgroundColor = "#007bff";
    in1.style.color = "#fff";
    in1.disabled = true;    
    
    var in2 = document.getElementById("col2");
    in2.style.backgroundColor = "#007bff";
    in2.style.color = "#fff";
    in2.disabled = true;    

    var in3 = document.getElementById("col3");
    in3.style.backgroundColor = "#007bff";
    in3.style.color = "#fff";
    in3.disabled = true;    
}

function editable() {
    var in1 = document.getElementById("col1");
    in1.style.backgroundColor = "#fff";
    in1.style.color = "#007bff";
    in1.removeAttribute("disabled");
    in1.addEventListener("change", function() {
        var val1 = in1.value;
        sessionStorage.userName = val;
    })
    

    var in2 = document.getElementById("col2")
    in2.style.backgroundColor = "#fff";
    in2.style.color = "#007bff";
    in2.removeAttribute("disabled");
    in2.addEventListener("change", function() {
        var val2 = in2.value;
        sessionStorage.discription = val2;
    })
    

    var in3 = document.getElementById("col3");
    in3.style.backgroundColor = "#fff";
    in3.style.color = "#007bff";
    
    in3.removeAttribute("disabled");
    in3.addEventListener("change", function() {
        var val3 = in3.value;
        sessionStorage.city = val3;
    })
    
}
