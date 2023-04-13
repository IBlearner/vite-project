import "./Footer.scss";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div id="footer">
            <a
                className="socialmedia"
                href="https://www.facebook.com/people/Tinh-Tony-Lam/pfbid0Dt8WpfZAXRTfwUfNKVdZiv7DMkWTysUeWG2H7wKeNVHr1FrAJZLmH1wMJkbkWToel/"
                target="_blank"
            >
                <BsFacebook />
            </a>

            <a className="socialmedia">
                <BsLinkedin />
            </a>

            <a className="socialmedia">
                <BsInstagram />
            </a>
        </div>
    );
};

export default Footer;
