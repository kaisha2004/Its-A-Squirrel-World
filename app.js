

// FOR EATING

const squirrel1 = document.querySelector('#squirrel1');
squirrel1.addEventListener('click', (e) => {
  e.preventDefault();
  const trivia = document.querySelector('.trivia');
  trivia.style.display = 'block';
  async function storeDataEats() {
    const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
    try {
      const response = await axios.get(url)
      function eat() {
        const eatingSquirrels = []
        const squirrels = response.data
        squirrels.forEach(squirrel => {
          const eating = squirrel.eating
          if (eating) {
            eatingSquirrels.push(squirrel);
          }
        })

        const filtered = () => {
          const filter = eatingSquirrels.filter((a, b) => eatingSquirrels.indexOf(a) === b)
          return (filter.length)
        }
        filtered()
        return filtered()

      }
      eat()

      const answerA = document.querySelector('#answerA')
      answerA.addEventListener('click', (e) => {
        e.preventDefault();
        const ate = eat();
        const win_status = document.querySelector('.win_status');
        const facts = document.querySelector('.facts')
        const status_change = document.querySelector('#status')
        if (ate === 255) {
          win_status.style.display = 'block';
          status_change.innerText = 'You are correct!';
          facts.style.display = 'block';
        }

      })
      const answerB = document.querySelector('#answerB')
      answerB.addEventListener('click', (e) => {
        e.preventDefault();
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
    })
    const answerC = document.querySelector('#answerC')
      answerC.addEventListener('click', (e) => {
      e.preventDefault()
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
    })

    }
    catch (error) {
      console.log(`Error ${error}`)
    }


  }
  storeDataEats()
})





//still need the remove/reset function 


// FOR KUK SOUND 

const squirrel2 = document.querySelector('#squirrel2');
squirrel2.addEventListener('click', (e) => {
  e.preventDefault();
  const trivia = document.querySelector('.trivia');
  const question_change = document.querySelector('#question');
  const btnA = document.querySelector('#answerA');
  const btnB = document.querySelector('#answerB');
  const btnC = document.querySelector('#answerC');
  trivia.style.display = 'block';
  question_change.innerText = 'How many squirrels do you think were observed making a "kuk" sound?'
  btnA.innerHTML = '47';
  btnB.innerHTML = '81';
  btnC.innerHTML = '33';


async function storeDataKuks() {
  const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
  try {
    const response = await axios.get(url)
    function kukking() {
      const kukSquirrels = []
      const squirrels = response.data
      squirrels.forEach(squirrel => {
        const kuk = squirrel.kuks
        if (kuk) {
          kukSquirrels.push(squirrel);
        }
      })

      const filtered = () => {
        const filter = kukSquirrels.filter((a, b) => kukSquirrels.indexOf(a) === b)
        return (filter.length)
      }
      filtered()
      return filtered()

    }
    kukking()

    const answerC = document.querySelector('#answerC')
    answerC.addEventListener('click', (e) => {
      e.preventDefault();
      const kukked = kukking();
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      if (kukked === 33) {
        win_status.style.display = 'block';
        status_change.innerText = 'You are correct!';
        facts.style.display = 'block';
        squirrel_facts.innerText = 'The kuk is a sharp bark of alarm and indicates the squirrel is in imminent danger and that a predator is close by.'
      }

    })

    const answerB = document.querySelector('#answerB')
    answerB.addEventListener('click', (e) => {
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
      squirrel_facts.innerText = 'The kuk is a sharp bark of alarm and indicates the squirrel is in imminent danger and that a predator is close by.'
    })
    
    const answerA = document.querySelector('#answerA')
    answerA.addEventListener('click', (e) => {
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
      squirrel_facts.innerText = 'The kuk is a sharp bark of alarm and indicates the squirrel is in imminent danger and that a predator is close by.'
    })

  }
  catch (error) {
    console.log(`Error ${error}`)
  }
  
  
}
storeDataKuks()


})


// //still need the remove/reset function 


// FOR APPROACHING HUMANS 

