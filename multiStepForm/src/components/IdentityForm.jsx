import './IdentityForm.css'

const IdentityForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="box-input">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" value={data.name || ''} onChange={(e) => updateFieldHandler('name', e.target.value)} required />
        </div>
        <div className="box-input email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" value={data.email || ''} onChange={(e) => updateFieldHandler('email', e.target.value)} required />
        </div>
    </div>
  )
}

export default IdentityForm