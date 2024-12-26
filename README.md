# Tesla | Shop

![Shop](/public/tesla.jpeg)

## Descripción

Este es un proyecto de una tienda en línea realizado con Next.js. Permite a los usuarios navegar por una variedad de productos, agregar productos a un carrito de compras y realizar pedidos. La aplicación utiliza Next.js para el frontend, NextAuth para la autenticación, y MongoDB para la base de datos.

## URL del Deploy
[https://tesla-shop-arielstereo.vercel.app](https://tesla-shop-arielstereo.vercel.app/)

## Instrucciones para Ejecutarlo Localmente

1. Clona el repositorio:

```sh
git clone https://github.com/Arielstereo/Tesla-Shop.git
```

2. Navega al directorio del proyecto:
```sh
cd tesla-shop
```

3. Instala las dependencias:
```sh
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto y agrega las variables de entorno necesarias:
```sh
MONGODB_URI=tu_mongodb_uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_nextauth_secret
```

5. Ejecuta el servidor de desarrollo:
```sh
npm run dev
```

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.