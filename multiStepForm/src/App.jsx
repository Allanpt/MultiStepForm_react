import './App.css'
import { GrCaretPrevious } from 'react-icons/gr';
import { GrCaretNext } from 'react-icons/gr';
import { LuSend } from 'react-icons/lu';

import IdentityForm from './components/IdentityForm'
import ReviewForm from './components/ReviewForm'
import SendForm from './components/SendForm'
import Steps from './components/Steps';

// Custom Hook
import { useForm } from './hooks/useForm';
import { useState } from 'react';

const formObjectTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  const [data, setData] = useState(formObjectTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <IdentityForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <SendForm data={data} updateFieldHandler={updateFieldHandler}/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)


  return (
    <div className='container'>
      <h1>Como foi a sua experência? Deixe sua avaliação!</h1>
      <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <main>{currentComponent}</main>
          <div className="buttons">
            {!isFirstStep && (
              <button type='button' onClick={(e) => changeStep(currentStep - 1, e)}>
                <GrCaretPrevious/>
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrCaretNext/>
            </button>
            ) : (
              <button type='submit'>
                <span>Enviar</span>
                <LuSend/>
            </button>
            )}
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default App
