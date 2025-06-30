//Javascript Document (Form.js)
	    
function validateForm() 
        {
          let x = document.forms["Form"]["fname"].value;
          let x = document.forms["Form"]["lname"].value;
          let x = document.forms["Form"]["cnumber"].value;
          let x = document.forms["Form"]["eadd"].value;

          if (x == "") {
            alert("First name must be filled up!");
            return false;
          }

          if (x == "") {
            alert("Last name must be filled up!");
            return false;
          }

          if (x == "") {
            alert("Contact number must be filled up!");
            return false;
          }

          if (x == "") {
            alert("Email address must be filled up!");
            return false;
          }

          if (cnumber.value.length != 10) {
            alert("Please Enter Valid Contact Number, only 10 digit.");
            return false;
          }

          if(eadd.indexOf("@") != -1) {
            alert("Please Enter Valid Contact Number");
            return false;
          }
		}