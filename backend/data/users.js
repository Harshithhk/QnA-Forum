import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email : 'admin@example.com',
        password: bcrypt.hashSync('12345',10),
        rating: 0,
        likes: ["5f9e8901906e7413d840639d"],
        isAdmin: true
    },
      {
        name: 'Harshith Kelkar',
        email : '1617020101',
        password: bcrypt.hashSync('12345',10),
        likes: ["5f9e8901906e7413d840639d"],   
        rating: 0,
    },
      {
        name: 'Prathamesh Patil',
        email : '1617000821',
        password: bcrypt.hashSync('12345',10),
        likes: ["5f9e8901906e7413d840639d"], 
        rating: 0,   
    },
]
export default users