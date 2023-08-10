import styled from "styled-components"

export const Container = styled.div`
  .MuiRating-root {
    color: #FAFF00;
    gap: 12px;
    border: red;
  }

  @media (max-width: 525px) {
    .jsikzf >div div:first-child {
      min-width: 0;
    }
  }

  @media (max-width: 485px) {
     .MuiRating-root, span {
      gap: 5px;
      font-size: 20px;
     }
  }

`
