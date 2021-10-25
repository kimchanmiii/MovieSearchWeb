//import axios from 'axios';
//let axios = require('axios');
let result;
            
let getSearchMovie = async () => {
  //const ID_KEY = 'c9eO1L0uOQFb2BfbAaRD';
  //const SECRET_KEY = 'M1Ean6tqGj';
  const ID_KEY = 'HgE65Q_y2ryd1XX05Iih';
  const SECRET_KEY = '9jTU_zbui8';

  try { 
               const {data: { 
                  items 
//                }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{ 
                  }} = await axios.get('/api/v1/search/movie.json',{ 
                    params:{ 
                    query: "히어로", 
                    display: 20 
                  }, 
                  headers: { 
                    'X-Naver-Client-Id': ID_KEY, 
                    'X-Naver-Client-Secret': SECRET_KEY 
                  } 
                }); 
                console.log("items: ", items);
                result = items;
  } catch (error) { 
      console.log(error); 
  } 
}; 

getSearchMovie();
console.log("result: ", result);

            