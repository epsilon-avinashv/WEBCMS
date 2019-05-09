// JavaScript Document
function flipform()
{
	var x=document.getElementById("login-form");
	var y=document.getElementById("registration-form");
	console.log(x);
	if(x.style.display==="none")
	{
		y.style.display="none";
		x.style.display="block";
		x.style.animation="fadein 1s forwards 0s ease-in-out";
	}
	else
	{
		y.style.display="block";
		y.style.animation="fadein 1s forwards 0s ease-in-out";
		x.style.display="none";
	}
}

function login()
{
	var usn=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
    var flag=0;
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET","http://demo7248437.mockable.io/users");
	xhttp.onload= function()
	{
		var data=JSON.parse(xhttp.responseText);
		var a = data.filter((obj) => {if(obj.name===usn && obj.password===pass) return true});
		console.log(a);
//		for(var i=0; i<data.length;i++)
//			{
//				if(data[i].name === usn && data[i].password===pass)
//					{
//						console.log(flag);
//						flag=1;
//						console.log(flag);
//						break;
//					}
//				else
//				{
//					console.log('Failed');
//					
//				}
//				
//			}
		
		if(a.length>0)
		{
			alert("Login Sucessfull");
			document.getElementById("username").value="";
			document.getElementById("password").value="";
		}
	else{
		alert("login failed");
		document.getElementById("username").value="";
		document.getElementById("password").value="";
	}
		
	}
	
	
	
	xhttp.send();
}