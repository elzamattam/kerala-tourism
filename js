<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="districts.css">
    <script src="sign1.js"></script>
    <link rel="icon" href="login.jpg">
    <title>Sign up</title>
</head>
<body>
    <form action="Districts.htm" onsubmit="return valform();">
        <div class="container">
        <label>First Name</label>
        <input type="text" id="fname" placeholder="Enter your first Name" name="fname"/><br>
        <span id="username"></span>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" placeholder="Enter your Last Name" name="lname"/><br>
        <label for="email">email</label>
        <input type="email" id="email" placeholder="Enter Your Email" name="email"/><br>
        <label for="password">Password</label>
        <input type="password" id="pwd" placeholder="Enter Your Password" name="password"/><br>
        <label for="number">Phone Number</label><br>
        <input type="tel" id="number" placeholder="Enter Phone"/><br>
        <input type="submit" name="submit" value="submit"/>
        <label for="error" id="error"></label><br>
        
        </div>
    </form>
    <style>
        body{
            
            background-image: url("sign.jpg");
            background-repeat: no-repeat;
        }
        
    </style>
   
</body>
</html>
javascript
var x;
function valform()
{
x=document.getElementById("fname").value;
    if(x=="")
    {
        
        document.getElementById("username").innerHTML="Please fill the First Name";
          return false;
    }
}
