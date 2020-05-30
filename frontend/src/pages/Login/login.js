import React, { useState, useCallback } from 'react';
import reactLogo from '../../assets/react-logo.png'

import {
  Container,
  LeftContainer,
  RightContainer,
  FooterScrim,
  FormContainer,
} from './styles';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = useCallback(value => {

  }, [])

  return (
    <Container>
      <LeftContainer>
        <FooterScrim>
          <h3>Página de exemplo de autenticação</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis autem dolores ex. Modi quos voluptatem neque at, in provident commodi. Commodi esse incidunt consequuntur ex, assumenda totam cum mollitia tenetur.</p>
        </FooterScrim>
      </LeftContainer>
      <RightContainer>
        <FormContainer>
          <img alt='ReactJS Logo' src={reactLogo} width={200} height={150} />
          <h1> Junte-se a nossa comunidade!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint molestias illum sit. Iure perferendis reiciendis, recusandae libero vitae cupiditate ex placeat totam in ipsa repudiandae porro fugiat dignissimos vero.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" >Email</label>
            <input
              type="email"
              name="email"
              value={email}
              maxLength={100}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              value={password}
              maxLength={15}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>

        </FormContainer>
      </RightContainer>
    </Container>
  )
}