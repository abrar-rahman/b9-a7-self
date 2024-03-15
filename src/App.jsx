import { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import './App.css'

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
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setCart([...cart,p])
    }
    else {
      alert('You have already added this product');
    }
  }
  console.log(cart);

  return (
    <>
      <div className='container mx-auto my-10'>
        
        
      <div class="navbar bg-base-100">
    <div class="flex-1">
    <a class="btn btn-ghost text-3xl">Recipe Calories</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
        </div>
        

      <div class="hero lg:h-[600px] my-10 bg-[url('../banner.jpg')]">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-3xl">
      <h1 class="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
              <p class="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
              
      <button class="btn btn-accent">Explore Now</button>
      <button class="btn btn-neutral ml-4">Our Feedback</button>
      
    </div>
  </div>
      </div>


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
                <h3 className='font-bold text-xl'>Want to cook: 01</h3>
              
                <div className='cart-title flex justify-between my-4 items-center'>
                <h5 className='font-bold text-lg'>Name</h5>
                <h5 className='font-bold text-lg'>Time</h5>
                 <h5 className='font-bold text-lg'>Price</h5>
                 
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
