import { ImSpinner5 } from 'react-icons/im';
import styled from 'styled-components';

const IsLoading = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: gray;
font-size: 1.5em;
`

export default function FullPageLoader() {
  return(
    <IsLoading>Loading...</IsLoading>
  )
}