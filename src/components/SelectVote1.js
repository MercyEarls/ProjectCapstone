import '../styles/main.css'
import { Link } from 'react-router-dom'

const SelectVote1 = () => {

    return (
        <div className='container h-screen'>
            <h1 className='pb-55'>Select a vote</h1>
            <p className='pb-5'>Click the button to vote</p>
            <div className='entire'>
                <div className=" div1 flex">
                    <div className='s-inner1 similar '>
                    <div className='f-inner11'></div>
                        <div className=' pt-3'>BB Naija</div>
                    </div>

                    <div className='s-inner2  similar'>
                    <div className='f-inner11'></div>
                        <div className=' pt-3'>BB Naija</div>
                    </div>

                </div>


                <div className="div2 flex">
                    <div className='s-inner1  similar'>
                        <div className='f-inner11'></div>
                        <div className=' pt-3'>BB Naija</div>
                    </div>
                    <div className='s-inner2  similar'>
                    <div className='f-inner11'></div>
                        <div className=' pt-3'>BB Naija</div>
                    </div>
                </div>
            </div>
            <br />

            <Link to='/selectcandidate'>
                <button className='allBtn allInput mb-0 pb-0'>See all </button>
            </Link >
            <div clasName='text-center align-center justify-center flex'>
                <p className='text-center'>OR</p>
            </div>

            <p className='pt-10'>Enter vote code</p>

            <input className='allInput' value="" placeholder='&nbsp;&nbsp;Enter vote code' />
<br />

        </div>


    )
}

export default SelectVote1;