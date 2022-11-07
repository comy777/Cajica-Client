import useIdeas from "../hooks/useIdeas"

const IdeasScreen = () => {
  const { state } = useIdeas()

  return (
    <div className="h-[100vh] p-24">
      <div className="grid grid-cols-3">
        {
          state.map((item, i) => {
            return(
              <div key={item._id} className="w-80 grid justify-center" >
                <img src={item.url} className="h-48" />
                <div>
                  <p className="text-center">
                    { item.msg }
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default IdeasScreen