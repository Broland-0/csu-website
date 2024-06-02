function openSignupForm() {
    const formHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Newsletter Signup</title>
            <link rel="stylesheet" href="css/styles_form.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
            <script>
                function welcomeMessage() {
                    alert("Welcome to Remote Health - Newsletter Signup");
                }
            </script>
        </head>

        <body onload="welcomeMessage()">
            <h1>Remote Health - Newsletter Signup</h1>
            <form id="signupForm" action="http://csusap.csu.edu.au/cgi-bin/echo_form" method="post">
                <label for="firstName">First Name (required):</label>
                <input type="text" id="firstName" name="firstName" maxlength="60" required><br>
                <label for="lastName">Last Name (required):</label>
                <input type="text" id="lastName" name="lastName" maxlength="60" required><br>
                <label for="email">Email Address (required):</label>
                <input type="email" id="email" name="email" maxlength="60" required><br>

                <fieldset>
                    <legend>Age Range:</legend>
                    <input type="radio" id="age15-25" name="age" value="15-25" required>
                    <label for="age15-25">15-25</label><br>
                    <input type="radio" id="age26-35" name="age" value="26-35">
                    <label for="age26-35">26-35</label><br>
                    <input type="radio" id="age36-45" name="age" value="36-45">
                    <label for="age36-45">36-45</label><br>
                    <input type="radio" id="age46-55" name="age" value="46-55">
                    <label for="age46-55">46-55</label><br>
                    <input type="radio" id="age55plus" name="age" value="55+">
                    <label for="age55plus">55+</label><br>
                </fieldset>

                <fieldset>
                    <legend>Areas of Interest:</legend>
                    <input type="checkbox" id="droneTech" name="interest" value="Drone Technology">
                    <label for="droneTech">Drone Technology</label><br>
                    <input type="checkbox" id="healthcare" name="interest" value="Healthcare">
                    <label for="healthcare">Healthcare</label><br>
                    <input type="checkbox" id="research" name="interest" value="Research and Development">
                    <label for="research">Research and Development</label><br>
                    <input type="checkbox" id="training" name="interest" value="Training Programs">
                    <label for="training">Training Programs</label><br>
                    <input type="checkbox" id="support" name="interest" value="Customer Support">
                    <label for="support">Customer Support</label><br>
                </fieldset>

                <label for="comments">Comments:</label><br>
                <textarea id="comments" name="comments" cols="60" rows="3"></textarea><br>
                <input type="submit" value="Submit">
                <input type="reset" value="Reset">
            </form>
        </body>
        </html>
    `;
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(formHtml);
    newWindow.document.close();
}