import CardComponent from "../components/CardComponent"
import Header from "../components/Header"
import useIdeas from "../hooks/useIdeas"

const IdeasScreen = () => {
  const { state } = useIdeas()

  return (
    <div>
      <Header />
      <div className="min-h-screen max-h-auto md:p-24 sm:p-2 md:my-0 sm:my-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-4 sm:gap-2">
          {
            state.map((item, i) => {
              return (
                <CardComponent data={item} index={i} key={i.toString()} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default IdeasScreen