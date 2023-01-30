// const Header = () =>{
//     return(
//         <header id="header">
//             <h2>제이제이 바보 .</h2>
//         </header>
//     )
// }

// export default Header

import styled from "styled-components"

const Headerdiv = styled.div`
  color: #76ac3c; //텍스트 색상
  font-size: 52px; //텍스트 크기
  font-weight: bold; //텍스트 굵기
  text-align: center; //텍스트 정렬 방향
  height: 150px; //높이
  line-height: 100px; //줄간격
`;

const Header = () =>{
    return(
        <Headerdiv>
            <header id="header">
                <h1>Seul's Page-</h1>
            </header>
        </Headerdiv>
    )
}

export default Header