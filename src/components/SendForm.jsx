import './SendForm.css'
import Emoji from './Emoji'

const SendForm = ({data}) => {

  const emojiData = {
    unsatisfied: <Emoji symbol='😞'/>,
    neutral: <Emoji symbol='😐'/>,
    satisfied: <Emoji symbol='🙂'/>,
    love: <Emoji symbol='😍'/>,
  };
  
  

  return (
    <div>
        <div className="discount-container">
          <h2>Falta pouco...</h2>
          <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
          <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
          <div className="summary">
            <h3>Aqui está o resumo da sua avaliação {data.name} :</h3>
            <h4>Satisfação com o produto: {emojiData[data.review]}</h4>
            <h4>Comentário: <p>{data.comment}</p></h4>
          </div>
        </div>
    </div>
  )
}

export default SendForm