import { API_URL } from "../constants";
export async function getMovies({search}) {
    const response = await fetch(`${API_URL}${search}`)
    const data = await response.json()
    return data?.Search || []
}