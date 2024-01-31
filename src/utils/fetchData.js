
// export const exerciseOptions = {
//     method: 'GET',
//     headers: {      
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
//     }
//   };
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    },
  };
export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;

}

  
 
  
//   export const fetchData = async (url, options) => {
//     const res = await fetch(url, options);
//     const data = await res.json();
  
//     return data;
//   };
