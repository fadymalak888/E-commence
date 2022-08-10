import axios from "axios";
import React , {Component} from "react";
class Signup extends Component {
    state={
    firstname : '' , 
    lastname : '' , 
    email:'' , 
    password : '' ,
    birthday:'' ,
    online : true,
    cart :[],
    errors : {
        firstname: null ,
        lastname : null , 
        email : null , 
        password : null ,
        passwordlength:null ,
        confirmedpass:null , //are the same
        birthday: null ,
        emailinvalid : null
    }

    }
handlerSubmit = async(e)=>{    
    var isexist = false
    var userId
        e.preventDefault()
        var errors = {...this.state.errors}
        if(this.state.errors.firstname === false && this.state.errors.lastname === false&& this.state.errors.email === false&& this.state.errors.password === false&& this.state.errors.lastname === false&& this.state.errors.passwordlength === false&& this.state.errors.confirmedpass === false&& this.state.errors.birthday === false){
            var {data} = await axios.get("http://localhost:3000/user")
            console.log("dataxxxxxxxxxxx" , data)
            var users = {...this.state}
            //this.setState({firstname : data.firstname , lastname : data.lastname , email : data.email , cart : data.cart})
            delete users.errors
            
if (data.length === 0){
     axios.post("http://localhost:3000/user",users)
     userId = 1
     this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email,this.state.cart)
     this.setState(users)
     this.props.history.replace(`/porfile/${userId}`)
    }else{
    for(let i = 0 ; i<data.length ; i++){
        if(data[i].email === this.state.email){
            isexist = true
        }}
        if(isexist){
            console.log("do nothing already existed")
            errors.emailinvalid =true
            this.setState({errors})
        }
        else{
            userId =  data.length+1
             axios.post("http://localhost:3000/user",users)
             errors.emailinvalid =false
             this.setState({errors})
             this.setState(users) 
             this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email,this.state.cart)
             this.props.history.replace(`/porfile/${userId}`)
             
        }
}
 
    }
        else{
            console.log("keep disabled") // manual alert mesg
            var stateinarr = {...this.state}
            delete stateinarr.errors
            var arr = Object.keys(stateinarr) // [firstname ,lastname ,....]
            errors = {...this.state.errors}
            for(let i = 0 ; i< arr.length ; i++){
                if(this.state[arr[i]]===""){errors[arr[i]] = true ; this.setState({errors})}else{errors[arr[i]] = false ; this.setState({errors})}
            }
        }
        console.log("submit" , this.state)
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
    confirmedpass=(e)=>{
     var errors = {...this.state.errors}
      if(e.target.value === this.state.password){
        errors[e.target.name] = false 
        this.setState({errors})
      }
      else{
        errors[e.target.name] = true
        this.setState({errors})  
      }
    }
        //for password 
    
passwordvalidate = ()=>{
    var errors = {...this.state.errors}
    if(this.state.password.length <=6){
        errors['passwordlength'] = true
        this.setState({errors}) 
     }else{
         errors['passwordlength'] = false
        this.setState({errors})        
     }
}
    render(){
        return (<React.Fragment>
            <div className="container signupForm">
            <form onSubmit={(e)=>this.handlerSubmit(e)}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="firstname">Frist Name * </label>
                        <input type="string" name="firstname" className="form-control" id="firstname" placeholder="first name" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                        {this.state.errors.firstname === true &&<div className="alert alert-danger">cant be empty</div>}
                    </div>
                    <div className="form-group col">
                         <label htmlFor="lastname">Last Name * </label>
                         <input type="lastname" name="lastname" className="form-control" id="lastname" placeholder="last name" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                         {this.state.errors.lastname === true &&<div className="alert alert-danger">cant be empty</div>}
                    </div>
                </div>

                <div className="form-group col-md-10" id="form-email">
                    <label htmlFor="email">Email * </label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                    {this.state.errors.email === true &&<div className="alert alert-danger">cant be empty</div>}
                    {this.state.errors.emailinvalid === true &&<div className="alert alert-danger">this email address already existed</div>}
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="password">password * </label>
                    <input type="password" name="password"className="form-control" id="password" placeholder="Password" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e);this.passwordvalidate()}}/>
                    {this.state.errors.password === true &&<div className="alert alert-danger">cant be empty</div>}
                    {this.state.errors.passwordlength === true &&<div className="alert alert-danger">password cant be less than 5</div>}
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="confirmedpassword">confirmed password * </label>
                    <input type="confirmedpassword" name="confirmedpass" className="form-control" id="confirmedpassword" placeholder="Re-peate Password" onChange={(e)=>{this.confirmedpass(e);}} onBlur={(e)=>{this.confirmedpass(e)}}/>
                    {this.state.errors.confirmedpass === true &&<div className="alert alert-danger">does not match</div>}
                </div>                
                <div className="row">
                    <div className="form-group col-md-10 ">
                    <label htmlFor="date">Date of Birth *</label>
                    <input type="date" name="birthday" className="form-control" id="birthday" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                    {this.state.errors.birthday === true &&<div className="alert alert-danger">cant be empty</div>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </React.Fragment>)
    }
    }
