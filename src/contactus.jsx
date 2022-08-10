import React, { Component } from 'react'
class Contactus extends Component {
state={}
render(){
    return(<React.Fragment> 
        <div className="container d-flex contactUsContainer">
            <div className="contactusflex">
                
                <form>
                <h1>Write Us</h1>
                <label htmlFor="name">Name <span style={{color:"red"}}>*</span></label>
                <input type="text" className="form-control" id="name"  placeholder="Enter you name please" />

                <label htmlFor="email">Email <span style={{color:"red"}}>*</span></label>
                <input type="email" className="form-control" id="email"  placeholder="Enter your email please" />

                <label htmlFor="phone">Phone Number </label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your telephone " />
                <label htmlFor="phone">Leaave Us Your message</label>
                <textarea className="form-control textArea" id="opinion" rows="9"></textarea>
                <button className="btn btn-primary submitButton">Submit</button>
                </form>
            </div>
          
            <div className="contactusflex">
                <h1>Contact <span className="details">Details</span></h1>
                <ul >
                    <li className="listContact d-flex">
                        <div className="left-side"><i class="fas fa-phone-square-alt"></i></div>
                        <div className="right-side"><div>Call Me : </div><div>01203109016</div></div>
                    </li>
                    <li className="listContact d-flex">
                        <div className="left-side"><i class="fas fa-envelope-square"></i></div>
                        <div className="right-side"><div>Email : </div><div>fady.madread7@yahoo.com</div></div>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
          </React.Fragment>)}
}
export default Contactus