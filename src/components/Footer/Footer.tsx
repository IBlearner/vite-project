import "./Footer.scss";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div id="footer">
            <div className="socialmedia">
                <BsFacebook />
            </div>

            <div className="socialmedia">
                <BsLinkedin />
            </div>

            <div className="socialmedia">
                <BsInstagram />
            </div>
        </div>
    );
};

export default Footer;
