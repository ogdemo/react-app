
import rockets from '../assets/rockets.jpg'
import demo from '../assets/demo.jfif'
import demo1 from '../assets/demo1.jfif'



function Hook () {
  return (
    <>
    <div className="bg-gray-900 w-100 h-55  text-white 
    justify-between items-center mb-60 ml-120 rounded-xl space-y-4">
       <h1 className="text-center text-2xl mt-80
       font-bold">
        Login
       </h1>

       <input className="ml-18 space-y-30 bg-white rounded-3xl text-black
       font-bold " 
       type="email" name="email" placeholder="Enter Your Email" />

        <input className="ml-18 space-y-30 bg-white rounded-3xl text-black
       font-bold" 
       type="password" name="password" placeholder="Enter Your password" />

       <button className="bg-blue-700 w-55 rounded-xl ml-18 font-bold text-2xl
       cursor-pointer">
        Sign In
       </button>
       <p className="text-2xl text-white font-bold">
        if you don't have a count <span 
        className="text-indigo-700 dark:text-indigo-300">
          <a href="#register.jsx">register:  </a></span>
       </p>
       
       <img
       
       className='h-60 w-120 object-cover relative rounded-xl'
       src={rockets}  />
       
    </div>
    
    <footer className="bg-gray-500 text-center sticky mb-0 z-10 ">
  <section className="max-w-4xl mx-auto p-2 flex justify-between items-center">
    
    <nav className="bg-white w-20 h-20 rounded-full mr-10">

   <img  className="mb-20 items-center  rounded-full w-20 h-20" src={demo} />
   
    </nav>
    <p className='text-2xl font-bold'>demo</p>
    <article className="w-1/1">
    
    <p className="text-3xl mr-20 font-bold text-white 
    ml-60">
      Why They Choose <span className="text-indigo-700 dark:text-indigo-200">
        Us It not Because I bout </span>Nice Staff...
    </p>
    </article>
  <nav className="bg-white w-20 h-20 rounded-full ml-30 ">
       <img  className="mb-20 items-center 
        rounded-full w-20 h-20 " src={demo1} alt="demo1"/>
    </nav>
    
  </section>
    </footer>
    </>

    
  )
}

export default Hook