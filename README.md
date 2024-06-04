# Test Frontend Mercado Libre

## Autor: Diego Alejandro Perdomo Montealegre

> Backend

1. Instalar los paquetes de node

1.1 Ir a la carpeta del frontend

``` cd frontend-meli ```

1.2 Luego

``` npm run install ```

2. Configurar el puerto

El puerto por defecto será el 4000, si no debo se deberá especifar en el .env del backend-meli

Asi

```PORT=4000```

Si se tiene ocupado ese puerto, por favor, modificar la variables del backend.

El archivo a manipular es el .env en backend meli

.env file

```
FRONTEND_URL=http://localhost:5173
JWT_SECRET=nissanskyline
API_MELI=https://api.mercadolibre.com
PORT=4000
```

3. Lanzar la app

``` npm run dev ```


> Frontend

1. Instalar los paquetes de node

1.1 Ir a la carpeta del frontend

``` cd frontend-meli ```

1.2 Luego

``` npm run install ```

2. Lanzar la app

``` npm run dev ```

Nota: Por defecto el frontend corre en el puerto 5173

Si se tiene ocupado ese puerto, vite lanzará la app en otro puerto habilitado. Si es así por favor, modificar la variables del frontend en el backend ya que contiene CORS.

El archivo a manipular es el .env en backend meli

.env file

```
FRONTEND_URL=http://localhost:5173
JWT_SECRET=nissanskyline
API_MELI=https://api.mercadolibre.com
PORT=4000
```


