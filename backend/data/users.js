import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email : 'admin@example.com',
        password: bcrypt.hashSync('12345',10),
        rating: 10,
        isAdmin: true
    },
      {
        name: 'John Doe',
        email : 'john@example.com',
        password: bcrypt.hashSync('12345',10),   
        rating: 0,
    },
      {
        name: 'Jane Doe',
        email : 'jane@example.com',
        password: bcrypt.hashSync('12345',10), 
        rating: 0,   
    }
]
export default users