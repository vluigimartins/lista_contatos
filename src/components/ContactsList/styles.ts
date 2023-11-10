import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  width: 1024px;
  margin: 100px auto;
  background-color: ${variaveis.cinza};
  padding: 50px;
  border-radius: 25px;

  .container-pesquisa {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 24px;
    margin-top: 6px;
    border-radius: 25px;
    background-color: ${variaveis.branco};
    padding: 5px;
  }

  .container-option {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    margin-top: 50px;
  }
`

export const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  margin-bottom: 35px;
`

export const SearchInput = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 16px;
  background-color: ${variaveis.branco};
  border: none;
  margin-left: 4px;
  border-radius: 5px;
  outline: 0;
`

export const ButtonAdd = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: ${variaveis.preto2};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  border-radius: 25px;
  margin-bottom: 15px;
  text-decoration: none;
`

export const ContactsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  width: 100%;
  margin-top: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`
