import React, { Component } from "react"
import {Route ,Redirect,Switch} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Mobile from "./mobile";
import Smartwatch from "./smartwatch";
import ProductDetails from "./productdetails";
import Laptop from "./labtop";
import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import Errorpage from "./errorpage";
import Footer from "./footer";
import Contactus from "./contactus";

class App extends Component {
  state={
      mobiles:[] , 
      labtop : [],
      smartwatch:[],
      noMobilespage:[], 
      noLabtoppage:[], 
      noSmartwatchpage:[], 
      cartlength:0,
      user : {
            id: null , 
            fname : null , 
            lname : null , 
            email : null ,
            isconnected : false , 
            cart : []
          }
}

async componentDidMount(){
  var myarr1 = [] 
  var myarr2 = []
  var myarr3 = []
  var {data} = await axios.get("http://localhost:3000/product")
      for(let i=1 ; i<= Math.ceil(  data.mobiles.length /8 )  ;i++){myarr1.push(i)}
      for(let i=1 ; i<= Math.ceil(  data.labtop.length /8 )  ;i++) {myarr2.push(i)}
      for(let i=1 ; i<= Math.ceil(  data.smartwatch.length /8 )  ;i++){myarr3.push(i)}
  this.setState({mobiles:data.mobiles ,
                 labtop :data.labtop , 
                 smartwatch:data.smartwatch ,
                 noMobilespage:myarr1,
                 noLabtoppage:myarr2,
                 noSmartwatchpage:myarr3})
  }
isconnectedfu = (Id , fname , lname , email , cart)=>{
        var state = {...this.state}
        state.user.id = Id ;
        state.user.fname = fname ;
        state.user.lname = lname ;
        state.user.email = email ;
        state.user.cart = cart ;
        state.cartlength = cart.length
        state.user.isconnected = true
        this.setState(state)
}
disconnectedfu = ()=>{
        var state = {...this.state}
        state.user.id = null 
        state.user.fname = null
        state.user.lname = null
        state.user.email = null
        state.user.isconnected = false
        state.user.cart =[]
        state.cartlength = 0
        this.setState(state)
}
cartlengthfun = (clength)=>{
         this.setState({cartlength : clength})
}
addcart = async(e)=>{
        var {data}= await axios.get(`http://localhost:3000/user/${+this.state.user.id}`) 
        var usercart = data.cart
        var isexist = false
        var state = {...this.state}     
        if(usercart.length === 0){
          usercart.push(e)
          axios.patch(`http://localhost:3000/user/${this.state.user.id}` , { cart : usercart})
          state.user.cart = usercart
          state.cartlength =  usercart.length
          this.setState(state)
        }
        else{
          for(let i = 0 ; i<usercart.length ; i++){
            if(usercart[i].id === e.id){
              isexist = true}}
          if(!isexist){
            usercart.push(e)
            axios.patch(`http://localhost:3000/user/${this.state.user.id}` , { cart : usercart})
            state.user.cart = usercart 
            state.cartlength =  usercart.length
            this.setState(state)}}
}
render(){
  return(
    <React.Fragment>
      <Navbar mycart={this.state.cartlength} user={this.state.user}/>
      <Switch>
            <Route path="/home" exact render={props=><Home mobiles = {this.state.mobiles}
                                                           laptop = {this.state.labtop}
                                                           smartwatch = {this.state.smartwatch}
                                                           cartfu = {this.addcart}
                                                           user   = {this.state.user} {...props}/>}></Route>
            <Route path="/home/mobile/:id?" render={props=><Mobile mobiles = {this.state.mobiles}
                                                                   noMobilespage={this.state.noMobilespage} 
                                                                   cartfu = {this.addcart}
                                                                   user   = {this.state.user}{...props}/>}></Route>
            <Route path="/home/labtop/:id?" render={props=><Laptop laptop = {this.state.labtop} 
                                                                   noLabtoppage={this.state.noLabtoppage} 
                                                                   cartfu = {this.addcart}
                                                                   user   = {this.state.user}{...props}/>}></Route>
            <Route path="/home/smartwatch/:id?" render={props=><Smartwatch smartwatch = {this.state.smartwatch}
                                                                           noSmartwatchpage={this.state.noSmartwatchpage}
                                                                           cartfu = {this.addcart}
                                                                           user   = {this.state.user} {...props}/>}></Route>
            <Route path="/login" render={(props)=><Login isconnected = {this.isconnectedfu}{...props}/>}></Route>
            <Route path="/signup" render={props=><Signup isconnected = {this.isconnectedfu}{...props}/>}></Route>
            <Route path="/productdetails/:name/:id?" render={props=><ProductDetails products={this.state} 
                                                                                    cartfu = {this.addcart}{...props}/>}></Route>
            <Route path="/porfile/:id?" render={(props)=><Profile disconnectedfu = {this.disconnectedfu}
                                                                  user={this.state.user}
                                                                  cartlengthfun = {this.cartlengthfun}{...props}/>}></Route>
            <Route path="/contactus" component={Contactus}></Route>
            <Route path="/Fady.A.malak7/" component={()=>{window.location.href = "https://www.facebook.com/Fady.A.malak7/" }}></Route>
            <Route path="/fady_allah" component={()=>{window.location.href = "https://twitter.com/fady_allah" }}></Route>
            <Route path="/Fady.A.malak7/" component={()=>{window.location.href = "https://www.facebook.com/Fady.A.malak7/" }}></Route>
            <Route path="/error" component={Errorpage}></Route>
            <Redirect to="/error"></Redirect>
      </Switch>
    <Footer />
    </React.Fragment>)}}
export default App;