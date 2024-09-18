// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Collect the uploaded image file
    const profileImageFile = (document.getElementById('profile-image') as HTMLInputElement).files?.[0];

    // Check if an image is uploaded
    if (profileImageFile) {
        // Create a FileReader to read the image
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target?.result as string;

            // Generate the resume content dynamically, including the image
            const resumeHTML = `
                <div style="display: flex; align-items: center;">
                    <div style="flex-shrink: 0;">
                        <img src="${imageUrl}" alt="Profile Picture" style="width: 150px; height: 150px; object-fit: cover; border-radius: 50%;">
                    </div>
                    <div style="margin-left: 20px;">
                        <h2><b>Resume</b></h2>
                        <h3>Personal Information</h3>
                        <p><b>Name:</b> ${name}</p>
                        <p><b>Email:</b> ${email}</p>
                        <p><b>Phone:</b> ${phone}</p>
                        <p><b>Address:</b> ${address}</p>
                    </div>
                </div>
                
                <h3>Education</h3>
                <p><b>Education:</b> ${education}</p>
               

                <h3>Skills</h3>
                <p><b>Skills:</b> ${skills}</p>

                <h3>Experience</h3>
                <p><b>Experience:</b> ${experience}</p>
            `;

            // Display the generated resume
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {
                console.error("Cannot display resume.");
            }
        };

        // Read the image file as a data URL
        reader.readAsDataURL(profileImageFile);
    } else {
        console.error("No image uploaded.");
    }
});
