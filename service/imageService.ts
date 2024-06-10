import axios from 'axios';

const imgbbApiKey = 'b0a47e8bf48737b628d34b0bdaae5e27';

export const uploadImages = async (files: File[]): Promise<string[]> => {
  const promises = files.map(file => {
    const formData = new FormData();
    formData.append('image', file);
    return axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData)
      .then(response => response.data.data.url);
  });
  return Promise.all(promises);
};
