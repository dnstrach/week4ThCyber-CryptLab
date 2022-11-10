const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const matches = bcrypt.compareSync(password, users.passwordHash)
          if(matches){
            let userToReturn = {...users[i]}
            delete userToReturn.passwordHash
          }
          res.status(200).send(usersToReturn)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        const {username, email, password, firstName, lastName} = req.body

        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)

        const user = {
          username, 
          email,
          passwordHash, 
          firstName, 
          lastName
        }

        users.push(user)

        let userToReturn = {...user}
        delete userToReturn.passwordHash

        res.status(200).send(req.body)
        console.log(user)
    }
}