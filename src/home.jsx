import React , {Component} from 'react'
import { Link } from 'react-router-dom'
import img1 from '../src/image/1.jpg'
import img2 from '../src/image/2.png'
import img3 from '../src/image/3.jpg'
import img4 from '../src/image/4.png'
import Carousel from 'react-bootstrap/Carousel'
class Home extends Component {
    state={
        mobiles :[],
        labtop : [],
        smartwatch : []
    }
    carousel=(e)=>{
        if (e === 1 || e ===2){
            document.getElementsByClassName('carousel-indicators')[0].firstChild.classList.add("carousl-white")
            document.getElementsByClassName('carousel-indicators')[0].children[1].classList.add("carousl-white")
            document.getElementsByClassName('carousel-indicators')[0].children[2].classList.add("carousl-white")
            document.getElementsByClassName('carousel-indicators')[0].lastChild.classList.add("carousl-white")}
        else{
            document.getElementsByClassName('carousel-indicators')[0].firstChild.classList.remove("carousl-white")
            document.getElementsByClassName('carousel-indicators')[0].children[1].classList.remove("carousl-white")
            document.getElementsByClassName('carousel-indicators')[0].children[2].classList.remove("carousl-white")
            document.getElementsByClassName('carousel-indicators')[0].lastChild.classList.remove("carousl-white")}
    }
    lastProducts = (products)=>{
        var allproducts = {}
        var mobilesLength = products.mobiles.length
        var laptopLength = products.laptop.length
        var smartwatchLength = products.smartwatch.length
        var lastMobiles = [] , lastlaptop = [] , lastsmartwatch = []
        for(let i = mobilesLength-1 ; i>=mobilesLength-4 ; i--){
            lastMobiles.push(products.mobiles[i])   }
        for(let i = laptopLength-1 ; i>=laptopLength-4 ; i--){
            lastlaptop.push(products.laptop[i])   }
        for(let i = smartwatchLength-1 ; i>=smartwatchLength-4 ; i--){
            lastsmartwatch.push(products.smartwatch[i])}
            allproducts.mobiles = lastMobiles
            allproducts.labtop = lastlaptop 
            allproducts.smartwatch = lastsmartwatch 
        return allproducts
    }
    addcart = (e)=>{
        this.props.cartfu(e)
     }
    render(){
        var allproduct = this.lastProducts(this.props)
        return(
        <React.Fragment>
            <Carousel interval={2000} onSlide={(e)=>{this.carousel(e)}}>
            <Carousel.Item >
                <img className="d-block w-100" src={img1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item >
                <img className="d-block w-100"src={img2} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"src={img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item >
                <img className="d-block w-100" src={img4} alt="Second slide"/>
            </Carousel.Item>
            </Carousel>
            <h1 className='prodcutheader'>Top Categories</h1>
            <Carousel className='carouselContainer' interval={3000}>
                <Carousel.Item>
                     <div className='carouselCate'>
                         <div className='cate1'>
                            <div className='catedetails'>
                            <Link to="/home/mobile/1">mobile</Link>
                            </div>
                         </div>
                         <div className='cate2'>
                         <div className='catedetails'>
                            <Link to="/home/labtop/1">laptop</Link>
                          </div>
                         </div>
                         <div className='cate3'>
                         <div className='catedetails'>
                            <Link to="/home/smartwatch/1">smartwatch</Link>
                            </div>
                         </div>
                         <div className='cate4'>
                         <div className='catedetails'>
                            <Link to="/home/mobile/1">Airbods</Link>
                            </div>
                         </div>
                     </div>
                </Carousel.Item>
                <Carousel.Item>
                     <div className='carouselCate'>
                         <div className='cate1'>
                            <div className='catedetails'>
                            <Link to="/home/mobile/1">mobile</Link>
                            </div>
                         </div>
                         <div className='cate2'>
                         <div className='catedetails'>
                            <Link to="/home/labtop/1">laptop</Link>
                          </div>
                         </div>
                         <div className='cate3'>
                         <div className='catedetails'>
                            <Link to="/home/smartwatch/1">smartwatch</Link>
                            </div>
                         </div>
                         <div className='cate4'>
                         <div className='catedetails'>
                            <Link to="/home/mobile/1">Airbods</Link>
                            </div>
                         </div>
                     </div>
                </Carousel.Item>
                <Carousel.Item>
                     <div className='carouselCate'>
                         <div className='cate1'>
                            <div className='catedetails'>
                            <Link to="/home/mobile/1">mobile</Link>
                            </div>
                         </div>
                         <div className='cate2'>
                         <div className='catedetails'>
                            <Link to="/home/labtop/1">laptop</Link>
                          </div>
                         </div>
                         <div className='cate3'>
                         <div className='catedetails'>
                            <Link to="/home/smartwatch/1">smartwatch</Link>
                            </div>
                         </div>
                         <div className='cate4'>
                         <div className='catedetails'>
                            <Link to="/home/mobile/1">Airbods</Link>
                            </div>
                         </div>
                     </div>
                </Carousel.Item>
            </Carousel>
            <div className='container'>
                <h1 className='prodcutheader'> last added products</h1>
                    <div className='lastAddedProduct'>
                    {allproduct.mobiles[0] !== undefined && allproduct.mobiles.map(eachProduct=> {return (
                            <div className="card flex_card_element element" key={eachProduct.id} >
                            <img src={eachProduct.imgurl} className="card-img-top" alt={eachProduct.productname} />
                            <div className="card-body">
                                <h5 className="card-title">{eachProduct.productname}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/productdetails/mobiles/${eachProduct.id}`} className="btn btn-primary addToCartButton">show details</Link>
                                {this.props.user.id !== null && <button className="btn btn-primary addToCartButton" onClick={()=>this.addcart(eachProduct)}>Add Cart</button>}
                                {this.props.user.id === null && <button className="btn btn-primary signupButton"><Link to={`/signup`} className="btn btn-primary">Signup first</Link></button>}
                            </div>
                            </div>
                       )})}
                    </div>
                    <div className='lastAddedProduct'>
                    {allproduct.labtop[0] !== undefined && allproduct.labtop.map(eachProduct=> {return (
                            <div className="card flex_card_element element" key={eachProduct.id} >
                            <img src={eachProduct.imgurl} className="card-img-top" alt={eachProduct.productname} />
                            <div className="card-body">
                                <h5 className="card-title">{eachProduct.productname}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/productdetails/laptop/${eachProduct.id}`} className="btn btn-primary addToCartButton">show details</Link>
                                {this.props.user.id !== null && <button className="btn btn-primary addToCartButton" onClick={()=>this.addcart(eachProduct)}>Add Cart</button>}
                                {this.props.user.id === null && <button className="btn btn-primary signupButton"><Link to={`/signup`} className="btn btn-primary addToCartButton">Signup first</Link></button>}
                            </div>
                            </div>
                       )})}                       
                    </div>
                    <div className='lastAddedProduct'>
                    {allproduct.smartwatch[0] !== undefined && allproduct.smartwatch.map(eachProduct=> {return (
                            <div className="card flex_card_element element" key={eachProduct.id} >
                            <img src={eachProduct.imgurl} className="card-img-top" alt={eachProduct.productname} />
                            <div className="card-body">
                                <h5 className="card-title">{eachProduct.productname}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to={`/productdetails/smartwatch/${eachProduct.id}`} className="btn btn-primary addToCartButton">show details</Link>
                                {this.props.user.id !== null && <button className="btn btn-primary addToCartButton" onClick={()=>this.addcart(eachProduct)}>Add Cart</button>}
                                {this.props.user.id === null && <button className="btn btn-primary signupButton"><Link to={`/signup`} className="btn btn-primary addToCartButton">Signup first</Link></button>}
                            </div>
                            </div>
                       )})} 
                    </div>
            </div>
        </React.Fragment>
        )
    }
}
export default Home