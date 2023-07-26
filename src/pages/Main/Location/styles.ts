import { styled } from "styled-components"

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  min-width: 255px;

  form {
    text-align: center;
    input {
     margin-top: 10px;
    }
  }

  li:last-child {
    margin-top: 15px;
  }
`
