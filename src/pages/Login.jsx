import Navbar from '../components/Navbar'
import Forms from '../components/Forms'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div data className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <Forms mainText='Login' altText='Insira seus Dados' />
        <a href="/Register" className='text-[var(--color-white)] text-xl underline '><p>Não se registrou?</p></a>
      </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Login