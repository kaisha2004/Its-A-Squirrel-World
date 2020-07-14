async function storeData() {
  const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
  // Write the rest of the code here.
    const response = await axios.get(url)
    console.log(response)
  
}
  storeData()