function storeValues() {
    var name = [];
    var dis = [];
    var city = [];

    var tname = document.getElementById("inputName").value;
    
    var tdis = document.getElementById("discription").value;
    var tcity = document.getElementById("inputCity").value;

    if(tname === "" || tdis === "" || tcity === "") {
        alert("All fields must be filled.");
        var inputs = document.getElementsByClassName("form-control");
        
        return false;
    } else {
        
        name.push(tname);
        dis.push(tdis);
        city.push(tcity);


        sessionStorage.setItem(name.length, name[name.length]);
        sessionStorage.setItem(dis.length, dis[dis.length]);
        sessionStorage.setItem(city.length, city[city.length]);

        return true;
    }
}

function remove() {
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("discription");
    sessionStorage.removeItem("city");

    document.getElementById("col1").value = "";
    document.getElementById("col2").value = "";
    document.getElementById("col3").value = "";

}

function myFunction() {
    if(typeof(Storage) === "undefined") {
        alert("Sorry, your browser doesn't support localStorage.");
    } else {
        var in1 = document.getElementById("col1");
        in1.value = sessionStorage.getItem("userName");
        
        var in2 = document.getElementById("col2");
        in2.value = sessionStorage.getItem("discription");

        var in3 = document.getElementById("col3");
        in3.value = sessionStorage.getItem("city");
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
