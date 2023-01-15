import "./button.scss";
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: #4a026b;

  height: 50px;
  border-radius: 10px;
  margin: -20px 10px;
  color: white;
  text-align: center;
  padding: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return (
    <ButtonContainer 
      //className="btn" 
      onClick={onClick}>
         {children}
    </ButtonContainer>
  );
};

export default Button;
