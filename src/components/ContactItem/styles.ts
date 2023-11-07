import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: ${variaveis.azul};
  border-radius: 25px;
  display: flex;

  h3 {
    display: flex;
    font-size: 20px;
    margin-bottom: 25px;
    color: ${variaveis.branco};
    cursor: pointer;
  }
`

export const ContactImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
`

export const ContactName = styled.h2`
  font-size: 16px;
`

export const ContactButton = styled.button`
  display: flex;
  font-size: 15px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: ${variaveis.verde};
  color: ${variaveis.preto};
  border: none;
  border-radius: 10px;
`

export const EmailButton = styled(ContactButton)`
  background-color: ${variaveis.amarelo};
`

export const RemoveButton = styled.span`
  position: absolute;
  right: 10px;
  top: 5px;
  padding: 13px;
  color: ${variaveis.branco};
  cursor: pointer;
`
