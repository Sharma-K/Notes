import react from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return (
        <footer>
       <p>CopyRight &copy; {currentYear}</p>
       </footer>
    )
}

export default Footer;