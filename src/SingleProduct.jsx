

const SingleProduct = ({ product, handleCart }) => {
  // console.log(handleCart);
  return (
    <div>
       <div className="card space-y-5 p-5 border-2">
        <img className='max-w-72 h-56' src={product.recipe_image} alt="" />
        <h3 className='font-bold text-xl'>{product.recipe_name}</h3>
        <p className="max-w-60">{product.short_description}</p>
        <h4 className='font-bold text-lg'>Ingredients: {product.total_ingredients}</h4>

                <div className='flex justify-between'>
                  <div>
            <h5>{ product.preparing_time} minutes</h5>
                  </div>
                  <div>
            <h5>{ product.calories} calories</h5>
                  </div>
        </div>
        <button onClick={()=>handleCart(product)} className='btn btn-accent'>Want to Cook</button>
      </div>
       
    </div>
  );
};

export default SingleProduct;