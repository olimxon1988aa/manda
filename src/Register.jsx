import React from 'react'
import { Description,  Wrapper, Title, InputWrapper, Input,  UserIcon, Button  } from './style';


function App(){
    return(
        < Wrapper>
           <Description>
              Don't have and Acaunt
            </Description>
            <Title>Register Now</Title>
            <InputWrapper>
             <UserIcon />
            <Input  placeholder="Pasword"/>
            </InputWrapper>
            <InputWrapper>
             <UserIcon />
            <Input  placeholder="Pasword"/>
            </InputWrapper>
            <InputWrapper>
             <UserIcon />
            <Input  placeholder="Pasword"/>
            </InputWrapper>
   
        <Button>Log In</Button>
        </Wrapper>

            
            
      );
}
export default App