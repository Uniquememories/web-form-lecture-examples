window.addEventListener('load', function() {
    // let's get our form element
    const formElement = document.getElementById('theForm');
    // console.log(formElement);
    formElement.addEventListener('submit', function(event) {
        // console.log(event);

        // what do we need to validate?
        // username?
        // password?
        // radio buttons?
        // check boxes?
        // it's up to us

        // let's start with a variable and update it if anything is invalid
        let formIsValid = true;

        // let's create a string tracking the form submission faux pas' -- we will display this if we detect any validation issues
        let validationIssues = "";

        // let's make sure the username isn't blank:
        const usernameInput = document.getElementById('username');
        // console.log(usernameInput);
        // console.log(usernameInput.value.length);
        if(usernameInput.value.length === 0) {
            // username is empty
            formIsValid = false;
            if(validationIssues !== "") {
                validationIssues += "\n";
            }
            validationIssues += "username must not be empty!";
        }

        // let's make sure the password matches our expectations
        // password is at least 10 characters
        const passwordInput = document.getElementById('password');
        // console.log(passwordInput);
        if(passwordInput.value.length < 10) {
            formIsValid = false;
            if(validationIssues !== "") {
                validationIssues += "\n";
            }
            validationIssues += "password is not long enough";
        }

        // let's make sure they selected a highlander!
        // let's get all the highlander elements as a NodeList:
        const highlanders = document.querySelectorAll('.highlander');
        let highlanderSelected = false;

        // let's loop through all of the highlanderElements in our NodeList:
        for(const highlanderElement of highlanders) {
            // if any of them have been selected change our boolean to true, because the highlander has been selected
            if(highlanderElement.checked) {
                highlanderSelected = true;
            }
        }

        // we could have done the following with one line if we were cheeky:
        // const selectedHighlander = Array.from(highlanders).filter((highlanderElement) => highlanderElement.checked);
        // console.log(selectedHighlander) -- then we could have just checked if this resulting array had exactly 1 element or not -- but that's completely unnecessary

        // if the highlander was not selected let's update our validation:
        if(!highlanderSelected) {
            formIsValid = false;
            if(validationIssues !== "") {
                validationIssues += "\n";
            }
            validationIssues += "YOU MUST SELECT A HIGHLANDER (paul recommends paul)";
        }

        // let's stop the form from submitting (if the form is not valid):
        if(!formIsValid) {
            event.preventDefault();
        }

        // let's add our validation error string to our validation error p tag:
        const validationErrorParagraph = document.getElementById('validationError');
        validationErrorParagraph.style.color = "red";
        validationErrorParagraph.innerText = validationIssues;
    })
    
});