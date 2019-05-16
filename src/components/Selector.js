import styled from 'styled-components'
import React, { useState, useEffect } from "react";
import axios from 'axios'
import {SMALL} from '../libs/grid'

export const Selector = () => {

   const [select, setSelect] = useState({
      especie: false,
      tamanho: false,
      uf: [],
      ufSelecionado: false,
      cidadeSelecionada: false,
      cidade: []
   })

   let getEstados = async () => {
      let resp = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      setSelect({ ...select, uf: resp.data })
   }

   let getCidades = async () => {
      if (select.ufSelecionado){
         let resp = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${JSON.parse(select.ufSelecionado).id}/municipios`)
         setSelect({ ...select, cidade: resp.data })
      }
   }

   useEffect(() => {
      getEstados()
   }, [])

   useEffect(() => {
      getCidades()
   }, [select.ufSelecionado])

   return (
      <StyledSelector>
         <span className="titulo">Encontre Seu Novo Amigo</span>

         <div className="select-container">
            <select
               className="select-especie"
               value={select.especie}
               onChange={(event) => setSelect({ ...select, especie: event.target.value })}>
               <option value="todos">Ver Todos</option>
               <option value="cachorro">Cachorro</option>
               <option value="gato">Gato</option>
            </select>
            <select
               className="select-tamanho"
               value={select.tamanho}
               onChange={(event) => setSelect({ ...select, tamanho: event.target.value })}>
               <option value="qualquer">Qualquer Tamanho</option>
               <option value="grande">Grande</option>
               <option value="medio">Médio</option>
               <option value="pequeno">Pequeno</option>
            </select>

            <select
               className="select-uf"
               value={select.ufSelecionado}
               onChange={(event) => setSelect({ ...select, ufSelecionado: event.target.value })}>
               <option value={false} disabled>Estado</option>
               {select.uf.map(item => {
                  return (
                     <option key={item.sigla} value={JSON.stringify(item)}>{item.nome}</option>
                  )
               })}
            </select>

            <select
               className="select-cidade"
               value={select.cidadeSelecionada}
               onChange={(event) => setSelect({ ...select, cidadeSelecionada: event.target.value })} >
               <option value={false} disabled>Selecione o Estado</option>
               {select.cidade.map(item => {
                  return (
                     <option key={item.nome} value={JSON.stringify(item)}>{item.nome}</option>
                  )
               })}
            </select>
         </div>

      </StyledSelector>
   )
}

const StyledSelector = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .titulo{
        font-family: 'Roboto Slab', serif;
        margin-top: 20px;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    select{
        width: 200px;
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
    }

    .select-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
         .select-especie{
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            margin-right: 30px;
         }
         .select-tamanho{
            grid-row: 1 / 2;
            grid-column: 2 / 3;
         }
         .select-uf{
            grid-row: 2 / 3;
            grid-column: 1 / 2;
            margin-right: 30px;
         }
         .select-cidade{
            grid-row: 2 / 3;
            grid-column: 2 / 3;
         }
    }

    @media(max-width: ${SMALL}){
       .select-container{
          display: flex;
          flex-direction: column;
       }
    }
`