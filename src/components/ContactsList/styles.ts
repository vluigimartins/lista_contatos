import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  width: 1024px;
  margin: 100px auto;
  background-color: ${variaveis.cinza};
  padding: 50px;
  border-radius: 25px;

  .container-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  margin-bottom: 35px;
`

export const Label = styled.label`
  font-size: 22px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
  margin-bottom: 24px;
  margin-top: 6px;
  border-radius: 15px;
`

export const FilterSelect = styled.select`
  width: 20%;
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 15px;
  margin-top: 6px;
  margin-bottom: 28px;
  border-radius: 15px;
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
`
