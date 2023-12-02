import { useState } from 'react'
import Faq from './components/Faq'
import Header from './components/Header'
import data from './data'

function App() {
const [questions, setQuestions] = useState(data)

  return (
    <>
    <div className='bg-white w-full relative rounded-xl'>
      <Header />
      <h1 className=' uppercase text-3xl text-very-dark-desaturated-blue font-bold text-center mb-4'>faq</h1>
      <section>
      {
        questions.map((question) => {
          return <Faq key={question.id} {...question} />
        })
      }
      
      </section>
    </div>
    </>
  )
}

export default App
