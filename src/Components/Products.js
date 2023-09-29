import React from 'react'
import { ToastContainer} from 'react-toastify';


export const Products = (props) => {
    
  return (
    <>
    <div className="products-outer-container">
        <div className="products-child-container">
            <div className="products-heading">
                <h1>{props.category[0].toUpperCase() + props.category.slice(1)}</h1>
            </div>
            <div className="products-items-container">
                {props.products.length!==0 && props.products.map((item,index)=>{
                    if(props.category===item.category){
                    return  <div className="item-container">
                    <img src={item.image} alt="" />
                    <div className="item-title">
                        {item.title}
                    </div>
                    <div className="item-price">
                        {`$ ${item.price}`}
                    </div>
                    <button className="btn" onClick={()=>props.addToCart(index)}>Add to cart</button>
                </div>
                }
                else{
                    return <></>
                }  
                })}       
            </div>
        </div>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={800}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}