const squirrel3 = document.querySelector('#squirrel3');
squirrel3.addEventListener('click', (e) => {
  e.preventDefault();
  const trivia = document.querySelector('.trivia');
  const question_change = document.querySelector('#question');
  const btnA = document.querySelector('#answerA');
  const btnB = document.querySelector('#answerB');
  const btnC = document.querySelector('#answerC');
  trivia.style.display = 'block';
  question_change.innerText = 'How many squirrels do you think were observed approaching humans?'
  btnA.innerHTML = '92';
  btnB.innerHTML = '43';
  btnC.innerHTML = '61';


async function storeDataApproach() {
  const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
  try {
    const response = await axios.get(url)
    function approaching() {
      const appSquirrels = []
      const squirrels = response.data
      squirrels.forEach(squirrel => {
        const app = squirrel.approaches
        if (app) {
          appSquirrels.push(squirrel);
        }
      })

      const filtered = () => {
        const filter = appSquirrels.filter((a, b) => appSquirrels.indexOf(a) === b)
        return (filter.length)
      }
      filtered()
      return filtered()

    }
    approaching()

    const answerC = document.querySelector('#answerC')
    answerC.addEventListener('click', (e) => {
      e.preventDefault();
      const approached = approaching();
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      if (approached === 61) {
        win_status.style.display = 'block';
        status_change.innerText = 'You are correct!';
        facts.style.display = 'block';
        squirrel_facts.innerText = 'Squirrels front teeth never stop growing and can grow up to 6 inches a year.'
      }

    })

    const answerB = document.querySelector('#answerB')
    answerB.addEventListener('click', (e) => {
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
      squirrel_facts.innerText = 'Squirrels front teeth never stop growing and can grow up to 6 inches a year.'
    })
    
    const answerA = document.querySelector('#answerA')
    answerA.addEventListener('click', (e) => {
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
      squirrel_facts.innerText = 'Squirrels front teeth never stop growing and can grow up to 6 inches a year.'
    })

  }
  catch (error) {
    console.log(`Error ${error}`)
  }
  
  
}
storeDataApproach()


})


// //still need the remove/reset function 


// FOR FORAGING 

const squirrel4 = document.querySelector('#squirrel4');
squirrel4.addEventListener('click', (e) => {
  e.preventDefault();
  const trivia = document.querySelector('.trivia');
  const question_change = document.querySelector('#question');
  const btnA = document.querySelector('#answerA');
  const btnB = document.querySelector('#answerB');
  const btnC = document.querySelector('#answerC');
  trivia.style.display = 'block';
  question_change.innerText = 'How many squirrels do you think were observed foraging for food?'
  btnA.innerHTML = '474';
  btnB.innerHTML = '239';
  btnC.innerHTML = '371';


async function storeDataForaging() {
  const url = `https://data.cityofnewyork.us/resource/vfnx-vebw.json`
  try {
    const response = await axios.get(url)
    function foraging() {
      const forSquirrels = []
      const squirrels = response.data
      squirrels.forEach(squirrel => {
        const forage = squirrel.foraging
        if (forage) {
          forSquirrels.push(squirrel);
        }
      })

      const filtered = () => {
        const filter = forSquirrels.filter((a, b) => forSquirrels.indexOf(a) === b)
        return (filter.length)
      }
      filtered()
      return filtered()

    }
    foraging()

    const answerA = document.querySelector('#answerA')
    answerA.addEventListener('click', (e) => {
      e.preventDefault();
      const foraged = foraging();
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      if (foraged === 474) {
        win_status.style.display = 'block';
        status_change.innerText = 'You are correct!';
        facts.style.display = 'block';
        squirrel_facts.innerText = 'Squirrels can find food buried underneath a foot of snow and may increase their body weight by 25% during winter.'
      }

    })

    const answerB = document.querySelector('#answerB')
    answerB.addEventListener('click', (e) => {
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
      squirrel_facts.innerText = 'Squirrels can find food buried underneath a foot of snow and may increase their body weight by 25% during winter.'
    })
    
    const answerC = document.querySelector('#answerC')
    answerC.addEventListener('click', (e) => {
      const win_status = document.querySelector('.win_status');
      const facts = document.querySelector('.facts')
      const status_change = document.querySelector('#status')
      const squirrel_facts = document.querySelector('#squirrel_facts');
      win_status.style.display = 'block';
      status_change.innerText = 'You are incorrect :(';
      facts.style.display = 'block';
      squirrel_facts.innerText = 'Squirrels can find food buried underneath a foot of snow and may increase their body weight by 25% during winter.'
    })

  }
  catch (error) {
    console.log(`Error ${error}`)
  }
  
  
}
storeDataForaging()

})

// GAME RESET

const resetBTN = document.querySelector('#reset');
resetBTN.addEventListener('click', (e) => {
  e.preventDefault();
  const squirrels = document.querySelector('.squirrels'); 
  squirrels.style.display = 'block';  
})
