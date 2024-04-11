export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '68f1ed40b1msh249c5304c43ca80p1f5cb7jsn395fa22242a2',
    }
  };
  
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '68f1ed40b1msh249c5304c43ca80p1f5cb7jsn395fa22242a2',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}