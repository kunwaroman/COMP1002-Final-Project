const header=document.querySelector(".header");
const footer= document.querySelector(".footer");

header.innerHTML = `
<!-- Navigation bar -->
<nav>
    <ul>
        <li>
            <div class="logo-container">
                <img src="images/logo.jpeg" alt="Sony Logo">
                <div class="logo-text">
                    <p><strong>Sony Walkman</strong></p>
                    <p class="slogan">
                        Music Unleashed: Sony Walkman, Your Rhythm Companion.
                    </p>
                </div>
            </div>
        </li>

        <li> <a href="#">Home</a></li>
        <li> <a href="#">About Us</a></li>
        <li> <a href="#">Product </a> </li>
        <li> <a href="#">Contact Us </a> </li>

    </ul>
</nav>
`;

footer.innerHTML=  `
<p>&copy; 2024 Walkman. All rights reserved.</p>
`;
