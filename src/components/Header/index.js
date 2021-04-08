import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 16vh;
    display: flex;
    flex-direction: column;
`;

Header.Top = styled.div`
    height: 75%;
    background-color: #F6C8CA;
`;

Header.Bottom = styled.div`
    height: 25%;
    background-color: #609694;
`;

export default Header;
