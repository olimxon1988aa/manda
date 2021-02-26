import React from 'react'
import { Description, Title, Wrapper, Forget, Block, Span, Button, CheckBox, InputWrapper, Input, UserIcon }  from './style'


function App(){
    return(
        <Wrapper>
            <Description>
              Already have and Acaunt
            </Description>
            <Title>Log in Her</Title>
            <InputWrapper>
              <UserIcon />
              <Input  placeholder="Username"/>
            </InputWrapper>
            <InputWrapper>
               <UserIcon />
               <Input  placeholder="Pasword"/>
            </InputWrapper> 
            <Block>
            <Span>
              <CheckBox type="checkbox" />
              Keep me loged in 
           </Span>  
              <Button select >Log In</Button>
            </Block>

             <Forget>Forget Pasword</Forget>   
        </Wrapper>
    )
}
export default App; 