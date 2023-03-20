import '../styles/main.css'
import { Link } from 'react-router-dom'

const Verification1 = ()=>{
    
    return(
        <div className='container h-screen'>
                <h1 className='pt-50'>Verification</h1>
                <p className='pt-10'>Enter OTP sent to your number</p>
                <input className='allInput' value="" placeholder='&nbsp;&nbsp;ASDER2' />
            <br></br>
       

                <Link to='/confirmcandidate'>
                <button className='allBtn allInput mb-0 pb-0'>Proceed <i className="fas fa-arrow-right" /></button>
                </Link>




        </div>
        

    )
}

export default Verification1;