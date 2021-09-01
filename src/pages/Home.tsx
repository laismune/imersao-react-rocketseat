import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
//import '../styles/auth.css'

export function Home () {
  return (
    <div className='page-auth'>
      <aside>
          <img src = {illustrationImg} alt="Ilustração simbolizando perguntas e respostas."/>
          <strong>Crise salas de Q&amp;A ao vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src = {logoImg} alt="Letmeask"/>
          <button>
            <img src = {googleIconImg} alt="Google"/> Crie sua sala com o Google
          </button>
          <div> Ou entre em uma sala
            <form>
              <input 
                type="text"
                placeholder="Digite o código da sala"
              />
              <button type='submit'> Entrar na Sala</button>
            </form>
          </div>

        </div>
      </main>
    </div>
  )
}