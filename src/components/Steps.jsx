import './Steps.css'
import { GoPerson } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';
import { GrSend } from 'react-icons/gr';

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
          <div className="box active">
            <GoPerson/>
            <p>Identificação</p>
          </div>
          <div className={`box ${currentStep >= 1 ? 'active': ''}`}>
            <AiOutlineStar/>
            <p>Avaliação</p>
          </div>
          <div className={`box ${currentStep >= 2 ? 'active': ''}`}>
            <GrSend/>
            <p>Envio</p>
          </div>
        </div>
  )
}

export default Steps