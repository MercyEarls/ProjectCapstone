import '../styles/main.css'
import { Link } from 'react-router-dom'

const ConfirmCandidate = ()=>{
    
    return(
    <div>
         <div className=" div1 pb-50 ">
        <div>
         <h1>Confirm Candidate</h1>
        </div>
                    <div className='flex justify-center text-center'>
                    <div className='s-inner1 similar1'>
                    <div className='f-inner1'></div>
                    </div>
                    </div>
                    <div className='text-black text-center'>John Doe</div>
                    </div>
                   
        <div className='text-center justify-center'>
        <p className='justify-center mt-5 font-xs'>You have selected Atiku as your preferred candidate. </p>
        <p className='justify-center  font-xs'>Click the button to submit. </p>
        </div>
            <div className='pt-20'>
            <Link to='/confirmcandidate1'>
                <button className='allBtn allInput'>Submit your vote</button>
            </Link>

            </div>
    </div>
    

        
        

    )
}

export default ConfirmCandidate;