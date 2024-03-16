

const Header = () => {
  return (
    <div>
        
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
    </div>
  );
};

export default Header;