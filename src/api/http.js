import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }), options);
  return instance;
}
console.log(
  'import.meta.env.VITE_API_BASE_URL: ',
  import.meta.env.VITE_API_BASE_URL,
);

/* export const canvases = create(
  'https://json-server-vercel-tawny-tau.vercel.app/canvases',
); */
// export const canvases = create('http://localhost:8000/canvases/');
export const canvases = create(
  `${import.meta.env.VITE_API_BASE_URL}/canvases/`,
);
