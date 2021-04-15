// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// // import Link from 'next/link';

// const Title = styled.h1`
// display:flex;
// justify-content:center;
// align-items:initial;
// display:flex;
// margin-left:5%;
// margin-top:2%;
// margin-bottom:1%;
// font-family: Roboto;
// `;
// // const YourSpace = styled.button`
// //     display:flex;
// //     flex-direction:row;
// //     align-items:center;
// //     justify-content:center;
// //     width: 10%;
// //     height:20px;
// //     font-family: Roboto;
// //     font-size: 20px;
// //     font-weight: 300;
// //     background-color: ${({ theme }) => theme.colors.mediumGreen};
// //     color: white;
// //     border: 0;
// //     border-radius: 5px;
// //     cursor:pointer;
// //     @media(max-width: 800px){
// //         display:none;
// //         background-color:red;
// //     }
// // `;

// const Perfil = () => {
//   useEffect(() => {
//     // const width = window.innerWidth;
//     // const isMobile = width <= 500;
//   });

//   if (isMobile) {
//     return (
//       <div>

//         <p>Meu Perfil Mobile</p>

//       </div>

//     );
//   }
//   return (
//     <div>

//       <Title>Meu Perfil:</Title>

//     </div>
//   );
// };

// export default Perfil;

// // export default function Perfil() {
// //   return (
// //     <div>
// //       <Title>Titulo em web</Title>
// //       <YourSpace>MATHEUS</YourSpace>
// //     </div>
// //   );
// // }

import React from 'react';
import styled from 'styled-components';
import MySellerRequest from '../../../../src/components/MySellerRequest';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;

export default function MyDatasMobile() {
  return (
    <div>
      <Container>
        <MySellerRequest />
      </Container>
    </div>
  );
}
