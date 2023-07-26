import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(147.42deg, #000000 21.52%, #313131 165.15%);
  color: white;
  height: 28.125rem;
  cursor: pointer;
  margin-right: 10px;
  font-family: 'JejuGothic', sans-serif;

  div {
    width: 400px;
    height: 350px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-weight: 400;
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }

  p span {
    color: #93c1fd;
  }

  @media (max-width: 1255px) {
    div {
      img {
        width: 250px;
        height: 250px;
      }
    }
  }

  @media (max-width: 1120px) {
    height: 27rem;
    div {
      height: 21rem;
      img {
      }
    }
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    div {
      img {
        width: 230px;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      img {
        width: 210px;
        height: 210px;
      }
    }

    h2 {
      font-size: 25px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 671px) {
    height: 23rem;
    div {
      height: 17.5rem;
      img {
        width: 180px;
        height: 180px;
      }
    }

    h2 {
      font-size: 22px;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 570px) {
    height: 18rem;
    div {
      height: 14rem;
      img {
        width: 130px;
        height: 140px;
      }
    }
    h2 {
      font-size: 17px;
    }
    p {
      font-size: 12px;
    }
  }
`
