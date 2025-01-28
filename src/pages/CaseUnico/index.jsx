import { useParams } from 'react-router-dom'
import Transition from '../../transition'
import './caseunico.css'

const CaseUnico = () => {
    const { id, nome } = useParams()
return(
  <div className='grid-global'>
    <section className='container-caseunico'>
    <h1>casee id:{nome}</h1>
    </section>

  </div>
)
}
export default Transition(CaseUnico)