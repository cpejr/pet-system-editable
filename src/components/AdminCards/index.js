import React from 'react';
import styled from 'styled-components';
import { CgTikcode, CgShoppingCart, CgDollar } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:33,33%;
margin-right:7%;
 `;
Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:33,33%;
margin-right:7%;
   `;
Container.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:33,33%;
     `;

const Card = styled.button`
display:flex;
align-items:center;
justify-content:center;
border-width:1px;
cursor: pointer;
flex-direction:column;
background-color:${({ theme }) => theme.colors.background};
border-radius:10px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
width:100px;
height:140px;
`;
Card.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
Card.Row2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

const Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom:30%;
`;
const Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

export default function AdminCards() {
  return (
    <div>
      <Container>
        <Container.Col1>
          <Row1>
            <Card>
              <Card.Row1>
                <CgTikcode size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Perfil de Controle
              </Card.Row2>
            </Card>
          </Row1>
          <Row2>
            <Card>
              <Card.Row1>
                <IoMdNotificationsOutline size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Notificações
              </Card.Row2>
            </Card>
          </Row2>
        </Container.Col1>
        <Container.Col2>
          <Row1>
            <Card>
              <Card.Row1>
                <HiOutlineHome size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Lojas Cadastradas
              </Card.Row2>
            </Card>
          </Row1>
          <Row2>
            <Card>
              <Card.Row1>
                <CgShoppingCart size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Vendas
              </Card.Row2>
            </Card>
          </Row2>
        </Container.Col2>

        <Container.Col3>
          <Row1>
            <Card>
              <Card.Row1>
                <CgDollar size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Comissões
              </Card.Row2>
            </Card>
          </Row1>
          <Row2>
            <Card>
              <Card.Row1>
                <FiUserPlus size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Solicitação de Lojas
              </Card.Row2>
            </Card>
          </Row2>
        </Container.Col3>
      </Container>

    </div>
  );
}
