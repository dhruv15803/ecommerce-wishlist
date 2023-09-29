
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const Cart = (props) => {

    const totalPrice = ()=>{
        let sum = 0;
        for(let i=0;i<props.cart.length;i++){
            sum = sum + props.cart[i].price  * props.cart[i].qty;
        }
        return sum;
    }
    
  return (
    <>
    <div className="cart-outer-container">
        <div className="cart-child-container">
            <div className="cart-heading">
                <h1>Cart</h1>
            </div>
            <div className="cart-items-container">
                {props.cart.length===0 && <div className='emptyCart'>
                    <h2>Cart is empty</h2>
                    <Link to="/"><button className="btn">Shop now</button></Link>
                    </div>}
                {props.cart.length!==0 && props.cart.map((item,index)=>{
                    return <div className="cart-item">
                    <div className="cart-item-title">
                        {item.title}
                    </div>
                    <div className="cart-item-price">
                        {`$ ${Math.ceil(item.price * item.qty)}`}
                    </div>
                    <div className="cart-item-qty">
                        {item.qty > 1 && <button className="cartBtn" onClick={()=>props.decrement(index)}>-</button> }
                        {item.qty}
                        <button className="cartBtn" onClick={()=>props.increment(index)}>+</button>
                    </div>
                    <div className="cart-item-delete">
                        <button className="btn" onClick={()=>props.deleteCartItem(index)}>Delete</button>
                    </div>
                </div>
                })}
                {props.cart.length!==0 && <div className="cart-total">
                    <h2>{`total price: $ ${Math.ceil(totalPrice())}`}</h2>
                    <button className="btn" onClick={props.clearCart}>Clear cart</button>
                </div>}
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
