import '../styles/main.css'
import { Link } from 'react-router-dom'


const SelectCandidate1 = () => {

    return (
        <div className='container h-screen'>
            <h1 className='pb-55 text-black'>BB Naija</h1>
            <p className='pb-5 text-black'>Select your favorite candidate</p>
            <div className='entire'>

                <div className=" div1 flex pb-50">
                    <div>
                    <div className='s-inner1 similar '>
                    <div className='f-inner1'></div>
                    
                    </div>
                    <div className='text-black'>John Doe</div>
                    </div>
                    
                    <div>
                    <div className='s-inner2  similar'>
                    <div className='f-inner1'></div>
                        
                    </div>
                    <div className='text-black'>John Doe</div>
                    </div>

                </div>


                <div className="div2 flex">
                    <div>
                    <div className='s-inner1  similar'>
                        <div className='f-inner1'></div>
                        
                    </div>
                    <div className='text-black'> John Doe</div>
                    </div>
                    
                    <div>
                    <div className='s-inner2  similar'>
                    <div className='f-inner1'></div>
                
                    </div>
                    <div className='text-black'>John Doe</div>   
                    </div>
                </div>
            </div>
            <br />

            <Link to='/verification'>
                <button className='allBtn allInput mb-0 pb-0'>Select </button>
            </Link>
            
        </div>


    )
}

export default SelectCandidate1;