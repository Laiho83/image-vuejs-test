import axios from 'axios';

const apiUrl = 'https://picsum.photos/v2/list';

export default {
  getImages(page=1, limit=10) {
    const url = `${apiUrl}?page=${page}&limit=${limit}`;
    return axios.get(url)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err))
  },
}