export default Signup 


/*

1/12/2021

import axios from "axios";
import React , {Component} from "react";
class Signup extends Component {
    state={
    firstname : '' , 
    lastname : '' , 
    email:'' , 
    password : '' ,
    birthday:'' ,
    online : true,
    cart :[],
    errors : {
        firstname: null ,
        lastname : null , 
        email : null , 
        password : null ,
        passwordlength:null ,
        confirmedpass:null , //are the same
        birthday: null ,
        emailinvalid : null
    }

    }
handlerSubmit = async(e)=>{
    var isexist = false
    var userId
        e.preventDefault()
        var errors = {...this.state.errors}
        if(this.state.errors.firstname === false && this.state.errors.lastname === false&& this.state.errors.email === false&& this.state.errors.password === false&& this.state.errors.lastname === false&& this.state.errors.passwordlength === false&& this.state.errors.confirmedpass === false&& this.state.errors.birthday === false){
            var {data} = await axios.get("http://localhost:3000/user")
            var users = {...this.state}
            delete users.errors
            
if (data.length === 0){
     axios.post("http://localhost:3000/user",users)
     userId = 1
     this.props.history.replace(`/porfile/${userId}`)
     this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email)
}else{
    for(let i = 0 ; i<data.length ; i++){
        if(data[i].email === this.state.email){
            isexist = true
        }}
        if(isexist){
            console.log("do nothing already existed")
            errors.emailinvalid =true
            this.setState({errors})
        }
        else{
            console.log("added")
            userId =  data.length+1
             axios.post("http://localhost:3000/user",users)
             this.props.history.replace(`/porfile/${userId}`)
             errors.emailinvalid =false
             this.setState({errors})
             
          
             this.props.isconnected(userId,this.state.firstname , this.state.lastname , this.state.email)
        }
}
 
    }
        else{
            console.log("keep disabled") // manual alert mesg
            var stateinarr = {...this.state}
            delete stateinarr.errors
            var arr = Object.keys(stateinarr) // [firstname ,lastname ,....]
            errors = {...this.state.errors}
            for(let i = 0 ; i< arr.length ; i++){
                if(this.state[arr[i]]===""){errors[arr[i]] = true ; this.setState({errors})}else{errors[arr[i]] = false ; this.setState({errors})}
            }
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
    console.log(this.state.errors)
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
    confirmedpass=(e)=>{
     var errors = {...this.state.errors}
      if(e.target.value === this.state.password){
        errors[e.target.name] = false 
        this.setState({errors})
      }
      else{
        errors[e.target.name] = true
        this.setState({errors})  
      }
    }
        //for password 
    
passwordvalidate = ()=>{
    var errors = {...this.state.errors}
    if(this.state.password.length <=6){
        errors['passwordlength'] = true
        this.setState({errors}) 
     }else{
         errors['passwordlength'] = false
        this.setState({errors})        
     }
}
    render(){
        return (<React.Fragment>
            <div className="container">
            <form onSubmit={(e)=>this.handlerSubmit(e)}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="firstname">Frist Name * </label>
                        <input type="string" name="firstname" className="form-control" id="firstname" placeholder="first name" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                        {this.state.errors.firstname === true &&<div className="alert alert-danger">cant be empty</div>}
                    </div>
                    <div className="form-group col">
                         <label htmlFor="lastname">Last Name * </label>
                         <input type="lastname" name="lastname" className="form-control" id="lastname" placeholder="last name" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                         {this.state.errors.lastname === true &&<div className="alert alert-danger">cant be empty</div>}
                    </div>
                </div>

                <div className="form-group col-md-10" id="form-email">
                    <label htmlFor="email">Email * </label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                    {this.state.errors.email === true &&<div className="alert alert-danger">cant be empty</div>}
                    {this.state.errors.emailinvalid === true &&<div className="alert alert-danger">this email address already existed</div>}
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="password">password * </label>
                    <input type="password" name="password"className="form-control" id="password" placeholder="Password" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e);this.passwordvalidate()}}/>
                    {this.state.errors.password === true &&<div className="alert alert-danger">cant be empty</div>}
                    {this.state.errors.passwordlength === true &&<div className="alert alert-danger">password cant be less than 5</div>}
                </div>
                <div className="form-group col-md-10">
                    <label htmlFor="confirmedpassword">confirmed password * </label>
                    <input type="confirmedpassword" name="confirmedpass" className="form-control" id="confirmedpassword" placeholder="Re-peate Password" onChange={(e)=>{this.confirmedpass(e);}} onBlur={(e)=>{this.confirmedpass(e)}}/>
                    {this.state.errors.confirmedpass === true &&<div className="alert alert-danger">does not match</div>}
                </div>                
                <div className="row">
                    <div className="form-group col-md-10 ">
                    <label htmlFor="date">Date of Birth *</label>
                    <input type="date" name="birthday" className="form-control" id="birthday" onChange={(e)=>this.handlerChange(e)} onBlur={(e)=>{this.validation(e)}}/>
                    {this.state.errors.birthday === true &&<div className="alert alert-danger">cant be empty</div>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </React.Fragment>)
    }
    }
export default Signup 


                        */