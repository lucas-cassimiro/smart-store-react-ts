import styled from 'styled-components'

export const Container = styled.div`
  > p {
    width: 100%;
    padding: 32px 100px;
  }

  > div {
    display: flex;
    padding-left: 100px;
    padding-right: 100px;

    > div:first-child {
      margin-top: 80px;
      min-width: 223px;

      > h3 {
        margin-bottom: 24px;
      }

      p:nth-child(1n) {
        margin-bottom: 8px;
      }

      > div {
        display: flex;
        gap: 8px;
        margin-bottom: 24px;
      }

      div:nth-child(7) {
        flex-direction: column;
        input {
          accent-color: white;
        }

        input::before {
          color: red;
        }

        h4 {
          margin-bottom: 16px;
        }
      }
    }
  }

  .order {
    margin-left: 100px;
    width: 996px;
    min-width: 500px;

    > div:first-child {
      border-bottom: 1px solid black;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 980px;
      min-width: 400px;
      margin-bottom: 30px;

      label {
        font-weight: 600;
        font-size: 16px;
        margin-right: 8px;
      }

      select {
        width: 220px;
        min-width: 120px;
        height: 38px;
        background: #ffffff;
        border: 2px solid rgba(158, 158, 158, 0.87);
        border-radius: 8px;
        cursor: pointer;
        margin-right: 24px;
        font-size: 16px;
        font-weight: 400;
        color: #313131;
        padding: 0 10px;
      }

      input {
        max-width: 220px;
        min-width: 100px;
        height: 39px;
        background: #ffffff;
        border: 2px solid rgba(158, 158, 158, 0.87);
        border-radius: 8px;
        padding: 0 10px;

        &::-webkit-input-placeholder {
          font-size: 16px;
          font-weight: 400;
          font-style: italic;
          color: #989898;
        }
      }
    }

   > div:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 7px;

      > span {
        text-align: center;
      }
    }

    div:nth-child(3) {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
  }
`
