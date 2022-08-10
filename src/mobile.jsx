import React , {Component} from 'react'
import { Link } from 'react-router-dom'

 class Mobile extends Component {
componentDidMount(){
        this.next_previos();
        this.activebutton();
}
componentDidUpdate(){
        this.next_previos();
        this.activebutton();
}
activebutton =()=>{
        for(let i = 0 ; i< Math.ceil(  this.props.mobiles.length /8 ) ; i++){
             document.getElementsByClassName("page-item").item(i).classList.remove("active")
        }
        var ind = +this.props.match.params.id - 1
         if(this.getdata().length !== 0 ){
                document.getElementsByClassName("page-item").item(ind).classList.add("active")
         }
}
next_previos = ()=>{
        if(this.getdata().length !== 0 ){
           var currentid = +this.props.match.params.id
           var nopage = Math.ceil(this.props.mobiles.length / 8)
                if(currentid === nopage){document.getElementById("nextbutton").classList.add("disabled")}
                else{document.getElementById("nextbutton").classList.remove("disabled")}
                if(currentid === 1){document.getElementById("prevbutton").classList.add("disabled")}
                else{ document.getElementById("prevbutton").classList.remove("disabled")}
                if(+this.props.match.params.id > Math.ceil( this.props.mobiles.length /4 )){this.props.history.push("/home")  }
        }
}

getdata = ()=>{
    var colnedproducts = [...this.props.mobiles] ;
    var productslist = []
    var currentid = +this.props.match.params.id ; //123
    var start = (currentid-1)  * 8 ;//indx 16   elem 17
    var end = start + 7  ;          //indx 23   eleme 24
for(let i = start  ; i<= end ; i++){
    if(colnedproducts[i] === undefined) {
           break  ;}
    else{
        productslist.push(colnedproducts[i])
    }}
    return productslist
}
 addcart = (e)=>{
   this.props.cartfu(e)
}
loginfirst=()=>{
    this.props.history.replace("login")
}
    render(){
        var products = this.getdata()
        var emptypage = products.length>0?false : true
        return(
        <React.Fragment>
            {emptypage && <div className="alert">no product yet</div>}
           {!emptypage &&  <div className="container flex_card_container">
                   {products.map(eachProduct=> {return (
                            <div className="card flex_card_element" key={eachProduct.id} >
                            <img src={eachProduct.imgurl} className="card-img-top" alt={eachProduct.productname} />
                            <div className="card-body">
                                <h5 className="card-title">{eachProduct.productname}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/productdetails/mobiles/${eachProduct.id}`} className="btn btn-primary addToCartButton">show details</Link>
                                {this.props.user.id !== null && <button className="btn btn-primary addToCartButton" onClick={()=>this.addcart(eachProduct)}>Add Cart</button>}
                                {this.props.user.id === null && <button className="btn btn-primary addToCartButton"><Link to={`/signup`} className="btn btn-primary">Signup To Add Cart</Link></button>}
                            </div>
                            </div>
                       )})}
                       </div>}
                <nav className="pagination">
                <ul className="pagination" >
                        <li className="page-item-prev ">
                            <button className="btn prevbutton" id="prevbutton">
                                <Link className="page-link" to={`/home/mobile/${(+this.props.match.params.id)-1}`}>Previous</Link>
                            </button> 
                        </li>
                        {this.props.noMobilespage.map(ind=>{
                             return(
                                   <li className="page-item" key={ind}>
                                       <Link to={`/home/mobile/${ind}`} className="page-link" >{ind}</Link>
                                   </li>
                           )})}
                        <li className="page-item-next "  >
                            <button className="btn" id="nextbutton">
                                <Link className="page-link"  to={`/home/mobile/${(+this.props.match.params.id || 1 ) +1}`}>Next</Link>
                            </button> 
                        </li>        
                    </ul>
                </nav>
        </React.Fragment>
        )
    }
}
export default Mobile