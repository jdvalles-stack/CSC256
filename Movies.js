   // create an empty array to hold the list of movies
        let arrMovies = [];

        // this function will take input from the user and add it to the div
        function addMovie(){
            // this is the shortcut/nickname or trailing spaces
            let txtMovie = document.getElementById("txtMovie");
            // get the movie name, removeing any leading or trailing spaces
            let movieName = txtMovie.value.trim();

            // check to see if the movie name is empty
            if (movieName !=""){
                // since the user entered in sometnhing, add it to the end of the array using .push
                arrMovies.push(movieName);
                // clear out the textbox so the user can easily add another movie
                txtMovie.value = "";
                // I am going to show the updated movie list now
                showMOvies();
            }
        }    

        // funtion to show the movies in the array in the div
        function showMOvies(){
            // shortcut/nickname for the movies div
            let divMovies = document.getElementById("divMovies");
            // sort the list of movies hereto make sure we always showing a sorted list
            arrMovies.sort();
            // convert the array of movies into a string using join, they will separetd by an HTML line break - br
            divMovies.innerHTML = arrMovies.join("<BR>");
        }

            // funtion to erase the movies and update the div with the empty movie list
            function resetMovielist(){
                // rest the array by setting it equal to [] empty brackets
                arrMovies = [];

                // reload the movie div
                showMovies()
            }