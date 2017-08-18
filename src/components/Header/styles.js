import styled from 'styled-components'

const HeaderElement = styled.header `
  background: url('../../images/bg-header.jpg') no-repeat center center;
  background-size: contain;
  text-align: center;
  height: 100%;
  display: flex;
  padding: 20px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
`

const MainTitle = styled.h1 `font-size: 4rem;`
const SubTitle = styled.h2 `font-size: 2rem;`

export { HeaderElement, MainTitle, SubTitle }
