var emails = ["abc@gmail.com", "abc.afr@gmail.com", "abc@gmail.com.in","abc.@gmail.com", "abc.afrgmail.com", "abc@gmail.com.in.in"];
//email regex for validation
var emailRegex = RegExp("(^[a-z]+)(([\. \+ \-]?[a-z A-Z 0-9])*)@(([0-9 a-z]+[\.]+[a-z]{3})+([\.]+[a-z]{2,3})?$)");
for(let i =0;i<emails.length;i++){
    if(emailRegex.test(emails[i])){
        console.log("Valid Email: "+emails[i]);
    }else{
        console.log("Invalid Email: "+emails[i]);
    }
}