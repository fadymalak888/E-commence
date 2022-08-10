import axios from 'axios'
import React , {Component} from 'react'
 
class Login extends Component {
state={
    firstname : "not yet",
    lastname : "",
    email : "", 
    password : "",
    birthday : "" ,
    online : "", 
    cart: "" ,
    id :"",
    errors : {
        email : null , 
        password : null ,
        passwordlength:null ,
        emailvalid : null , 
        passwordvalid : null 
    }
}

handlerChange = (e)=>{
    // for input fields 
    var state = {...this.state}
    state[e.target.id] = e.target.value
    this.setState(state)
    //validation on cahnge
    var errors = {...this.state.errors}
    if(e.target.value ===""){
        errors[e.target.name] = true 
        this.setState({errors})
    }else{
        errors[e.target.name] = false 
        this.setState({errors})
    }
    if(e.target.name ==="password"){
        if(e.target.value.length <=5){
            errors["passwordlength"]=true
            this.setState({errors})
        }else{
            errors["passwordlength"]=false
            this.setState({errors})
        }
    } 
}
    validation = e=>{
        var errors = {...this.state.errors}
        if(e.target.value ===""){
            errors[e.target.name] = true 
            this.setState({errors})
        }else{
            errors[e.target.name] = false 
            this.setState({errors})          
        }        
    }
    

handlerSubmit = async(e)=>{
        e.preventDefault()
        var errors = {...this.state.errors} // object conatin errors
        if(this.state.errors.email === false && this.state.errors.password ===false && this.state.errors.passwordlength ===false ){
            var {data} = await axios.get("http://localhost:3000/user")
            var userId 
            var isexist = false
    for(let i = 0 ; i<data.length ; i++){
           if(this.state.email === data[i].email){ 
                       errors['emailvalid'] = true
                       this.setState({errors})
                   if(this.state.password === data[i].password){
                       //password is exist return 
                       errors['passwordvalid'] = true
                       userId = i+1
                       this.setState({firstname : data[i].firstname , lastname : data[i].lastname,cart : data[i].cart ,errors})
                       this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email,this.state.cart)
                       isexist = true
                       break ;
                   }else{
                      //password is not exsit
                      errors['passwordvalid'] = false
                      this.setState({errors})
                      break ;
                   }
           }else{
               //email is not exist
               errors['emailvalid'] = false
               this.setState({errors})
            }}
        if(isexist){
              axios.patch(`http://localhost:3000/user/${userId}`,{online : true})
              this.props.history.replace(`/porfile/${userId}`)
              this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email,this.state.cart)
        }}}
 
render(){
    return (
        <React.Fragment>
            <div className="container loginForm">
            <form onSubmit={this.handlerSubmit}>
                            <h1>Registered Customers</h1>
                            <h3>&nbsp;&nbsp; If you have an account, sign in with your email address&nbsp;.&nbsp;. </h3>
                            <div className="form-group col-md-10" id="form-email">
                                <label htmlFor="email">Email * </label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                                {this.state.errors.email === true &&<div className="alert alert-danger">cant be empty</div>}
                                {this.state.errors.emailvalid === false &&<div className="alert alert-danger">this email is invaild</div>}
                            </div>
                            <div className="form-group col-md-10">
                                <label htmlFor="password">password * </label>
                                <input type="password" name="password"className="form-control" id="password" placeholder="Password" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                                {this.state.errors.password === true &&<div className="alert alert-danger">cant be empty</div>}
                                {this.state.errors.passwordlength === true &&<div className="alert alert-danger">password cant be less than 5</div>}
                                {this.state.errors.passwordvalid === false &&<div className="alert alert-danger">password in valid</div>}
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="cheackbox"/>
                                <label className="form-check-label" htmlFor="cheackbox">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </React.Fragment>
    )
}
}

export default Login


