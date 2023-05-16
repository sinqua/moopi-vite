import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Layout from "../components/layout/layout";

import Heart from "../assets/images/heart.png";
import HoverHeart from "../assets/images/hoverHeart.png";
import ActiveHeart from "../assets/images/activeHeart.png";

export default function UserPage() {
    const [page, setPage] = useState("설명");

    const [like, setLike] = useState(false);
    const [hover, setHover] = useState(false);

    const likeNoraml = "bg-[url('./assets/images/heart.png')] hover:bg-[url('./assets/images/hoverHeart.png')]";
    const likeActive = "bg-[url('./assets/images/activeHeart.png')]"

    const normalBtn = "flex justify-center items-center basis-1/4 h-[66px] hover:bg-s2xyoon-gray cursor-pointer";
    const selectedBtn = "flex justify-center items-center basis-1/4 h-[66px] text-white bg-[#333333] cursor-pointer";

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center w-full max-w-[1920px] py-[60px] px-[144px] space-x-[24px]">
                    <div className="basis-3/5 h-[617px] rounded-[10px] bg-[url('./assets/images/mainModel.png')] bg-no-repeat bg-cover shadow-[0px_3px_10px_rgba(0,0,0,0.16)]"></div>
                    <div className="basis-2/5 h-[617px] p-[40px] rounded-[10px] shadow-[0px_3px_10px_rgba(0,0,0,0.16)]">
                        <div className="flex flex-row space-x-[30px] mb-[40px] relative">
                            <div className="h-[120px] w-[120px] bg-gray-200 rounded-full"></div>
                            <div className="flex flex-col justify-center space-y-[30px]">
                                <p className="font-NanumSquareNeoEb text-[25px]">shinQua</p>
                                <div className="flex flex-row space-x-[20px] font-NanumSquareNeoBd text-[18px] flex-wrap">
                                    <div className="flex flex-row space-x-[10px]"><p>포트폴리오</p><p className="font-NanumSquareNeoHv">123</p></div>
                                    <div className="flex flex-row space-x-[10px]"><p>커미션</p><p className="font-NanumSquareNeoHv">123</p></div>
                                    <div className="flex flex-row space-x-[10px]"><p>팔로우</p><p className="font-NanumSquareNeoHv">123</p></div>
                                </div>
                            </div>
                            <img className="h-[30px] w-[30px] absolute border-none top-0 right-0 cursor-pointer" src={like ? ActiveHeart : hover ? HoverHeart : Heart} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} onClick={() => setLike(!like)} />
                        </div>
                        <div className="font-NanumSquareNeoRg text-[18px] mb-[80px] leading-[30px]">
                            <p>강원도의 자랑, 영월의 아들, 한반도면 골목대장 신규화입니다.</p>
                            <p>🚩 Unity, Blender, VRC  Expert</p>
                            <p>🚩 TFT Platinum, League of Legend Iron 계정 보유중</p>
                            <p>🚩 짐볼 판매중</p>
                            <p>🚩 맞짱 신청은 정중하게 DM으로 부탁드립니다🙏🙏🙏🙏</p>
                        </div>
                        <div className="flex flex-row space-x-[10px] justify-end mb-[30px] font-NanumSquareNeoBd text-[15px]">
                            <div className="px-[20px] py-[10px] bg-[#E9E9E9] rounded-full">VRC</div>
                            <div className="px-[20px] py-[10px] bg-[#E9E9E9] rounded-full">blender</div>
                            <div className="px-[20px] py-[10px] bg-[#E9E9E9] rounded-full">이세계아이돌</div>
                        </div>
                        <div className="flex justify-center items-center h-[58px] bg-[#333333] rounded-[10px] font-NanumSquareNeoBd text-[18px] text-white cursor-pointer">문의하기</div>
                    </div>
                </div>
                <div className="h-[100px] w-screen border-y-[1px] border-s2xyoon-gray"></div>
                <div className="pt-[60px] pb-[50px] px-[144px] flex justify-center w-full max-w-[1920px] font-NanumSquareNeoEb text-[25px]">
                    <div className={page === "설명" ? selectedBtn : normalBtn} onClick={() => setPage("설명")}>설명</div>
                    <div className={page === "포트폴리오" ? selectedBtn : normalBtn} onClick={() => setPage("포트폴리오")}>포트폴리오</div>
                    <div className={page === "가격정보" ? selectedBtn : normalBtn} onClick={() => setPage("가격정보")}>가격정보</div>
                    <div className={page === "리뷰" ? selectedBtn : normalBtn} onClick={() => setPage("리뷰")}>리뷰</div>
                </div>

            </div>
        </Layout>
    );
}
