import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Layouts from '../../components/Static/Layouts/index'
const Home = () => {
    const backgroundType = useSelector((state) => state.background.backgroundType)

    return (
      <Wrapper  style={{background: backgroundType ? "black" : "whitesmoke"}}>
        <Layouts />
      </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`