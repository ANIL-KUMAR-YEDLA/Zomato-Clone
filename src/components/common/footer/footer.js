import "./footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-section">
                <div className="first">
                    <div>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" className="footer-logo" />
                    </div>
                    <div className="first-1">
                        <div>
                            <span>INDIA</span>
                        </div>
                        <div>
                            <span>ENGLISH</span>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div>
                        <h4>ABOUT ZOMATO</h4>
                        <a href="https://www.google.com/">Who we are</a>
                        <a href="https://www.google.com/">Blog</a>
                        <a href="https://www.google.com/">Careers</a>
                        <a href="https://www.google.com/">Report Fraud</a>
                        <a href="https://www.google.com/">Contacts</a>
                        <a href="https://www.google.com/">Investors Relations</a>
                    </div>
                    <div>
                        <h4>FOR FOODIES</h4>
                        <a href="https://www.google.com/">Code of Conduct</a>
                        <a href="https://www.google.com/">Community</a>
                        <a href="https://www.google.com/">Blogger Help</a>
                        <a href="https://www.google.com/">Mobile App</a>
                    </div>
                    <div>
                        <h4>FOR RESTAURANTS</h4>
                        <a href="https://www.google.com/">Add Restaurants</a>
                        <h4>FOR ENTERPRISES</h4>
                        <a href="https://www.google.com/">Zomato For Work</a>
                    </div>
                    <div>
                        <h4>FOR YOU</h4>
                        <a href="https://www.google.com/">Privacy</a>
                        <a href="https://www.google.com/">Terms</a>
                        <a href="https://www.google.com/">Secuity</a>
                        <a href="https://www.google.com/">Sitemap</a>
                    </div>
                    <div className="box-4">
                        <h4>SOCIAL LINKS</h4>
                        <div>
                        <i className="fi fi-brands-linkedin"></i> 
                        <i className="fi fi-brands-facebook"></i>
                        <i className="fi fi-brands-twitter-alt-square"></i>
                        <i class="fi fi-brands-youtube"></i>
                        <i className="fi fi-brands-instagram"></i>
                        </div>
                        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app-store" />
                        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="google-play" />
                    </div>
                </div>
                <hr></hr>
                <p className="third">&copy; By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Anil™ Ltd. All rights reserved.</p>
            </div>
        </section>
     );
}
 
export default Footer;