import styled from 'styled-components'
import Layouts from '../../components/Static/Layouts/index'
const Home = () => {

    return (
      <Wrapper >
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
    background: whitesmoke;
`