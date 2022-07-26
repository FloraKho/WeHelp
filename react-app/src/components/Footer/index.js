import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="teams">
                <div className="jingjing">
                    <h2>Jingjing Xu</h2>
                    <div><a href="https://github.com/FloraKho">GitHub</a></div>
                    <div><a href="https://www.linkedin.com/in/jingjingxu-flora/">LinkedIn</a></div>
                </div>
                <div className="rena">
                    <h2>Rena Lin</h2>
                    <div><a href="https://github.com/ZhiqiLinn">GitHub</a></div>
                    <div><a href="https://www.linkedin.com/in/zhiqi-linn/">LinkedIn</a></div>
                </div>
                <div className="jiaqi">
                    <h2>Jiaqi Cheng</h2>
                    <div><a href='https://github.com/jiaqicheng1998'>GitHub</a></div>
                    <div><a href='https://www.linkedin.com/in/jiaqi-cheng/'>LinkedIn</a></div>
                </div>
                <div className="Tianyi">
                    <h2>Tianyi Shao</h2>
                    <div><a href="https://github.com/tshao42">GitHub</a></div>
                    <div><a href="https://www.linkedin.com/in/tianyishao42/">LinkedIn</a></div>
                </div>
            </div>
            <div className="copyright">Copyright @ WeHelp Team, Yelp, and App Academy</div>
        </div>
    )
}

export default Footer;