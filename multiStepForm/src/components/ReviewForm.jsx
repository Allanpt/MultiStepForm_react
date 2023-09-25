import Emoji from './Emoji'
import './ReviewForm.css'

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
        <div className="form-control score-container">
          <label className="radio-container">
            <input type="radio" name="review" id="unsatisfied" value='unsatisfied' checked={data.review === 'unsatisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)}/>
            <Emoji symbol='😞'/>
            <p>Insatisfeito(a)</p>
          </label>
          <label className="radio-container">
            <input type="radio" name="review" id="neutral" value='neutral' checked={data.review === 'neutral'} onChange={(e) => updateFieldHandler('review', e.target.value)} />
            <Emoji symbol='😐'/>
            <p>Poderia ser melhor</p>
          </label>
          <label className="radio-container">
            <input type="radio" name="review" id="satisfied" value='satisfied' checked={data.review === 'satisfied'} onChange={(e) => updateFieldHandler('review', e.target.value)} required/>
            <Emoji symbol='🙂'/>
            <p>Satisfeito(a)</p>
          </label>
          <label className="radio-container ">
            <input type="radio" name="review" id="love" value='love' checked={data.review === 'love'} onChange={(e) => updateFieldHandler('review', e.target.value)} />
            <Emoji symbol='😍'/>
            <p>Adorei</p>
          </label>
          {/* <span role="img" aria-label="ola">🐑</span> */}
        </div>
        <div className="form-control comment">
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" id="comment" placeholder='Conte como foi sua experiência...' value={data.comment || ''} onChange={(e) => updateFieldHandler('comment', e.target.value)} required></textarea>
        </div>
    </div>
  )
}

export default ReviewForm