import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email : 'admin@example.com',
        password: bcrypt.hashSync('12345',10),
        rating: 10,
        likes: ["5f9e8901906e7413d840639d"],
        isAdmin: true
    },
      {
        name: 'John Doe',
        email : 'john@example.com',
        password: bcrypt.hashSync('12345',10),
        likes: ["5f9e8901906e7413d840639d"],   
        rating: 0,
    },
      {
        name: 'Jane Doe',
        email : 'jane@example.com',
        password: bcrypt.hashSync('12345',10),
        likes: ["5f9e8901906e7413d840639d"], 
        rating: 0,   
    },
]
export default users