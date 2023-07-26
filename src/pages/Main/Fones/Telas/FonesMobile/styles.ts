import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
}

export const Container = styled.div<ContainerProps>`
  > p {
    width: 100%;
    padding: 32px 40px;
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      background: #3877c9;
      border-radius: 8px;
      width: 80px;
      height: 30px;
      color: white;
      border: none;
      font-weight: 500;
      font-size: 0.9375rem;
    }

    div {
      display: none;

      section {
        width: 255px;
        display: flex;
        justify-content: flex-end;
        padding-right: 25px;

        svg {
          color: #fff;
          height: 30px;
          margin-top: 15px;
          cursor: pointer;
        }
      }

      h3:nth-child(2) {
        text-align: center;
        color: #fff;
        margin-top: 10px;
      }

      > h3 {
        color: #fff;
        margin-bottom: 10px;
        margin-top: 15px;
        margin-left: 15px;
      }

      label {
        color: white;
        gap: 7px;
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      > div {
        div {
          display: block;

          label {
            display: flex;
          }

          @media (max-width: 420px) {
            svg {
              margin-left: 155px;
            }
          }
        }
      }

      > div {
        div {
          background-color: #313131;
          position: fixed;
          height: 100%;
          top: 0px;
          left: 0px;
          width: 255px;
          animation: showSidebar 0.4s;
          z-index: 1;

          @keyframes showSidebar {
            from {
              opacity: 0;
              width: 0;
            }
            to {
              opacity: 1;
            }
          }

          @media (max-width: 420px) {
            width: 200px;
          }
        }
      }
    `}
`

export const Content = styled.section`
  width: 200px;

  label {
    font-weight: 600;
    font-size: 16px;
    margin-right: 8px;
  }

  select {
    width: 200px;
    height: 30px;
    background: #ffffff;
    border: 2px solid rgba(158, 158, 158, 0.87);
    border-radius: 8px;
    cursor: pointer;
    margin-right: 24px;
    font-size: 14px;
    font-weight: 400;
    color: #313131;
    padding: 0 10px;
  }

  input {
    width: 200px;
    height: 30px;
    background: #ffffff;
    border: 2px solid rgba(158, 158, 158, 0.87);
    border-radius: 8px;
    padding: 0 10px;
    margin-top: 5px;

    &::-webkit-input-placeholder {
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      color: #989898;
    }
  }
`

export const Celulares = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 50px;

  > p {
    text-align: center;
    height: 150px;
    margin-top: 50px;
  }
`
