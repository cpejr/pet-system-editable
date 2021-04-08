import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 16vh;
    display: flex;
    flex-direction: column;
`;

Header.Top = styled.div`
    display: flex;
    flex-direction: row;
    height: 75%;
    background-color: #F6C8CA;
`;

Header.Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;  // space evenly
    height: 25%;
    background-color: #609694;
`;

export default Header;
