import Logo from '../../assets/images/logo.png';
import Search from '../../assets/images/search.png';
import Alarm from '../../assets/images/alarm.png';
import Message from '../../assets/images/message.png';
import Profile from '../../assets/images/profile.png';

function Header() {
    return (
        <div className='relative h-auto overflow flex justify-between md:px-[144px] sm:px-[50px] px-[24px] py-6 bg-white'>
            <img src={Logo} className='w-auto h-10' />
            <div className='sm:relative absolute sm:grow w-full sm:top-0 top-[88px] left-0 sm:px-[20px] px-[24px] md:text-right sm:text-center'>
                <img src={Search} className='inline-flex md:w-auto sm:w-[450px] w-full h-[40px]' />
            </div>

            <div className='h-fit flex flex-row space-x-5'>
                <img src={Message} className='inline-flex w-10 h-10' />
                <img src={Alarm} className='inline-flex w-10 h-10' />
                <img src={Profile} className='inline-flex w-10 h-10' />
            </div>

        </div>
    )
}

export default Header;