// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Collect the uploaded image file
    var profileImageFile = (_a = document.getElementById('profile-image').files) === null || _a === void 0 ? void 0 : _a[0];
    // Check if an image is uploaded
    if (profileImageFile) {
        // Create a FileReader to read the image
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Generate the resume content dynamically, including the image
            var resumeHTML = "\n                <div style=\"display: flex; align-items: center;\">\n                    <div style=\"flex-shrink: 0;\">\n                        <img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; object-fit: cover; border-radius: 50%;\">\n                    </div>\n                    <div style=\"margin-left: 20px;\">\n                        <h2><b>Resume</b></h2>\n                        <h3>Personal Information</h3>\n                        <p><b>Name:</b> ").concat(name, "</p>\n                        <p><b>Email:</b> ").concat(email, "</p>\n                        <p><b>Phone:</b> ").concat(phone, "</p>\n                        <p><b>Address:</b> ").concat(address, "</p>\n                    </div>\n                </div>\n                \n                <h3>Education</h3>\n                <p><b>Education:</b> ").concat(education, "</p>\n               \n\n                <h3>Skills</h3>\n                <p><b>Skills:</b> ").concat(skills, "</p>\n\n                <h3>Experience</h3>\n                <p><b>Experience:</b> ").concat(experience, "</p>\n            ");
            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
            else {
                console.error("Cannot display resume.");
            }
        };
        // Read the image file as a data URL
        reader.readAsDataURL(profileImageFile);
    }
    else {
        console.error("No image uploaded.");
    }
});
