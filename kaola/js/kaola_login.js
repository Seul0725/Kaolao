window.onload = function () {
			var Tel=document.getElementById('tel');
			var Email=document.getElementById('email');
			var L1=document.getElementById('login1');
			var L2=document.getElementById('login2');
			var to_login=document.getElementById('to_login');
			var to_signout=document.getElementById('to_signout');
			var signin_page=document.getElementById('signin_page');
			var signout_page=document.getElementById('signout_page');
				
				// alert(Tel.nodeName);
				signin_page.style.display = "block";
				signout_page.style.display = "none";
				login1.style.display = "none";
	            login2.style.display = "block";

	        to_signout.onclick = function(){
	        	signout_page.style.display = "block";
	        	signin_page.style.display = "none";
	        }
	        to_login.onclick = function(){
	        	signout_page.style.display = "none";
	        	signin_page.style.display = "block";
	        }

			Tel.onclick = function () {
	            login1.style.display = "block";
	            login2.style.display = "none";
	            email.style.color = "#333";
	            if(email.style.color = "#333"){
	        		tel.style.color = "#e31436";
		        }
		        else if (email.style.color = "#333") {
		        	tel.style.color = "#e31436";
		        }
	        }
	        Email.onclick = function () {
	            login1.style.display = "none";
	            login2.style.display = "block";
	            tel.style.color = "#333";
	            if(email.style.color = "#e31436"){
	        		tel.style.color = "#333";
		        }
		        else if (email.style.color = "#333") {
		        	tel.style.color = "#e31436";
		        }
	        }

		}