import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  max-height: 20rem;
  background-color: #dcdcdc;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 32px 0;
  font-family: ${({ theme }) => theme.fontFamily.fontText};

  ul:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li {
      border-bottom: 1px solid rgba(49, 49, 49, 0.5);
      width: 173px;
      margin-left: 30px;

      a {
        font-size: 24px;
        font-weight: 600;
        color: #000000;
      }
    }
  }

  ul:nth-child(2) {
    div {
      border-bottom: 1px solid rgba(49, 49, 49, 0.5);
      width: 533px;

      h1 {
        font-weight: 600;
        font-size: 24px;
      }
    }

    .div {
      display: flex;
      border: none;

      div {
        border: none;
        margin-top: 8px;

        li {
          margin-bottom: 16px;
        }
      }
    }
  }

  div:nth-child(3) {
    display: flex;
    flex-direction: column;
   // background: green;
    height: 100px;

    h2 {
      margin-bottom: 16px;
    }

    span {
      margin-bottom: 8px;
    }
  }

  div:last-child {
    h2 {
      margin-bottom: 16px;
    }

    h3 {
      margin-bottom: 16px;
    }

    div {
      img {
        width: 35px;
        height: 35px;
        border-radius: 8px;
        margin-bottom: 16px;
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 1024px) {
    justify-content: space-between;
    ul:first-child {
      li {
        width: 140px;

        a {
          font-size: 20px;
        }
      }
    }

    ul:nth-child(2) {
      div {
        width: 400px;

        h1 {
          font-size: 18px;
        }

        a {
          font-size: 14px;
        }
      }
    }

    div:nth-child(3) {
      h2 {
        font-size: 18px;
      }

      span {
        font-size: 14px;
      }
    }

    div:last-child {
      h2 {
        font-size: 18px;
      }

      h3 {
        font-size: 16px;
        padding-right: 8px;
      }

      img {
        width: 130px;
      }

      div {
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    ul:nth-child(2) {
      div {
        width: 140px;
      }
      .div {
        div:first-child {
          display: none;
        }
      }
    }
  }

  @media (max-width: 420px) {
    padding: 32px 0;
    height: 23rem;
    justify-content: space-around;

    ul:first-child {
      gap: 8px;

      li {
        width: 127px;
      }
    }

    ul:nth-child(2) {
      display: none;
    }

    div:nth-child(3) {
      display: flex;
      align-self: center;

      span {
        width: 150px;
      }
    }

    div:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
    }
  }
`
