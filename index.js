const users = [
  { name: 'Reuben O.',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha C',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne H.',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph S.',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen S',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]

const getName = (arr) => {
           return arr.map((name) =>
            name.name
           )
}

const getVerifiedUser = (arr) => {
            return arr.filter((x) => 
            x.verified === true
            )
}

const lessThan1k = (arr) =>{
            return arr.filter((x) => 
            x.followers < 1000
            )
}

const searchUsername = (arr, string) =>{
            return arr.find((x) => 
            x.username === string
            )
}

const longWinded = (arr) =>{
// sort looks at every 2 elements of an array
// 
            return arr.sort((x, b) => 
            b.bio.length - x.bio.length
            )[0]
}

const follower = (arr) => {
            return arr.sort((a,b) => a.followers - b.followers) 
}

// console.log(getName(users))
// console.log(getVerifiedUser(users))
// console.log(lessThan1k(users))
// console.log(searchUsername(users, '@passaic_papi'))
// console.log(longWinded(users))
console.log(follower(users))