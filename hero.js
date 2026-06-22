   function saveInfo() {
            // create the shortcut/nickname for the HTML elements
            let txtUserName = document.getElementById("txtUserName");
            let txtSkill = document.getElementById("txtSkill");
            let numHealth = document.getElementById("numHealth");
            let numPoints = document.getElementById("numPoints");

            // build the string with the titles and the user's inputs
           let output = "User Name:" + txtUserName.value + "\n\n" + 
               "Special Skill:" + txtSkill.value + "\n\n" + 
               "Health:" + numHealth.value + "\n\n" + 
               "Point Total:" + numPoints.value;
           
            //    add the output to the textarea
            document.getElementById("txtHero").value = output;

            // clear the input fields
            txtUserName.value = "";
            txtSkill.value = "";
            numHealth.value = "";
            numPoints.value = "";
            
        }