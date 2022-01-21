


var maxCount
var hisHerName = prompt("Please Enter your name");

while (true) {
    var hisHerGender = prompt("Please Enter your Gender(male/female)").toLowerCase();
    if (hisHerGender == "male" || hisHerGender == "female") break;
    else {
        alert("Plese enter your Gender Correctly");
    }
}

var hisHerAge = prompt("Please enter your Age");

if (hisHerAge <= 0) {
    alert("Plese enter your Age correctly");

}

var hisHerAcceptToWelcoming = confirm("Are you want to show Welcoming Message");
if (hisHerAcceptToWelcoming == true) {
    switch (hisHerGender) {
        case "male":
            alert("Welcome Mr " + hisHerName);
            break;
        case "female":
            alert("Welcome Ms " + hisHerName);
            break;
        default:
            alert(hisHerName);
    }
}
