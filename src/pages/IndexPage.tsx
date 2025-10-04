import Formula from "@/components/formula"
import Header from "@/layouts/header"
import '@/style/layouts/header.css'

function IndexPage() {

  return (
    <>
      <Header />
      <main className='w-full min-h-screen flex flex-col items-center'>
        <Formula />
      </main>
    </>
  )
}

export default IndexPage
