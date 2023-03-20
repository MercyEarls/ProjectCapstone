import '../styles/main.css'
import { Link } from 'react-router-dom'

const welcome = () => {

    return (
        <div className='container h-screen '>
           

<div class="comment text-center pt-20">
            <i class="fa-solid fa-face-smile fa-10x text-green-600"></i> 
          
        </div>


          
            <h5 className='font-bold text-2xl pt-10'>Welcome User</h5>
            <p className='font-light text-lg text-center pt-10'>Click the button to vote</p>

            
                <Link to='/authentication'>
                <button className='allBtn allInput mb-0 pb-0'>Vote <i className="fas fa-arrow-right" /></button>
                </Link>
                

            </div>


        


    )
}

export default welcome;