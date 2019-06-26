# workshop-cesar
Notas de clase: Creando una app. zero to prod
https://slides.com/cesarguerrero/next-js-workshop/#/

https://github.com/Aimanizales/workshop-cesar
https://workshop-cesar.herokuapp.com/

## 0. Notas sueltas:
- PM2 mejor que Nodemon

## 1. Next
https://nextjs.org/ (Entender Next, como Nuxt)

Analizando un package-lock.json
.tgz (Un tipo de zip de Linux)

## 2. Heroku:
puerto web: 80

### Qué es Heroku:
- Es una plataforma para subir web apps
- Nos da un espacio peque para correr node

## Configurando Heroku: 
1. Escoger EUA por conectividad.
2. Deploy: 


## 3. Material-UI

Para instalar toca hacer esto primero:
https://nextjs.org/docs#custom-document
https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js

Luego, ahí sí, esto:
https://material-ui.com/getting-started/installation/

Para arreglar el tema de que se carga primero la UI y luego el CSS porque el CSS es JS:

## 4. Express
Todo JS que se meta en `/server/` debe estar en commonJS, no ES6.

En este punto, se corre con `node server`

## 5. GraphQL
- Metodología para consulta de datos.
- Creado por Facebook para solucionar problemas de REST.
- Leer sobre teoría de grafos.


## 6. PM2
Poner PM2 a correr:

`npm install pm2`

```
npx pm2 start 
```

npx porque se le está diciendo a Node que corra un binario en 


## 7. Apollo
- https://www.apollographql.com/docs/react/essentials/get-started/
- De la misma gente que trabaja en GraphQL.
- Capa de integración con React

`npm install apollo-boost react-apollo graphql`

### 7.1 Solucionando problemas de fetch entre server y client:
`npm install isomorphic-fetch es6-promise`
