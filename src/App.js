import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Products } from './Components/Products';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './Components/Cart';

function App() {


  let cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if(cartItems===null){
    cartItems = [];
  }
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState(cartItems);


  useEffect(()=>{
     fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>setProducts(data));
  },[]) 

  
  const addToCart = (index)=>{

    for(let i=0;i<cart.length;i++){
      if(cart[i].id===products[index].id){
        toast.error('Already in cart');
        return;
      }
    }

    setCart(prevCart=>[...prevCart,{
      "id":products[index].id,
      "title":products[index].title,
      "price":products[index].price,
      "count":products[index].rating.count,
      "qty":1,
    }]);
    toast.success('Added to cart!');
  }

  const increment = (index)=>{
    const newCart = cart.map((item,i)=>{
      if(i===index && item.qty < item.count){
        return {
          ...item,
          'qty':item.qty+1
        }
      }
      else if(item.qty===item.count){
        toast.error('Item is out of stock');
        return item;
      }
      else{
        return item;
      }
    });
    setCart(newCart);
  }

  const decrement = (index)=>{
    const newCart = cart.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'qty':item.qty-1,
        }
      }
      else{
        return item;
      }
    });
    setCart(newCart);
  }

  const clearCart = ()=>{
    setCart([]);
  }

  const deleteCartItem = (index)=>{
    const temp = [...cart];
    temp.splice(index,1);
    setCart(temp);
  }

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cart));
  },[cart]);


  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart}/>
    <Routes>
      <Route path='/' element={<Products products={products} category="men's clothing" addToCart={addToCart}/>}/>
      <Route path='/womens' element={<Products products={products} category="women's clothing" addToCart={addToCart}/>}/>
      <Route path='/jewelery' element={<Products products={products} category="jewelery" addToCart={addToCart}/>}/>
      <Route path='/electronics' element={<Products products={products} category="electronics" addToCart={addToCart}/>}/>
      <Route path='/Cart' element={<Cart cart={cart} increment={increment} decrement={decrement} 
      clearCart={clearCart}
      deleteCartItem={deleteCartItem}
      />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
