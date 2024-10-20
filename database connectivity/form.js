//box , inner
//form1 
    function try_login(){
        var username=document.forms["login"]["username"].value;
        var password=document.forms["login"]["password"].value;
        if(username==null || username==""){
                document.getElementById("errorbox").innerHTML="Enter the username";
            return false;
        }
        // if(username.length < 5 ){
        //     document.getElementById("errorbox").innerHTML="Enter minimum 5 characters";
        //     return false;
        // }

        if(password==null || password==""){
                document.getElementById("errorbox").innerHTML="Enter the password";
            return false;
        }
        // if(password.length > 8 ){
        //     document.getElementById("errorbox").innerHTML="Password must be less than 8 characters";
        //     return false;
        // }

        if(username!="" && password!=""){
            alert("Logged in successfully");
        }          
    }

//form2
    function _register(){
        var username1=document.forms["register"]["username1"].value;
        var email=document.forms["register"]["email"].value;
        var password1=document.forms["register"]["password1"].value;
        var re_password=document.forms["register"]["re_password"].value;

        if(username1==null || username1==""){
                document.getElementsByClassName("username_err").innerHTML="Enter the username";
            return false;
        }
        if(username1.length < 5 ){
            document.getElementById("errorbox").innerHTML="Enter minimum 5 characters";
            return false;
        }
        if(email==null || email==""){
                document.getElementById("errorbox").innerHTML="Enter the email";
            return false;
        }

        if(password1==null || password1==""){
                document.getElementById("errorbox").innerHTML="Enter the password";
            return false;
        }
        if(password1.length > 8 ){
            document.getElementById("errorbox").innerHTML="Password must be less than 8 characters";
            return false;
        }

        if(re_password==null || re_password==""){
                document.getElementById("errorbox").innerHTML="Re-enter the password";
            return false;
        }
        if(password1!=re_password){
            document.getElementById("errorbox").innerHTML="Password doesn't match";
            return false;
        }
     
    }


