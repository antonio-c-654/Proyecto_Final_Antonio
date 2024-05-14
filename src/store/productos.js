export const productos = [
    {
        id: 1, 
        nombre: "Hamburguesa Clásica", 
        precio: 11.99, 
        descripcion: "Carne de res, queso cheddar, lechuga fresca, tomate jugoso, cebolla caramelizada y salsa secreta.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: true,
            vegano: false,
            destacado: true,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "queso cheddar", "lechuga", "tomate", "cebolla caramelizada", "salsa secreta"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 2,
        nombre: "Hamburguesa BBQ",
        precio: 13.99,
        descripcion: "Carne de res, queso gouda, cebolla caramelizada, bacon crujiente y salsa barbacoa.",
        imagen: "https://img.freepik.com/foto-gratis/hamburguesa-ternera-lista-ser-servida-papas-fritas_23-2148290586.jpg?w=740&t=st=1706553450~exp=1706554050~hmac=92d7e99f257184f6298989cfedd9604e5456ee1c829b187dcbba3e98c2db1491",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: true
        },
        composicion: {
            ingredientes: ["ternera", "queso gouda", "cebolla caramelizada", "bacon crujiente", "salsa barbacoa"],
            alergenos: ["crustaceos", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 3,
        nombre: "Hamburguesa Vegana",
        precio: 10.99,
        descripcion: "Hamburguesa de lentejas, queso vegano, aguacate, lechuga y tomate fresco.",
        imagen: "https://img.freepik.com/foto-gratis/arreglo-deliciosas-hamburguesas_23-2148614097.jpg?w=740&t=st=1706553171~exp=1706553771~hmac=7346b1be5ca4d59e98c082c897ee57bea04a258a12772d37a7f1c1b6ff9bcbaa",
        caracteristicas: {
            picante: false,
            vegano: true,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["lentejas", "queso vegano", "aguacate", "lechuga", "tomate fresco"],
            alergenos: ["huevos", "soja"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 4,
        nombre: "Hamburguesa Deluxe",
        precio: 15.99,
        descripcion: "Carne de res, queso azul, champiñones salteados, cebolla caramelizada y mayonesa trufada.",
        imagen: "https://img.freepik.com/foto-gratis/vista-lateral-doner-tomate-papas-fritas-verduras-utensilios-cocina_176474-3068.jpg?w=740&t=st=1706554160~exp=1706554760~hmac=cec296bf835ff066e861b66b3b9695a45acfc15228b7c18964c634521957af6d",
        caracteristicas: {
            picante: true,
            vegano: false,
            destacado: false,
            favorito: true
        },
        composicion: {
            ingredientes: ["ternera", "queso azul", "champiñones", "cebolla caramelizada", "mayonesa trufada"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 5,
        nombre: "Hamburguesa Hawaiana",
        precio: 14.99,
        descripcion: "Carne de res, piña fresca, queso suizo, bacon y salsa teriyaki.",
        imagen: "https://img.freepik.com/foto-gratis/hamburguesa-queso-primer-plano-mostrador_23-2148784509.jpg?w=740&t=st=1706554433~exp=1706555033~hmac=d2af977284f90f837ebbf6b51d6346d5e0b3a5d404ea4603d4f41a3f9cdf9c19",
        caracteristicas: {
            picante: false,
            vegano: true,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "piña", "queso suizo", "bacon", "salsa teriyaki"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 6,
        nombre: "Hamburguesa Picante",
        precio: 12.99,
        descripcion: "Carne de res, queso pepper jack, jalapeños, guacamole y salsa picante.",
        imagen: "https://img.freepik.com/foto-gratis/vista-lateral-hamburguesa-pollo-papas-fritas-pizarra_140725-13931.jpg?w=740&t=st=1706554128~exp=1706554728~hmac=e414d1b872d0449b9d2967dd16c1ed119fb2519dcb6b308fb8a0ab1b1bf48693",
        caracteristicas: {
            picante: true,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "queso pepper jack", "jalapeños", "guacamole", "salsa picante"],
            alergenos: ["lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 7,
        nombre: "Hamburguesa de Pescado",
        precio: 16.99,
        descripcion: "Filete de pescado rebozado, queso americano, lechuga, tomate y salsa tártara.",
        imagen: "https://img.freepik.com/foto-gratis/vista-lateral-hamburguesa-negra-papas-fritas-salsa-tomate-flores-bandeja-madera-sobre-mesa-madera_176474-3014.jpg?w=740&t=st=1706554132~exp=1706554732~hmac=c6d8c4c7ec9f2cd0e032525a6928b99597952c90daf3a55660dd77cd8a077ee6",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["filete de pescado rebozado", "queso americano", "lechuga", "tomate", "salsa tártara"],
            alergenos: ["gluten", "lacteos", "pescado"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 8,
        nombre: "Hamburguesa Ranchera",
        precio: 13.99,
        descripcion: "Carne de res, queso cheddar, bacon, huevo frito, lechuga y salsa ranch.",
        imagen: "https://img.freepik.com/foto-gratis/hamburguesa-alto-angulo-papas-fritas-mesa_23-2148678805.jpg?w=740&t=st=1706554135~exp=1706554735~hmac=a7c22b6f07e1984fddfe18893c2d4e2f4093a6bce426542f32626cbb87b4e964",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "queso cheddar", "bacon", "huevo frito", "lechuga", "salsa ranch"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 9,
        nombre: "Hamburguesa Mediterránea",
        precio: 14.99,
        descripcion: "Carne de cordero, queso feta, aceitunas, tomate seco y salsa de yogur.",
        imagen: "https://img.freepik.com/foto-gratis/bodegon-deliciosa-hamburguesa-americana_23-2149637305.jpg?w=740&t=st=1706554153~exp=1706554753~hmac=1c2528662eeb66eeec3e419a0ebd93daec1b474f91264257af86f9cab02b4ad9",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["carne de cordero", "queso feta", "aceitunas", "tomate seco", "salsa de yogur"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 10,
        nombre: "Hamburguesa de Pollo BBQ",
        precio: 11.99,
        descripcion: "Pechuga de pollo a la parrilla, queso cheddar, cebolla caramelizada y salsa barbacoa.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["pechuga de pollo a la parrilla", "queso cheddar", "cebolla caramelizada", "salsa barbacoa"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 11,
        nombre: "Hamburguesa de Queso Azul",
        precio: 12.99,
        descripcion: "Carne de res, queso azul, cebolla morada, lechuga y mayonesa de queso azul.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "queso azul", "cebolla morada", "lechuga", "mayonesa de queso azul"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 12,
        nombre: "Hamburguesa Tex-Mex",
        precio: 13.99,
        descripcion: "Carne de res, queso cheddar, guacamole, jalapeños y salsa chipotle.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "queso cheddar", "guacamole", "jalapeños", "salsa chipotle"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 13,
        nombre: "Hamburguesa de Salmón",
        precio: 15.99,
        descripcion: "Filete de salmón a la parrilla, queso crema, alcaparras, lechuga y tomate.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["filete de salmón a la parrilla", "queso crema", "alcaparras", "lechuga", "tomate"],
            alergenos: ["pescado", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 14,
        nombre: "Hamburguesa de Pavo",
        precio: 11.99,
        descripcion: "Pechuga de pavo, queso suizo, aguacate, lechuga y mayonesa de mostaza y miel.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["pechuga de pavo", "queso suizo", "aguacate", "lechuga", "mayonesa de mostaza y miel"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    },
    {
        id: 15,
        nombre: "Hamburguesa de Champiñones",
        precio: 12.99,
        descripcion: "Carne de res, queso suizo, champiñones salteados, cebolla caramelizada y mayonesa trufada.",
        imagen: "https://img.freepik.com/free-photo/front-view-burger-with-veggies-meat_23-2148868238.jpg?w=740&t=st=1706553777~exp=1706554377~hmac=ab40bff8f16eb737d6e54c48417dc8a307e525acce12e044ead793acf4bc49dc",
        caracteristicas: {
            picante: false,
            vegano: false,
            destacado: false,
            favorito: false
        },
        composicion: {
            ingredientes: ["ternera", "queso suizo", "champiñones", "cebolla caramelizada", "mayonesa trufada"],
            alergenos: ["gluten", "lacteos"],
            informacion_adicional: []
        },
        categoria: "hamburguesa"
    }
]


