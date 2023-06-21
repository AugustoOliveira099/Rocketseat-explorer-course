import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'

export  function Details() {
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi aspernatur consectetur illo excepturi consequatur doloribus quos dignissimos voluptatum corporis nostrum odit harum, placeat quasi expedita fuga amet nisi ea?</p>
          
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://web.whatsapp.com/</a></li>
              <li><a href="#">https://web.whatsapp.com/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="nodejs"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}