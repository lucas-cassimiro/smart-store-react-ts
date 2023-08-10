import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div:first-child {
    display: flex;
    background-color: #3877c9;
    width: 100%;
    height: 2.125rem;
    color: #fff;
    align-items: center;

    p {
      width: 60%;
      display: flex;
      justify-content: flex-end;
      font-size: 0.8rem;

      span {
        color: #faff00;
        margin-left: 3px;
      }
    }

    a {
      display: flex;
      justify-content: flex-end;
      margin: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
      width: 40%;
    }

    @media (max-width: 500px) {
      p {
        font-size: 0.7rem;
      }

      a {
        font-size: 0.8rem;
      }
    }

    @media (max-width: 430px) {
      p {
        font-size: 0.5rem;
      }

      a {
        font-size: 0.6rem;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #313131;
    height: 3.5625rem;
    position: relative;

    > div:first-child {
      color: #a0a0a0;
      display: flex;
      align-items: center;
      margin-left: 2rem;
      width: 33.3%;
      gap: 8px;

      aside {
        display: none;
      }

      aside {
        display: flex;
        background-color: #313131;
        position: fixed;
        height: 100%;
        top: 0px;
        left: 0px;
        width: 255px;
        animation: showSidebar 0.4s;
        z-index: 9999;

        svg {
          position: fixed;
          color: white;
          height: 30px;
          display: flex;
          margin-top: 25px;
          margin-left: 40px;
          cursor: pointer;
        }
      }

      a {
        color: #a0a0a0;
        cursor: pointer;
        font-weight: 400;
        font-size: 16px;
      }

      img {
        width: 15px;
      }

      @media (max-width: 768px) {
        display: none;

        aside {
          display: none;
        }
      }

      @media (max-width: 675px) {
        margin-left: 0.5rem;
        align-items: center;

        img {
          height: 17px;
          width: 12px;
        }
      }

      @media (max-width: 500px) {
        margin-left: 0.5rem;
        align-items: center;

        a {
          font-size: 13px;
        }

        img {
          height: 17px;
          width: 12px;
        }
      }

      @media (max-width: 420px) {
        a {
          font-size: 10px;
        }
      }
    }

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    h1 a {
      -webkit-text-stroke: 1px #074291;
      font-family: 'Lobster';
      color: #fff;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 30px;
      display: flex;
      justify-content: center;

      @media (max-width: 768px) {
        font-size: 35px;
      }

      @media (max-width: 430px) {
        font-size: 30px;
      }
    }

    div:last-child {
      display: flex;
      justify-content: flex-end;
      margin-right: 0.7rem;
      gap: 16px;
      width: 33.3%;
      position: relative;

      section {
        position: absolute;
        left: 5px;
        bottom: 5px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        font-size: 14px;
        font-weight: 900;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
      }
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      @media (max-width: 768px) {
        width: 0;

        section {
          left: -5px;
        }
      }
    }
  }

  nav {
    > div {
      display: none;
    }

    width: 100%;
    background-color: #313131;
    border-top: 0.0625rem solid;

    button {
      display: none;
      background-color: transparent;
      border: none;
      margin-left: 20px;
      font-size: 20px;
      color: #ffffff;
      cursor: pointer;

      aside {
        display: none;
      }

      aside {
        display: flex;
        flex-direction: column;
        background-color: #313131;
        position: fixed;
        height: 100%;
        top: 0px;
        right: 0px;
        width: 255px;
        animation: showSidebar 0.4s;
        z-index: 999;

        svg {
          color: #ffffff;
          height: 30px;
          display: flex;
          margin-top: 25px;
          margin-left: 40px;
          cursor: pointer;
        }

        @media (max-width: 500px) {
          width: 200px;
        }
      }
      ul {
        display: block;
      }
    }

    ul {
      display: flex;
      justify-content: space-evenly;
      height: 3rem;
      align-items: center;
      font-size: 1.1rem;

      li {
        a {
          color: white;
          font-weight: 600;

          &:hover {
            border-bottom: 2px solid #fff;
            font-weight: 700;
          }
        }
      }
    }

    @media (max-width: 768px) {
      > div {
        display: flex;
        gap: 8px;
        margin-left: 20px;
        color: #a0a0a0;

        aside {
          display: flex;
          background-color: #313131;
          position: fixed;
          height: 100%;
          top: 0px;
          left: 0px;
          width: 255px;
          animation: showSidebar 0.4s;
          z-index: 9999;

          svg {
            position: fixed;
            color: white;
            height: 30px;
            display: flex;
            margin-top: 25px;
            margin-left: 40px;
            cursor: pointer;
          }
        }

        a {
          color: #a0a0a0;
          cursor: pointer;
          font-weight: 400;
          font-size: 16px;
        }

        @media (max-width: 550px) {
          a {
            font-size: 13px;
          }
        }

        @media (max-width: 330px) {
          a {
            font-size: 10px;
          }
        }
      }

      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      ul {
        display: none;
      }

      button {
        display: flex;
        align-items: center;
        margin-right: 1.3rem;
      }
    }
  }
`
