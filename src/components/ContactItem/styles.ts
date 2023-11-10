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

  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
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
  margin-left: 25px;

  .container-dados {
    width: 100%;
  }

  .container-telefone {
    display: flex;
    background-color: ${variaveis.verde};
    padding: 5px;
    margin-bottom: 8px;
    border-radius: 25px;
  }

  .container-email {
    display: flex;
    background-color: ${variaveis.amarelo};
    padding: 5px;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;

    .container-dados {
      width: 80%;
    }
  }
`

export const ContactName = styled.h3`
  background-color: ${variaveis.azul};
  font-size: 20px;
  margin-bottom: 25px;
  color: ${variaveis.branco};

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`

export const ContactButton = styled.input`
  display: flex;
  width: 100%;
  font-size: 15px;
  background-color: ${variaveis.verde};
  color: ${variaveis.preto};
  border: none;
`

export const EmailButton = styled(ContactButton)`
  background-color: ${variaveis.amarelo};
`

export const RemoveButton = styled.span`
  position: absolute;
  right: 0px;
  top: 5px;
  padding: 13px;
  color: ${variaveis.branco};
  cursor: pointer;
`

export const EditButton = styled.span`
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding: 13px;
  color: ${variaveis.branco};
  cursor: pointer;

  @media (max-width: 768px) {
    left: 0px;
    right: 100%;
    top: 0;
  }
`
