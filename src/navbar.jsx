import React , {Component} from 'react'
import { Link } from 'react-router-dom';
import img5 from '../src/image/profile.png'


class Navbar extends Component {
    state={
        mycartLength : 0 
    }
    display_search_button =()=>{
        //custimiztion on bootstrap to hide and show searchbar 
       var x = document.getElementsByClassName("navbar-toggler")[0].className
       x = x.split( " " )
       if( !(x[1] === undefined))document.getElementsByClassName("flex_element")[1].style.display="none"
       else document.getElementsByClassName("flex_element")[1].style.display="block"
    }

     render(){
        return(
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="#">Ecommerce Fady</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home/">Home</Link></li>
                            {this.props.user.isconnected ===false &&<li className="nav-item"><Link className="nav-link active" aria-current="page" to="/login">Login</Link></li>}
                            {this.props.user.isconnected ===false &&<li className="nav-item"><Link className="nav-link active" aria-current="page" to="/signup">Sign up</Link></li>}
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/contactus">Contact us</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className='dorpdown-container'>
                                        <div className='dropdown-left'>
                                                <h5>electronics</h5>
                                                <ul>
                                                    <li><Link className="dropdown-item" to="/home/mobile/1">mobiles</Link></li>
                                                    <li><Link className="dropdown-item" to="/home/labtop/1">laptop</Link></li>
                                                    <li><Link className="dropdown-item" to="/home/smartwatch/1">smart watch</Link></li>
                                                </ul>
                                        </div>
                                        <div className='dropdown-right'>
                                                <h5>fashion</h5>
                                                <ul>
                                                    <li><Link className="dropdown-item" to="/home/dress/1">dress</Link></li>
                                                    <li><Link className="dropdown-item" to="/home/t-shirt/1">t-shirt</Link></li>
                                                    <li><Link className="dropdown-item" to="/home/makeup/1">make up</Link></li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex nav_form">
                            <input className="form-control me-2 search_nav" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success search_button_nav" type="submit"><i className="fab fa-searchengin"></i></button>
                        </form>
                        {this.props.user.isconnected ===true && <Link to={`/porfile/${this.props.user.id}`} className="container nav-link-details">
                            <div className="avatarIcon"><img src={img5} alt='avatar'></img></div>
                            <div className="profileDetails"><div className='profileUsername'>{this.props.user.fname} {this.props.user.lname}</div> <div>{this.props.user.email}</div> </div></Link>}
                </div>
              </div>
            </nav>
           
            <div>
                    {this.props.mycart.length !== 0 &&<Link to={`/porfile/${this.props.user.id}`}>
                    <button type="button" className="btn btn-primary  cart_button">
                        <i className="fas fa-cart-plus"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">  
                                {this.props.mycart}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                    </button></Link>}
            </div>
                
        </React.Fragment>)
    }
}

export default Navbar
