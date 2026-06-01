 // we will use this funciton to organize the code for adding our linfo to the HTML
        function loadInfo() {
            // this allows us to change the content of our HTML element - textContent is the best option to use from a performance perspective
        document.getElementById("divMajor").textContent="Major: Digital Marketing";
        // set the email
        document.getElementById("divEmail").textContent = "Email: jvalles92807@uat.edu"
        // set the grad date
        document.getElementById("divGradDate").textContent = "Expected Graduation Date: December 2026"
        }