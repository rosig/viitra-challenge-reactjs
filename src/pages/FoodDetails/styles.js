import styled from 'styled-components';

export const FoodDetailsContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px 0px 0px calc((100% - 1280px)/2);
  background-image: linear-gradient(#c72828, #c72828 277px, transparent 1rem, transparent 100%);
  overflow: hidden;

  .food-icon {
    margin-top: 50px;
    color: #fff;
  }

  .food-wrap {
    width: 1280px;
    height: 483px;
    display: flex;
    margin: 50px 0 0 0;
  }

  .food-infos {
    width: 1009px;
    height: 483px;
    padding: 50px;
    background: #f0f0f5;
    border-radius: 8px 0 0 8px;
    color: #3d3d4d;

    h1 {
      margin-bottom: 20px;
    }

    h3 {
      font-weight: 600px;
    }
  }

  .food-description {
    margin-bottom: 150px;
  }

  .food-price {
    font-style: normal;
    font-size: 30px;
    color: #39b100;
  }

  .food-img {
    width: 271px;
    height: 483px;

    img {
      position: relative;
      top: 106px;
      right: 106px;
      width: 483px;
      transform: rotate(90deg);
    }
  }

  h2 {
    text-align: center;
  }
`;