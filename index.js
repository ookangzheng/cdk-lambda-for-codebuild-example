
module.exports.handler = async event => {
  
  const fetch = require('node-fetch')
  console.log('Fetch start')
  let a = await fetch('https://oooo.b-cdn.net')
  
  console.log(`${JSON.stringify(a) + a.status } log out RESPONSE `)
  
  console.log('Fetch end')
  return {
    
  }
};
