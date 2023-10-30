import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 0.2em solid #318CE7;
  border-top: 0.2em solid #7FFFD0;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ${spin} 0.6s linear infinite;
`

export default Loader
