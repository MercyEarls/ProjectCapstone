import '../styles/main.css'
import { Link } from 'react-router-dom'

const PollingUnit2 = ()=>{
    
    return(
        <div className='container h-screen'>
           
            <div className='w-200 h-200 bg-green-500'></div>
                 <div>
                 <div class="comment text-center pt-20">
            <i class="fa-sharp fa-solid fa-circle-check fa-10x text-green-600"></i> 
        </div>
               <h1 className='text-center'>Vote Successful!</h1>
               </div>
                
               <div>
                <p className='pt-5 text-center'>Your vote has been Successful submitted</p>
                </div>
                
                <div className='mt-20 button'>
                <Link to='/'>
                <button className='allBtn allInput mb-0 pb-0'>Okay, got it <i className="fas fa-arrow-right" /></button>
                </Link>
                </div>



        </div>
        

    )
}

export default PollingUnit2;