import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@exemple.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Max Muster',
        email: 'max@exemple.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Maria Hesse',
        email: 'maria@exemple.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users