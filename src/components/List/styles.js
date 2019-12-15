import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #856a91;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  color: #f8f8f2;
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;