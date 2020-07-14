async function storeData() {
  const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
  // Write the rest of the code here.
  const response = await axios.get(url)
  console.log(response.data)
  const data = response.data
 
  // function eat(data) {
  //   const arr = []
  //   for (let 1 = 0; i < arr.length; i++) {
  //     if (element) {
  //       arr.push(i);
  //     }
  //   }
  //   console.log(arr.length)
  //   return arr.length
  // }
  
} 
storeData()
  
// // capture array
// // filter out only "true"
// // grab the array.length