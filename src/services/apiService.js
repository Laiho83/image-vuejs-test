import axios from 'axios';

const apiUrl = 'https://picsum.photos/v2/list';

export default {
  getImages(page=1, limit=10) {
    return axios.get(`${apiUrl}?page=${page}&limit=${limit}`)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err))
  },
}
