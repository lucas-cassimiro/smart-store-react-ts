import styled from "styled-components"

export const Container = styled.div`
  .MuiRating-root, span {
    color: #FAFF00;
    gap: 12px;
    border: red;
  }

  @media (max-width: 485px) {
     .MuiRating-root, span {
      gap: 5px;
      font-size: 20px;
     }
  }

`
