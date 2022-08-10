import axios from "axios";
import React , {Component} from "react";
import img5 from '../src/image/profile.png'

class Profile extends Component{
    constructor(props){
        super(props);
    this.state = {
        fname: this.props.user.fname , 
        lname: this.props.user.lname , 
        email:this.props.user.email , 
        id : this.props.user.id , 
        cart : this.props.user.cart
    }
}
signout = ()=>{
    var userId = this.props.match.params.id
    axios.patch(`http://localhost:3000/user/${userId}` , {online : false})
    this.props.history.replace('/home')
    this.props.disconnectedfu()
}
removeproduct = (product)=>{
    var deleteid = product.id
    var cart = this.state.cart
    var users = this.state
    cart = cart.filter(pro=>pro.id !== deleteid)
    users.cart = cart
    axios.patch(`http://localhost:3000/user/${this.props.match.params.id}` , {cart})
    this.setState(users)
    this.cartlengthfun(users.cart.length)
}
cartlengthfun = (clength)=>{
    this.props.cartlengthfun(clength)
}
amount = (eachProduct)=>{
   var amount =  eachProduct.amount  // 6
   var myarr = []
   for(let i = 1 ; i<=amount ; i++){
    if(i !==eachProduct.quant){
        myarr.push(i) 
    } 
}
return myarr.map(am=><option key={am}>{am}</option>)
}
editProduct = (eachProduct)=>{
   var quant = document.getElementsByClassName(eachProduct.id)[0].value
   var cart = this.state.cart
   cart.map(cart => {if(cart.id === eachProduct.id) {
                        cart.quant = +quant}
                        return cart})
   axios.patch(`http://localhost:3000/user/${this.props.match.params.id}` , {cart})
}
render (){   
    var emptypage = this.state.cart.length>0?false:true
    var emailValue= this.state.email
    return(
    <React.Fragment>
        <div className="profile">
        {emailValue === null && this.props.history.replace('/home')}
        <div className="card" style={{'width': '18rem'}}>
            <div className="card-body">
            <image className="card-img-top" src={img5} alt="Card image cap"/>
                <h5 className="card-title">{this.state.fname}</h5>
                <p className="card-text">{this.state.email}</p>
                <button onClick={this.signout} className="btn btn-danger">Sign out</button>
            </div>
        </div>
        {emptypage && <div className="alert"><h1>Cart is Empty</h1><p>go back to home page and start your shoping ^ ^</p></div> }
        {!emptypage &&  <div className="container flex_card_container profileCarts">
           <ul>
                   {this.state.cart.map(eachProduct=> {
                       return (
                           <li className="card flex_card_element profileProduct" key={eachProduct.id} >
                            <div className="card-body ">
                                <div className="productImg"><img src={eachProduct.imgurl} className="card-img-top" alt={eachProduct.productname} /></div>
                               <div className="productDetails"> 
                               <h2 className="card-title">{eachProduct.productname}
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></h2>
                                  <div className="d-flex delete_amount">
                                    <button className="btn btn-primary" id={eachProduct.id} onClick={()=>this.removeproduct(eachProduct)}>
                                        X | Delete
                                        </button>
                                        <select key={eachProduct.id} defaultValue={null} className={eachProduct.id}>
                                            <option selected defaultValue={eachProduct.quant} key={eachProduct.quant}>{eachProduct.quant}</option>
                                            {this.amount(eachProduct) }
                                        </select>
                                        <button onClick={()=>this.editProduct(eachProduct)} className="editbutton">Edit</button>
                                  </div>
                                </div>
                            </div>
                            </li>)})}
                </ul>
        </div>}
    </div>
    </React.Fragment>
    )
}
}
export default Profile