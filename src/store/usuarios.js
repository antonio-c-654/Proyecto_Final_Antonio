export const usuarios = [
    {
        id: 0,
        email: 'admin@a.com',
        password: 'admin',
        datos: {
            nombre: 'admin',
        },
        caracteristicas: {
            foto_perfil: 1,
            favoritos: [],
            medallas: ["medal_1", "medal_2", "medal_3", "medal_4"],
        },
        isAdmin: true
    },
    {
        id: 1,
        email: 'paco@a.com',
        password: 'paco',
        datos: {
            nombre: 'paco',
        },
        caracteristicas: {
            foto_perfil: 1,
            favoritos: [],
            medallas: [],
        },
        isAdmin: false
    },
]