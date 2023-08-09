import styled from 'styled-components'

export const Container = styled.div`
  margin-right: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  height: 380px;
  margin-bottom: 15px;

  @media (max-width: 1410px) {
    margin-left: -10px;
  }

  @media (max-width: 1349px) {
    margin-left: 40px;
  }

  @media (max-width: 1201px) {
    margin-left: 10px;
  }

  @media (max-width: 1105px) {
    margin-left: -10px;
  }

  @media (max-width: 485px) {
    margin-left: -30px;
  }

  @media (max-width: 420px) {
    height: 330px;
  }

  img {
    height: 155.92px;
    object-fit: contain;
    margin-bottom: 15px;

    @media (max-width: 570px) {
      width: 200px;
      height: 120px;
    }

    @media (max-width: 485px) {
      width: 180px;
      height: 100px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 16px;
    gap: 10px;
    font-family: 'Inter';

    div:first-child {
      display: flex;
      gap: 0.5rem;
      min-width: 224px;

      > p {
        padding: 6px 20px;
        background: #d93a1e;
        border-radius: 4px;
        color: white;
        font-weight: 600;
      }

      p:last-child {
        background: #313131;
        font-size: 1rem;
      }

      @media (max-width: 593px) {
        display: block;
      }

      > p {
        width: 80px;
      }

      p:last-child {
        width: 150px;
      }

      @media (max-width: 486px) {
        > p {
          font-size: 13px;
          width: 70px;
        }

        p:last-child {
          font-size: 0.8rem;
          width: 130px;
        }
      }
    }

    h4 {
      font-weight: 400;
      font-size: 14px;
      min-width: 132px;
    }

    > p {
      font-size: 12px;
      color: rgba(49, 49, 49, 0.5);
      text-decoration-line: line-through;
    }

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;

      p {
        font-weight: 600;
        font-size: 16px;
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 25px;
        position: relative;

        span {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          font-size: 0.97rem;
          font-weight: 600;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e03131;
        }

        @media (max-width: 485px) {
          font-size: 20px;
        }
      }

      @media (max-width: 533px) {
        width: 170px;
      }

      @media (max-width: 485px) {
        width: 150px;
      }
    }

    p:last-child {
      font-size: 12px;
      text-decoration-line: none;
      color: #000;
      min-width: 123px;
    }
  }
`
