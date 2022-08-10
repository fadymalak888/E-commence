import React, { Component } from 'react';
class ProductDetails extends Component {
    addcart=e=>{
        this.props.cartfu(e)
    }
    render() { 
        var productname = this.props.match.params.name  //mobiels labtop smartwatch
        var proId = +this.props.match.params.id //id of proudct itself
        var data = this.props.products  //array of product

        let newarr = data[productname]   //adata[mobiles]   [{},{},{}] array of all mobile products
        var showProduct = newarr.filter(pro=>pro.id === proId)  //return mobile which its id matched with seleceted id
        console.log(showProduct)
        return <React.Fragment>
        <div className="container flex_card_container">
                    <div className="card flex_card_element" key={showProduct[0].id} >
                                    <img src={showProduct[0].imgurl} className="card-img-top" alt={showProduct[0].productname} />
                                    <div className="card-body">
                                        <h5 className="card-title">{showProduct[0].productname}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-primary"onClick={()=>this.addcart(showProduct[0])}>Add Cart</button>
                                    </div>
                                    </div>
                    </div>
        </React.Fragment>;
    }
}
 
export default ProductDetails


/*
            

*/
