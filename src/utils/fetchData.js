export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    },
  };
export const fetchData = async (url,options) => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("fetchData(): Fetched succesfully, result: ",result);
      return result;
    } catch (error) {
      console.error("fetchData(): Error occured",error);
    }

}

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
