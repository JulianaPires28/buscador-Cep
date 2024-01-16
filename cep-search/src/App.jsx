import{useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './styles.css'
import api from './api'
function App() {

  const [input,setInput] = useState('')
  const [cep,setCep] = useState({})

   async function handleSearch(){
    console.log('isso é um teste');

    if(input === ''){
      return
    }
    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)


      console.log('response', response.data)
    }
    catch{
    //  alert("Erro ao realizar a busca.")
    }

  }

  console.log(handleSearch())

  return (
    <>
      <div className="container">
        <h1 className="title">Buscador cep</h1>

        <div className="containerInput">
          <input type="text"
          placeholder="Digite seu cep"
          value={input}
          onChange={(e)=> setInput(e.target.value) }
          
          />

          <button
          className="buttonSearch"
          onClick={handleSearch}>
            <FiSearch size={25} color='#FFF'/>
          </button>
        </div>

      {Object.keys(cep).length > 0  &&(
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>

      )}
        
        
      </div>
     
    </>
  )
}

export default App
