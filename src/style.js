import  styled from 'styled-components'
import { ReactComponent as User } from './icon/user.svg'

  export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #2A393E;
   width: 100%;
   height: 100vh;
   color: white;
  `  
  export const Wrapper = styled.div`
    width: 360px;
    height: fit-content;
    border: 2px solid #445859;
    margin: 10px;
    padding: 30px;
    border-radius: 5px; 
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  `

  export const Description = styled.div`
  color: white;
  font-white: 700;
  font-size: 20px;
 
  `
  export const Title = styled.div`
  color: #E7C961;
  font-size:20px;
  `

  export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  `

  export const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background-color: rgba(104, 105, 102, .1);
  border: 1px solid #354545;
  margin-top: 15px;
  outline: none;
  padding-left: 45px;
  color: white;
  font-size: 22px;
  `
  export const UserIcon = styled(User)`
  width: 200px;
  position: absolute;
  top: 45%;
  margin-left: -70px;
  
  `

  export const Button = styled.button`
  width: 123px;
  height: 45px;
  background: #00908D;
  color: white;
  font-weight: 700; 
  font-size: 22px;
  margin-top: 20px;
  margin-left: auto;
  border: 0px;
  outline: none;
  border-radius: 4px;
  `

  export const Block = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  `

  export const CheckBox = styled.input`
  width: 50px;
  height: 45px;
  background-color: rgba(104, 105, 102, .1);
  border: 1px solid #354545;
  margin-right: 10px;

  `

  export const Span = styled.span`
  display: flex;
  width: 120px;
  justify-content: center;
  align-items: center;  
  
  `

  export const Forget = styled.div`
  margin-left: auto;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  font-weight: 400
  `
  

  
  
 