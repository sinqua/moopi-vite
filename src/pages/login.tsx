import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import moopiLogo from "../assets/images/logo.png";
import googleLogo from "../assets/images/googleLogo.png";
import twitterLogo from "../assets/images/twitterLogo.png";
import discordLogo from "../assets/images/discordLogo.png";
import kakaoLogo from "../assets/images/kakaoLogo.png";
import naverLogo from "../assets/images/naverLogo.png";
import offingLogo from "../assets/images/offingLogo.png";


export default function LoginPage() {
    const navigate = useNavigate();

    const kakaoHandler = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
    }

    const discordHandler = () => {
        window.location.href = `https://discord.com/oauth2/authorize?client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_DISCORD_REDIRECT_URI}&response_type=code&scope=email`;
    }

    const twitterHandler = () => {
        window.location.href = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${import.meta.env.VITE_TWITTER_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_TWITTER_REDIRECT_URI}&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;
    }

    let LOGIN_CODE = new URL(window.location.href).searchParams.get('code');


    const requestUser = async (platform: any) => {
        const res = await fetch(import.meta.env.VITE_SERVER_URL + "/oauth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "platform": platform,
                "code": LOGIN_CODE,
            }),
        });
        const data = await res.json();

        console.log(data);

        // setCookie('user', data.USER_ID, {path: '/'})

        if(res.status === 200)
            navigate(`/user/${data.userId}`);
    }

    useEffect(() => {
        if(LOGIN_CODE) {
            
            if(window.location.href.includes("kakao")) {
                console.log("카카오 로그인 완료");
                requestUser("kakao");

            } else if(window.location.href.includes("discord")) {
                console.log("디스코드 로그인 완료");
                requestUser("discord");
                
            } else if(window.location.href.includes("twitter")) {
                console.log("트위터 로그인 완료");
                requestUser("twitter");
            }
        }
    }, []);

    return (
        <div className="flex flex-row sm:h-full h-[812px] font-sans">
            <div className="md:grow bg-[url('./assets/images/loginBackground.png')] bg-no-repeat bg-cover"></div>
            <div className="md:grow-0 grow w-[470px] sm:py-[100px] pt-[60px] pb-[50px] flex flex-col items-center">
                <img className="w-[106px] h-[30px]" src={moopiLogo} />
                <div className="sm:h-[95px] h-[40px]" />
                <p className="font-semibold text-xl">moopi에 오신 것을 환영합니다</p>
                <div className="sm:h-[60px] h-[80px]" />
                <div className="space-y-[18px] text-sm text-white">
                    <div className="w-[320px] h-[40px] rounded-[5px] relative flex flex-row justify-center items-center bg-[#FEE500] cursor-pointer" onClick={kakaoHandler}>
                        <img className="w-[40px] h-[40px] m-[10px] absolute left-0" src={kakaoLogo}/>
                        <p className="text-black">Start with Kakao</p>
                    </div>
                    <div className="w-[320px] h-[40px] rounded-[5px] relative flex flex-row justify-center items-center bg-[#00ACEE] cursor-pointer" onClick={twitterHandler}>
                        <img className="w-[40px] h-[40px] m-[10px] absolute left-0" src={twitterLogo}/>
                        <p>Start with Twitter</p>
                    </div>
                    <div className="w-[320px] h-[40px] rounded-[5px] relative flex flex-row justify-center items-center bg-white border-[1px] border-s2xyoon-gray cursor-pointer">
                        <img className="w-[40px] h-[40px] m-[10px] absolute left-0" src={googleLogo}/>
                        <p className="text-black">Start with Google</p>
                    </div>
                    <div className="w-[320px] h-[40px] rounded-[5px] relative flex flex-row justify-center items-center bg-[#5865F2] cursor-pointer" onClick={discordHandler}>
                        <img className="w-[40px] h-[40px] m-[10px] absolute left-0" src={discordLogo}/>
                        <p>Start with Discord</p>
                    </div>
                    <div className="w-[320px] h-[40px] rounded-[5px] relative flex flex-row justify-center items-center bg-[#03C75A] cursor-pointer">
                        <img className="w-[40px] h-[40px] m-[10px] absolute left-0" src={naverLogo}/>
                        <p>Start with Naver</p>
                    </div>
                </div>
                <div className="sm:h-[57px] h-[60px]" />
                <div className="w-[300px] text-sm text-center leading-[30px]">
                    계속 진행하면 moopi <span className="underline underline-offset-2 cursor-pointer">서비스 약관</span>에 동의하고
                    <span className="underline underline-offset-2 cursor-pointer">개인정보 보호정책</span>을 읽었음을 인정하는 것으로
                    간주됩니다.
                </div>
                <div className="sm:h-[279px] h-[83px]" />
                <div className="flex flex-row items-center space-x-[8px] text-sm">
                    <p>by offing</p>
                    <img className="w-[31px] h-[31px]" src={offingLogo}/>
                    <p>company</p>
                </div>
            </div>
        </div>
    );
}