/*

handlerSubmit = async(e)=>{
        e.preventDefault()
        var errors = {...this.state.errors} // object conatin errors
        if(this.state.errors.email === false && this.state.errors.password ===false && this.state.errors.passwordlength ===false ){
            console.log("submite")
            var {data} = await axios.get("http://localhost:3000/user")
            var users = {...this.state} //not set yet
            var userId 
            var isexist = false
    
    for(let i = 0 ; i<data.length ; i++){
        if(data[i].email === this.state.email){
            errors["emailinvalid"] = false
            console.log("vaidation email" , errors)
             if(data[i].password ===this.state.password){
                                                isexist = true 
                                                userId = i+1
                                                errors["passwordinvalid"] = false
                                                users = data[i]
                                                users.errors = errors
                                                this.setState(users)
                                            }
             else{isexist = false
                errors["passwordinvalid"] = true
                this.setState({errors})            
            }
        }else{errors["emailinvalid"] = true
        this.setState({errors})            
    }
    }
        if(isexist){
            console.log("login" , this.state.firstname , this.state.lastname)
              axios.patch(`http://localhost:3000/user/${userId}`,{online : true})
              this.props.history.replace(`/porfile/${userId}`)
              this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email)
            }
        else{
    
        }
}
 
    }
 
*/

/*
1/12/2021

import axios from 'axios'
import React , {Component} from 'react'
 
class Login extends Component {
state={
    firstname : "not yet",
    lastname : "",
    email : "", 
    password : "",
    birthday : "" ,
    online : "", 
    cart: "" ,
    id :"",
    errors : {
        email : null , 
        password : null ,
        passwordlength:null ,
        emailvalid : null , 
        passwordvalid : null 
    }
}

handlerChange = (e)=>{
    // for input fields 
    var state = {...this.state}
    state[e.target.id] = e.target.value
    this.setState(state)
    //validation on cahnge
    var errors = {...this.state.errors}
    if(e.target.value ===""){
        errors[e.target.name] = true 
        this.setState({errors})
    }else{
        errors[e.target.name] = false 
        this.setState({errors})
    }
    if(e.target.name ==="password"){
        if(e.target.value.length <=5){
            errors["passwordlength"]=true
            this.setState({errors})
        }else{
            errors["passwordlength"]=false
            this.setState({errors})
        }
    } 
}
    validation = e=>{
        var errors = {...this.state.errors}
        if(e.target.value ===""){
            errors[e.target.name] = true 
            this.setState({errors})
        }else{
            errors[e.target.name] = false 
            this.setState({errors})          
        }        
    }
    

handlerSubmit = async(e)=>{
        e.preventDefault()
        var errors = {...this.state.errors} // object conatin errors
        if(this.state.errors.email === false && this.state.errors.password ===false && this.state.errors.passwordlength ===false ){
            var {data} = await axios.get("http://localhost:3000/user")
            var userId 
            var isexist = false
    for(let i = 0 ; i<data.length ; i++){
           if(this.state.email === data[i].email){ 
                       errors['emailvalid'] = true
                       this.setState({errors})
                   if(this.state.password === data[i].password){
                       //password is exist return 
                       errors['passwordvalid'] = true
                       userId = i+1
                       this.setState({firstname : data[i].firstname , lastname : data[i].lastname,cart : data[i].cart ,errors})
                       isexist = true
                       break ;
                   }else{
                      //password is not exsit
                      errors['passwordvalid'] = false
                      this.setState({errors})
                      break ;
                   }
           }else{
               //email is not exist
               errors['emailvalid'] = false
               this.setState({errors})
            }}
        if(isexist){
              axios.patch(`http://localhost:3000/user/${userId}`,{online : true})
              this.props.history.replace(`/porfile/${userId}`)
              this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email,this.state.cart)
        }}}
 
render(){
    return (
        <React.Fragment>
            <div className="container">
            <form onSubmit={this.handlerSubmit}>
                            <h1>Registered Customers</h1>
                            <h3>&nbsp;&nbsp;If you have an account, sign in with your email address&nbsp;.&nbsp;. </h3>
                            <div className="form-group col-md-10" id="form-email">
                                <label htmlFor="email">Email * </label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                                {this.state.errors.email === true &&<div className="alert alert-danger">cant be empty</div>}
                                {this.state.errors.emailvalid === false &&<div className="alert alert-danger">this email is invaild</div>}
                            </div>
                            <div className="form-group col-md-10">
                                <label htmlFor="password">password * </label>
                                <input type="password" name="password"className="form-control" id="password" placeholder="Password" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                                {this.state.errors.password === true &&<div className="alert alert-danger">cant be empty</div>}
                                {this.state.errors.passwordlength === true &&<div className="alert alert-danger">password cant be less than 5</div>}
                                {this.state.errors.passwordvalid === false &&<div className="alert alert-danger">password in valid</div>}
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </React.Fragment>
    )
}
}

export default Login

*/