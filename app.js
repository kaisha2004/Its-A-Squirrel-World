async function storeData() {
  const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
  // Write the rest of the code here.
  try {
    const response = await axios.get(url)
    // console.log(response.data[150])
    // const data = response.data
 
    function eat() {
      const arr = []
      const squirrels = response.data
      squirrels.forEach(squirrel => {
        const eating = squirrel.eating
        // console.log(squirrel.eating)
        if (eating) {
          arr.push(squirrel);
        }
      })

  
      const filtered = () => {
        const filter = arr.filter((a, b) => arr.indexOf(a) === b)
        return (filter.length)
      }
      filtered()
      return filtered()
    }
    eat()
  
    return eat()
  }
  catch (error) {
    console.log(`Error ${error}`)
  }
} 
storeData()
console.log(storeData())
  
const answerA = document.querySelector('#answerA')
answerA.addEventListener('click', (e) => { 
  e.preventDefault();
  
})
// user clicks button
//value button equals store data
//prompt you are correct
//remove question 
//if click other two buttons
//do not equal store data
//prompt you are wrong
//remove question 