import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";
const faker = require('faker-br')




export default function ListaPessoas() {
    const [pessoas, setPessoas] = useState([{
        nome: "Maria",
        id: faker.random.uuid()
    }, {
        nome: "João",
        id: faker.random.uuid()
    }])

    let meuNome = faker.name.firstName()

    const deletarPessoa = useCallback((id) => {
        setPessoas(ListaAnterior => ListaAnterior.filter((pessoa)=> pessoa.id !== id))
    }, []);

  return (
    <div className="has-text-centered">
    <ul>
        {
            pessoas.map( (pessoa ) =>{
              return  <Pessoa key={pessoa.id} {...pessoa} deletar={deletarPessoa} />
            })
        }  
    </ul>
    <button className="button is-primary is-outlined" onClick={()=> setPessoas((ListaAnterior)=> ([...ListaAnterior, {
        nome: meuNome,
        id: faker.random.uuid()
    }]))} >
        Adicionar pessoa 
    </button>
    </div>
  );
}
