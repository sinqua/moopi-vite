import Logo from '../../assets/images/logo.png';
import Search from '../../assets/images/search.png';
import Alarm from '../../assets/images/alarm.png';
import Message from '../../assets/images/message.png';
import Profile from '../../assets/images/profile.png';

function Header() {
    return (
        <div className='relative sm:h-[88px] h-[106px] overflow flex justify-between sm:items-center items-start md:px-[144px] sm:px-[50px] px-[24px] py-[15px] bg-white'>
            <img src={Logo} className='w-auto h-10' />
            <div className='sm:relative absolute grow sm:w-auto w-full sm:top-0 bottom-[-10px] left-0 sm:px-[20px] px-[24px] md:text-right sm:text-center'>
                <img src={Search} className='inline-flex md:w-auto sm:w-[450px] w-full h-[40px]' />
            </div>

            <div className='h-fit flex flex-row space-x-[20px]'>
                <img src={Message} className='inline-flex w-10 h-10' />
                <img src={Alarm} className='inline-flex w-10 h-10' />
                <img src={Profile} className='inline-flex w-10 h-10' />
            </div>

        </div>
    )
}

export default Header;