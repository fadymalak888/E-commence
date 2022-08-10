import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render() { 
        return <React.Fragment>
           <div className="footer">
           <div className="flex-container-list">
                <div className="flex-item">
                    <ul>
                      <li>electronics</li>
                      <li><Link to="/home/mobile/1">mobiles</Link></li>
                      <li><Link to="/home/labtop/1">laptops</Link></li>
                      <li><Link to="/home/smartwatch/1">smart watches</Link></li>
                      <li><Link to="/home/smartwatch/1">headphones</Link></li>
                      <li><Link to="/home/smartwatch/1">video games</Link></li>
                   </ul>
                </div>
            <div className="flex-item">
                    <ul>
                      <li>fashion</li>
                      <li><Link to="/home/smartwatch/1">women's fashion</Link></li>
                      <li><Link to="/home/smartwatch/1">men's fashion</Link></li>
                      <li><Link to="/home/smartwatch/1">girls' fashion</Link></li>
                      <li><Link to="/home/smartwatch/1">boys' fashion</Link></li>
                   </ul>
                </div>
                <div className="flex-item">
                    <ul>
                      <li> home and kitchen</li>
                      <li> <Link to="/home/smartwatch/1">kitchen & dining</Link></li>
                      <li> <Link to="/home/smartwatch/1">bedding</Link></li>
                      <li> <Link to="/home/smartwatch/1">bath</Link></li>
                      <li> <Link to="/home/smartwatch/1">home decor</Link></li>
                   </ul>
                </div>
                <div className="flex-item">
                    <ul>
                      <li>beauty</li>
                      <li><Link to="/home/smartwatch/1">women's fragrance</Link></li>
                      <li><Link to="/home/smartwatch/1">men's fragrance</Link></li>
                      <li><Link to="/home/smartwatch/1">make-up</Link></li>
                      <li><Link to="/home/smartwatch/1">haircare</Link></li>
                   </ul>
                </div>
            </div>
                <div className="flex-container-cu container">
                    <div  className="flex-item-cu"><Link to="/Fady.A.malak7/"><i className="fab fa-facebook-f"></i></Link></div>
                    <div  className="flex-item-cu"><Link to="/fady_allah"><i className="fab fa-twitter"></i></Link></div>
                    <div  className="flex-item-cu"><Link to="/fady_allah"><i className="fab fa-whatsapp"></i></Link></div>
            </div>
            <div className="copyright"> <span>&copy;</span>2021&nbsp;&nbsp;&nbsp;F&nbsp;&nbsp;a&nbsp;&nbsp;d&nbsp;&nbsp;y</div>
           </div>
        </React.Fragment>;
    }
}
export default Footer;