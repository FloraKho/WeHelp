import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="teams">
                <div className="jingjing">
                    <h2>Jingjing Xu</h2>
                    <div><a target="_blank" href="https://github.com/FloraKho"><i class="fa-brands fa-github"></i> GitHub</a></div>
                    <div><a target="_blank" href="https://www.linkedin.com/in/jingjingxu-flora/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></div>
                </div>
                <div className="rena">
                    <h2>Rena Lin</h2>
                    <div><a target="_blank" href="https://github.com/ZhiqiLinn"><i class="fa-brands fa-github"></i> GitHub</a></div>
                    <div><a target="_blank" href="https://www.linkedin.com/in/zhiqi-linn/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></div>
                </div>
                <div className="jiaqi">
                    <h2>Jiaqi Cheng</h2>
                    <div><a target="_blank" href='https://github.com/jiaqicheng1998'><i class="fa-brands fa-github"></i> GitHub</a></div>
                    <div><a target="_blank" href='https://www.linkedin.com/in/jiaqi-cheng/'><i class="fa-brands fa-linkedin"></i> LinkedIn</a></div>
                </div>
                <div className="Tianyi">
                    <h2>Tianyi Shao</h2>
                    <div><a target="_blank" href="https://github.com/tshao42"><i class="fa-brands fa-github"></i> GitHub</a></div>
                    <div><a target="_blank" href="https://www.linkedin.com/in/tianyishao42/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></div>
                </div>
            </div>
            <div className="copyright">Copyright @ WeHelp Team, Yelp, and App Academy</div>
        </div>
    )
}

export default Footer;