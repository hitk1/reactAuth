import React, { useState, useCallback, useEffect } from 'react';
import reactLogo from '../../assets/react-logo.png'
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup'

import api from '../../services/api'
import {
  Container,
  LeftContainer,
  RightContainer,
  FooterScrim,
  FormContainer,
  ErrorMessage,
} from './styles';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const history = useHistory()

  //Toda vez que essa pagina é recarregada, o localStorage é limpado
  useEffect(() => localStorage.clear(), [])

  const schema = yup.object().shape({
    email: yup.string().email().required('O email é obrigatório'),
    password: yup.string().required().min(6).max(10)
  })

  const handleSubmit = useCallback(async event => {
    event.preventDefault()

    schema.validate({ email, password })
      .then(json => {
        
        api.post('/auth', json).then(result => {
          localStorage.setItem('userAuth', result.data.data)
          history.push('/home')
        }).catch(error => {
          alert(`Ocorreu um erro na sua atenticação: ${error.message}`)
        })

      })
      .catch(error => {

        if (error.message.indexOf('email') != -1)
          setEmailError(error.message)
        else
          setPasswordError(error.message)
      })

  }, [email, password])

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
          <img alt='ReactJS Logo' src={reactLogo} width={100} height={60} />
          <h1>Junte-se a nossa comunidade!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sint molestias illum sit. Iure perferendis reiciendis, recusandae libero vitae cupiditate ex placeat totam in ipsa repudiandae porro fugiat dignissimos vero.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              maxLength={100}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailError('')}
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              value={password}
              maxLength={10}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordError('')}
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

            <button type="submit">Entrar</button>
          </form>

          <section>
            <p>Não possui conta?</p>
            <Link to='/register'>Cadastre-se</Link>
          </section>

        </FormContainer>
      </RightContainer>
    </Container>
  )
}