import { useEffect, useState } from "react";

export type Props = {
    totalPage: number;
    pageIndex: number;
    setPageIndex: (page: number) => void;
  };
  
  export default function Pagination({
    totalPage,
    pageIndex,
    setPageIndex,
  }: Props) {
    
    let arr: Array<any> = [];
    const [pageNums, setPageNums] = useState(arr);

    useEffect(() => {
        const temp = [];
        for(let i = 0; i < totalPage; i++)
            temp.push(i+1);

        setPageNums(temp);
    }, [totalPage]);
  
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" onClick={() => {pageIndex !== 1 && setPageIndex(pageIndex - 1)}}><i className="fas fa-chevron-left"></i></a>
                </li>

                {pageNums.map((num: number) => (
                    <li className={pageIndex === num ? "page-item active" : "page-item"} key={num}><a className="page-link" onClick={() => setPageIndex(num)}>{num}</a></li>
                ))}

                <li className="page-item">
                    <a className="page-link" onClick={() => {pageIndex !== totalPage && setPageIndex(pageIndex + 1)}}><i className="fas fa-chevron-right"></i></a>
                </li>
            </ul>
        </nav>

    );
  }