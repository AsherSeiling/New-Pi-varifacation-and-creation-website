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
    test_algerithm();
};

// Checks to see if the box is filled in
function check(){
    if(old_pi == ""){
        alert("You need to input PI fist");
        location.reload()
    }
    else{
    };
};

// Vars that need to be global for the test algertithm

var fail_count = 0;

var success_count = 0;


var num = 0;

var try_num = 0;

// Class to check to make shure that new pi workd
function test_algerithm(){
    alert("The webpage is going to test this variation please do not close the webpage for about 20-30 seconds.");
    while(num <= 1000000){
        num += .1;
        try_num += 1;
        var cal_area_new = (num * num) * new_pi;
        var cal_area_old = ((num / 2) * (num / 2)) * old_pi;

        var cal_cir_new = (num * new_pi) * 4;
        var cal_cir_old = (num * new_pi);

        // If statements that check to see if the stuff is succesfull

        if(cal_area_new == cal_area_old){
            success_count += 1;
        }
        else{
            fail_count += 1;
        };
    };

    var success_rate = `${(success_count / try_num) * 100}%`;
    // Updates the test boxes
    document.getElementById("times_tested").innerHTML = try_num;
    document.getElementById("fails").innerHTML = fail_count;
    document.getElementById("success_rate").innerHTML = success_rate;
};