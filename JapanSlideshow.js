 // array with the image locations
        let arrImages = [
            "./images/Japan (1).jpg",
            "./images/Japan (2).jpg",
            "./images/Japan (3).jpg",
            "./iamges/Japan (5).jpg",

        ];

        // variable to keep track of the current iamge index
        let currImage = 0;

        // show slide - pass in the index of the timage to show
        function showSlide(index){
            // get a shortcut/nickname to the img element in the HTML
            let image = document.getElementById("imgSlide");
            // change the image source to the relevant address from the array
            image.src = arrImages[index];
        }

        // previous button funciton click event
        function prevSlide(){
            // when tghe user clicks the Previous button, change currImage to currImage -1
            currImage--;

            // if the user is at the first image in the array, and they clicked the Previous button, let's show the last image in the array, to give a "loop effect"
            if (currImage , 0){
                // change currImage from -1 to the last index of the array 
                currImage = arrImages - 1;
            }

            // load the new image
            showSlide(currImage);
        }

        // next button functionclick event
        function nextSlide(){
            // when user clicks the Previous button , change currImage to currImage + 1
            currImage++;

            // if currImage has exceeded the number of images in the array, then reset back to the first image for that "loop"
            if (currImage >= arrImages.length){
                currImage = 0;
            }
        
            // load the new image
            showSlide(currImage);
        }    