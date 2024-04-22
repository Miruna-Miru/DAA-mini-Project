document.addEventListener("DOMContentLoaded", function() {
    let darkMode = localStorage.getItem("darkMode");
    const dMToggle = document.querySelector("#mn");

    const enableDM = () => {
        document.body.classList.add('darkMode');
        localStorage.setItem('darkMode', 'enabled');
    };

    const disEnableDM = () => {
        document.body.classList.remove('darkMode');
        localStorage.setItem('darkMode', null);
    };

    dMToggle.addEventListener("click", () => {
        if (darkMode !== 'enabled') {
            enableDM();
            document.getElementById('mn').setAttribute('src','assets/sun.png');
        
            document.getElementById('wel').setAttribute('color','white');

            document.getElementById('hm').setAttribute('color','white')
            darkMode = 'enabled'; // Update darkMode variable
        } else {
            disEnableDM();
            document.getElementById('mn').setAttribute('src','assets/moon.png');
            darkMode = null; // Update darkMode variable
        }
    });

    // Set initial dark mode state based on localStorage
    if (darkMode === 'enabled') {
        enableDM();
    }


    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Get the department name from the clicked card's ID
            const department = card.id;
            // Construct the URL for the respective department HTML page
            const url = `${department}.html`;
            // Navigate to the URL
            navigate(url);
        });
    });

    // Function to navigate to a specific URL
    function navigate(url) {
        window.location.href = url;
    }
});
