


//Main Function start
{
    var answerInArray = [];

    var hisHerName = prompt("Please Enter your name");
    answerInArray[0]=hisHerName;

    inputCheckGender();

    inputCheckAge();

    lastThreeQuestions();

    printAllInputInAnAraray();

    WelcomingAccept();

} 
//Main function end
        
        function inputCheckGender(){
            while (true) {
                var hisHerGender = prompt("Please Enter your Gender(male/female)").toLowerCase();
                if (hisHerGender == "male" || hisHerGender == "female") {
                    answerInArray[1]=hisHerGender;
                    return hisHerGender;
                   
                }
                else {
                    alert("Plese enter your Gender Correctly");
                }
            }
        }
        function inputCheckAge(){
            while (true) {
                var hisHerAge = prompt("Please enter your Age");
                if (hisHerAge > 0) {
                    answerInArray[2]=hisHerAge;
                    break;
                }
                else {
                    alert("Plese enter your Age correctly");
                }
            }
        }
        function WelcomingAccept(){
            var hisHerAcceptToWelcoming = confirm("Are you want to show Welcoming Message");
        if (hisHerAcceptToWelcoming == true) {
            
            switch (answerInArray[1]) {
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
    }
    function lastThreeQuestions(){
        var questions = ["Are you Excited?(yes/no)",
            "Did you solve the problem?(yes/no)",
            "Did you find it difficult to solve?(yes/no)"];
           

            for (var i=0 ;i<=2;i++){

                var answer = prompt(questions[i]);
                 
                answer.toLowerCase();
                if (answer == "yes" || answer =="no")
                {
                    answerInArray.push(answer);
                    
                }
                else{
                    alert("Invaild input");
                    i--;
                }
            }

        
    }
    
    function printAllInputInAnAraray(){
        for (var index = 0; index < 6; index++) 
        (console.log(answerInArray[index]));
    }
