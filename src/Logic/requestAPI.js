import axios from 'axios';

export function getProperties(){
  return new Promise((resolve, reject)=>{
    axios({
      url: 'https://r4vyup271c.execute-api.us-east-1.amazonaws.com/prod/api/propertiesSearch2',
      method: 'get',
      headers: {Accept:'application/json'}
    }).then(function(res) {
      resolve(res);
    }).catch(function(err) {
      reject(err.response);
    });
  })
  

}

