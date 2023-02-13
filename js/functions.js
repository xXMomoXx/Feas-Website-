//Contact for Parameters
function checkName () {
            var nameBox = document.getElementById("name");
            var name = nameBox.value;
            
            if (name.length > 4 && isNaN(name)) {nameBox.style.borderColor = "green";}
            else {nameBox.style.borderColor = "red";}
        }

        function checkPhone () {
            var phoneBox = document.getElementById("phone");
            var phone = phoneBox.value;
            var phoneParameters= /([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
            
            if (phone.match(phoneParameters)) {phoneBox.style.borderColor = "green";}
            else {phoneBox.style.borderColor = "red";}
        }

        function updateReason() {
            var prodInfo = document.getElementById("prodInfo");
            var prodNum = document.getElementById("prodNum");
            var reason = document.getElementById("reason");
            
             if (reason.value == 1) {
                    prodNum.style.display = "block";}
        
                else {prodNum.style.display = "none"}} 


        function checkNum() {
            var numbox = document.getElementById("numBox");
            var pCode = numbox.value;
            const codes = ["SK1000", "SC1000", "TI1000", "RM1000", "BK1000", "BP1000"];
            
            
           if (codes.includes(pCode,0)) {numbox.style.borderColor = "green";}
                
             else {numbox.style.borderColor = "red";}   
            
        }

        function checkLen(){
            var textBox = document.getElementById("textbox").value;
            var len = textBox.length;
            
            if (len > 10 && len < 30 ) {textbox.style.borderColor = "green";}
            else {textbox.style.borderColor = "red";}
            
        }


//Scroll Fire & Paralax
function scroll() {
                    var t = window.scrollY;
                    var para = document.getElementById("para");
                    var m = -0.5;
                    var b = 4.5;
                    var team = document.getElementById("scrollfireDiv"); 
                    
                    newY= m*t + b;
                    para.style.backgroundPositionY = newY + "px";
                
    if (t > 500) {team.style.marginLeft = "0px";}
      else {team.style.marginLeft = "2000px";}  
}

//Modal Function 

function modal() {
var modal = document.getElementById("sendModal");
var btn = document.getElementById("sendBtn");
var span = document.getElementById("closeBtn")[0];
  
    modal.style.display = "block";
}

function closeModal() {
var modal = document.getElementById("sendModal");
var btn = document.getElementById("sendBtn");
var span = document.getElementById("closeBtn")[0];
  
    modal.style.display = "none";
}









