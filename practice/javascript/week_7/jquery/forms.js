$(document).ready(function () {

    
    $("#submit-button").click(function (event) {
        event.preventDefault();

        console.log("clicked!");

        var username = $("#username").val();
        console.log("Username: "username);

        var passoword = $("#password").val();
        console.log("Passsoword: " + password);

        if (username == "admin") {

            $("#messages").html("<p>Welcome Administrator</p>")

            //console.log("Welcome Administrator");

            if (password == "123456") {

                $("#messages").html("<p>Administrator succesfully logged in!</p>");
                //console.log("Administrator sucessfully logged in");

            }else {
                $("#messages").html("<p>Login failded! Wrong username or password!</p>")
                //console.log("Login failded! Wrong username or password!")
            } 
        }else{
            $("#messages").html("<p>Welcome "+ username +"!</p>")
            //console.log("Welcome "+ username + "!");
        }

        

    });


});