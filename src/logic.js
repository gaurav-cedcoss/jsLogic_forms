function calc_weight(){
    var name_var=document.getElementById('name').value;
    var age_var=parseInt((document.getElementById('age').value));
    var weight_var= parseInt((document.getElementById('weight').value));
    
    if(name_var == "" || age_var =="" || weight_var == "" )
        document.getElementById("rest").innerHTML="Enter all values";
    else{
    if(age_var>=5 && age_var<=20){
        document.getElementById("rest").innerHTML=compare_fn(name_var,age_var,weight_var);
    }
    else
        document.getElementById('rest').innerHTML="Enter value in range";
 }  
}
function compare_fn(name_var,age_var,weight_var){
    if(age_var>=5 && age_var<=7){
        if(weight_var<15)
            return "Hello " + name_var + " !!!Your weight is less than recommended value of "+weight_var+" at an age of "+age_var;
        else if(weight_var>20)
            return "Hello " + name_var + " !!!Your weight is greater than recommended value of "+weight_var+" at an age of "+age_var;
            else
            return "Hello " + name_var + " !!!Your weight is perfect.";
        }

        else if(age_var>=8 && age_var<=10){
            if(weight_var<21)
                return"Hello " + name_var + " !!!Your weight is less than recommended value of "+weight_var+" at an age of "+age_var;
            else if(weight_var>25)
                return "Hello " + name_var + " !!!Your weight is greater than recommended value of "+weight_var+" at an age of "+age_var;
                else
                return "Hello " + name_var + " !!!Your weight is perfect.";
            }

             else if(age_var>=11 && age_var<=15){
                if(weight_var<26)
                    return"Hello " + name_var + " !!!Your weight is less than recommended value of "+weight_var+" at an age of "+age_var;
                else if(weight_var>30)
                    return "Hello " + name_var + " !!!Your weight is greater than recommended value of "+weight_var+" at an age of "+age_var;
                    else
                    return "Hello " + name_var + " !!!Your weight is perfect.";
                }

               else if(age_var>=16 && age_var<=20){
                    if(weight_var<31)
                        return"Hello " + name_var + " !!!Your weight is less than recommended value of "+weight_var+" at an age of "+age_var;
                    else if(weight_var>40)
                        return "Hello " + name_var + " !!!Your weight is greater than recommended value of "+weight_var+" at an age of "+age_var;
                        else
                        return "Hello " + name_var + " !!!Your weight is perfect.";
                    }
                
}