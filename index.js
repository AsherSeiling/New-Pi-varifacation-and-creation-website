// © 2020 Asher Seiling

var cal_new_pi = 0;

var diamiter = 10;

var radius = diamiter / 2;

var new_pi = 0;

// Defines old pi
var old_pi = 0;

function convert_new_pi_to_old_pi(){ 
    // Gets old pi
    old_pi = document.getElementById("old_pi_input").value;
    check();

    // Calculates new pi
    cal_new_pi = ((parseFloat(radius) * parseFloat(radius)) * parseFloat(old_pi)) / 100;
    new_pi = cal_new_pi;

    // Displays the result
    document.getElementById("new_pi_out").innerHTML = new_pi;
};

// Function ran on execution
function main(){
    convert_new_pi_to_old_pi();
};

// Checks to see if 
function check(){
    if(old_pi == ""){
        alert("You need to input PI fist");
        location.reload()
    }
    else{
    };
};