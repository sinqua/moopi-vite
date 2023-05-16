import Logo from '../../assets/images/logo.png';

function Footer(props: any) {
    return (
        <div className="h-60 py-[60px] text-[15px] bg-white border-t-[1px] border-s2xyoon-gray">
            <div className="flex justify-center space-x-[28px] font-NanumSquareNeoHv mb-[40px] ">
                <div>Terms of service</div>
                <div>|</div>
                <div>Privacy policy</div>
                <div>|</div>
                <div>Limitation of Liability and Disclaimer</div>
                <div>|</div>
                <div>Customer service center</div>
            </div>
            <div className="flex justify-center space-x-[10px] font-NanumSquareNeoRg mb-[25px]">
                <div>MOOPI</div>
                <div>|</div>
                <div>contract@moopi.me</div>
                <div>|</div>
                <div>TEL. 010-1234-5678</div>
                <div>|</div>
                <div>registration No. 123-45-67890</div>
            </div>
            <div className="flex justify-center space-x-[20px] font-NanumSquareNeoRg">
                <img src={Logo} className='w-auto h-[20px]' />
                <div className='flex justify-center space-x-[5px]'>
                    <div>CopyRight</div>
                    <div>ⓒ</div>
                    <div className='font-NanumSquareNeoHv'>MOOPI Corp.</div>
                    <div>All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;