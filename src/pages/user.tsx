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

    const normalBtn = "flex justify-center items-center sm:basis-1/4 sm:h-[66px] h-[45px] sm:px-0 px-[14px] hover:bg-s2xyoon-gray cursor-pointer";
    const selectedBtn = "flex justify-center items-center sm:basis-1/4 sm:h-[66px] h-[45px] sm:px-0 px-[14px] text-white bg-[#333333] cursor-pointer";

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="flex md:flex-row flex-col justify-center w-full max-w-[1920px] sm:pt-[50px] pt-[30px] md:pb-[60px] md:space-x-[16px] md:space-y-0 sm:space-y-[40px] space-y-[30px]">
                    <div className="md:w-[814px] md:h-[526px] h-[640px] rounded-[10px] bg-[url('./assets/images/mainModel.png')] bg-center bg-no-repeat bg-cover shadow-[0px_3px_10px_rgba(0,0,0,0.16)]"></div>
                    <div className="relative md:w-[482px] sm:h-[526px] h-[602px] sm:p-[30px] p-[20px] flex flex-col rounded-[10px] shadow-[0px_3px_10px_rgba(0,0,0,0.16)]">
                        <div className="flex flex-row md:space-x-[20px] sm:space-x-[30px] space-x-[20px] mb-[30px] relative">
                            <div className="h-[97px] w-[97px] bg-gray-200 rounded-full"></div>
                            <div className="flex flex-col justify-center space-y-[25px] grow">
                                <p className="font-NanumSquareNeoEb text-[18px]">shinQua</p>
                                <div className="flex flex-row font-NanumSquareNeoBd text-[15px] flex-wrap md:justify-between md:space-x-0 sm:space-x-[50px] space-x-[30px]">
                                    <div className="flex sm:flex-row flex-col space-x-[10px]"><p>포트폴리오</p><p className="font-NanumSquareNeoHv">123</p></div>
                                    <div className="flex sm:flex-row flex-col space-x-[10px]"><p>커미션</p><p className="font-NanumSquareNeoHv">123</p></div>
                                    <div className="flex sm:flex-row flex-col space-x-[10px]"><p>팔로우</p><p className="font-NanumSquareNeoHv">123</p></div>
                                </div>
                            </div>
                            <img className="sm:h-[30px] h-[24px] sm:w-[30px] w-[24px] absolute border-none top-0 right-0 cursor-pointer" src={like ? ActiveHeart : hover ? HoverHeart : Heart} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} onClick={() => setLike(!like)} />
                        </div>
                        <div className="font-NanumSquareNeoRg sm:h-[159px] h-[238px] text-[15px] mb-[40px] leading-[30px]">
                            <p>강원도의 자랑, 영월의 아들, 한반도면 골목대장 신규화입니다.</p>
                            <p>🚩 Unity, Blender, VRC  Expert</p>
                            <p>🚩 TFT Platinum, League of Legend Iron 계정 보유중</p>
                            <p>🚩 짐볼 판매중</p>
                            <p>🚩 맞짱 신청은 정중하게 DM으로 부탁드립니다🙏🙏🙏🙏</p>
                        </div>
                        <div className="flex flex-row space-x-[10px] justify-end mb-[20px] font-NanumSquareNeoRg sm:text-[15px] text-[13px]">
                            <div className="px-[20px] py-[10px] bg-[#E9E9E9] rounded-full">VRC</div>
                            <div className="px-[20px] py-[10px] bg-[#E9E9E9] rounded-full">blender</div>
                            <div className="px-[20px] py-[10px] bg-[#E9E9E9] rounded-full">이세계아이돌</div>
                        </div>
                        <div className="flex justify-center items-center h-[47px] bg-[#333333] rounded-[10px] font-NanumSquareNeoBd text-[18px] text-white cursor-pointer">문의하기</div>
                        <div className="absolute flex justify-center md:w-[422px] w-[calc(100%-60px)] sm:bottom-[4px] bottom-[14px]">
                            <div className="inline-flex justify-center items-end sm:w-[368px] w-[296px] h-[71px] pb-[20px] sm:bg-[url('./assets/images/slotLg.png')] bg-[url('./assets/images/slotSm.png')] font-NanumSquareNeoBd text-[15px] text-center align-text-bottom">
                                <span>현재 2개의 슬롯이 남아있어요</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* <div className="h-[100px] w-screen border-y-[1px] border-s2xyoon-gray"></div> */}
                <div className="pt-[60px] pb-[50px] flex justify-center w-full md:w-[1312px] md:space-x-[16px] md:px-0 sm:px-[30px] px-[20px]  font-NanumSquareNeoEb md:text-[22px] text-[18px]">
                    <div className={page === "설명" ? selectedBtn : normalBtn} onClick={() => setPage("설명")}>설명</div>
                    <div className={page === "포트폴리오" ? selectedBtn : normalBtn} onClick={() => setPage("포트폴리오")}>포트폴리오</div>
                    <div className={page === "가격정보" ? selectedBtn : normalBtn} onClick={() => setPage("가격정보")}>가격정보</div>
                    <div className={page === "리뷰" ? selectedBtn : normalBtn} onClick={() => setPage("리뷰")}>리뷰</div>
                </div>

            </div>
        </Layout>
    );
}
