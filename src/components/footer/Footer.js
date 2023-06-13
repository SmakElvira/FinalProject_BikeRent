import logo from "../../img/bike.png";

function Footer () {
    return (
        <footer className="footer nav">
                <div className="container">
                    <div className="nav-row footer_nav">
                        <div className="img-bike">
                            <img src={logo} alt="logo-bike" className="img-bike" />
                        </div>
                        <div className="footer-text adress">
                            <p>Adress: <br />somewhere in the world</p>
                        </div>
                        <div className="footer-text copyright">
                            <p>@smakelvira, 2023</p>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;