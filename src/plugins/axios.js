import axios from 'axios'

// API Token
// https://www.themoviedb.org/settings/api
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc5Yzg1N2M1MGUyN2Q0YTA4MWUzY2I1ZDJhYTcwYyIsIm5iZiI6MTY5NDc4NzY3My4yMDIsInN1YiI6IjY1MDQ2ODU5ZmZjOWRlMGVlMTc4YjA0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vj7dxztIlbYIbF4Eu04vhkivJRfOdyR1in4y4l33A_0'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`
}
})

export default api