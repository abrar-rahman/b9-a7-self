import { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import './App.css'
import Header from './Header';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
    })
  },[])


  const handleCart = (p) => {
    const isExist = cart.find(item => item.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    }
    else {
      alert("You have already added this product")
    }
  };

  const handleDelete = (id)=>{
    const newCart = cart.filter(item => item.id != id);
    setCart(newCart);
  }




  console.log(cart);

  return (
    <>
      <div className='container mx-auto my-10'>
        
      
        <Header></Header>

        <div>
          
          <div className='text-center space-y-6'>
          <h1 className='text-5xl font-bold'>Our Recipes</h1>
          <p>Try our recipe, We bring the most delicious food along with maximum <br /> health benefits and rejuvinates your youth.</p>
          </div>
        


        
          <div className='flex justify-between my-12'>
            <div className='cards-container w-[55%] gap-6 grid grid-cols-1 lg:grid-cols-2'>
              
              {
                products.map(pd => <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>)
             }
              
            </div>




            <div className='cart-container border-2 w-[40%]  rounded-xl p-4'>
            
              <div className='text-center my-8 p-4'>
                <h3 className='font-bold text-xl'>Want to cook: 1</h3>
              
                <div className='cart-title flex justify-around my-4 items-center'>
                <h5 className='font-bold text-lg'>Name</h5>
                <h5 className='font-bold text-lg'>Time</h5>
                 <h5 className='font-bold text-lg'>Calories</h5>
                </div>

              
          <div className='space-y-2'>
                  {cart.map((item, index) => (
                    <div className="cart-info flex justify-around items-center">
                      <p>{index+1}</p>
                      <h5>{item.recipe_name.slice(0,12)}</h5>
                      <h5>{item.preparing_time}</h5>
                      <h5>{item.calories}</h5>
                      <button onClick={()=>handleDelete(item.id)} className='btn btn-accent'>Preparing</button>
                    </div>
             ))}
                  
           </div>

                <h3 className='my-6 font-bold text-xl'>Currently cooking: 01</h3>
                <div className='cart-title flex justify-around  items-center'>
                <h5 className='font-bold text-lg'>Name</h5>
                <h5 className='font-bold text-lg'>Time</h5>
                 <h5 className='font-bold text-lg'>Calories</h5>
                </div>
                
                
              </div>
              
              
              
              
            </div>
          
          </div>
          


        </div>
        
        
        
        
        
        
        
      



      </div>
      
    </>
  )
}

export default App
