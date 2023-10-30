import { api } from "../../services/api"

export default function Home() {

    const GetMovie = async () => {
        const data = await api.get('/movie/now_playing')
        console.log(data)
      }
      GetMovie()
      
    return (
        <div>
            <p>Home</p>
        </div>
    )
}