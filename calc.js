window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("product");
    s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("radios");
    let checkboxes = document.getElementById("checkboxes");
    console.log(select.value);
    if (select.value == "1") {
        radios.style.display = "none";
        checkboxes.style.display = "none";
    }
    if (select.value == "2"){
        radios.style.display = "block";
        checkboxes.style.display = "none";
    }
    if (select.value == "3"){
        checkboxes.style.display = "block";
        radios.style.display = "none";
    }
    
    });
   
    let r = document.querySelectorAll(".radios input[type=radio]");
    r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
    let r = event.target;
    console.log(r.value);
    });
    });

    let c = document.querySelectorAll(".checkboxes input[type=checkbox]");
    c.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
    let c = event.target;
    console.log(c.value);
    });
    });
   
   });


var ans;
var btn = document.querySelector('#btn');
var kol = document.querySelector('#kol');
var s1 = document.querySelector('#s1');
var s2 = document.querySelector('#s2');
var s3 = document.querySelector('#s3');
var op1 = document.querySelector('#op1');
var op2 = document.querySelector('#op2');
var op3 = document.querySelector('#op3');
var sv1 = document.querySelector('#sv1');
var sv2 = document.querySelector('#sv2');

btn.onclick = function(){
    if ((kol.value > 0) && (kol.value != '')){
        op1.value = 0;
        op2.value = 0;
        op3.value = 0;
        sv1.value = 0;
        sv2.value = 0;
        if (radios.style.display == "block"){
            sv1.value = 0;
            sv2.value = 0;
            if (op1.checked){ 
                op1.value = 100; 
                op2.value = 0;
                op3.value = 0;
            }

            if (op2.checked){ 
                op2.value = 200; 
                op1.value = 0;
                op3.value = 0;
            }

            if (op3.checked){ 
                op3.value = 300; 
                op1.value = 0;
                op2.value = 0;
            }
        }
        if (checkboxes.style.display == "block"){
            op1.value = 0;
            op2.value = 0;
            op3.value = 0;
            if (sv1.checked){ 
                sv1.value = 1000; 
            }

            if (sv2.checked){ 
                sv2.value = 2000; 
            }
        }
        ans = (kol.value*1500)+Number(op1.value)+Number(op2.value)+Number(op3.value)+Number(sv1.value)+Number(sv2.value);
        if (isNaN(ans)){
            ans = "Введите количество товара.";
        }
    }
    else{
        ans = "Введите количество товара.";
    }
    document.getElementById('answer').innerHTML = ans;
}
   