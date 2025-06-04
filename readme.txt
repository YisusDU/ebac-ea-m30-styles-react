Creamos una nueva app con npx create-react-app
Borramos el contenido innecesario
Personalizamos el favicon

//Para configurar mis componentes con TS y TSX, necesitamos intalar TypeScript primero
    ejecutamos :

    npm install --save typescript @types/react @types/react-dom

//Consola nos advierte sobre  posible incompatibilidad  de TS y nuestros componentes de react,
    si hay comportamiento extraño, bajar la version de ts con:
    npm install typescript@4.9.5

//Después de instalar typescript, vamos a crear el archivo tsconfig.json, para ello creamos un archivo llamado tsconfig.json en la raíz 
        de nuestro proyecto y le damos los siguientes valores:
            {
                "compilerOptions": {
                    "target": "es5",
                    "lib": ["dom", "dom.iterable", "esnext"],
                    "allowJs": true,
                    "skipLibCheck": true,
                    "esModuleInterop": true,
                    "allowSyntheticDefaultImports": true,
                    "strict": true,
                    "forceConsistentCasingInFileNames": true,
                    "module": "esnext",
                    "moduleResolution": "node",
                    "resolveJsonModule": true,
                    "isolatedModules": true,
                    "noEmit": true,
                    "jsx": "react"
                    },
                    "include": ["src"]
            }
--Ya podemos crear nuestro primer componente
    He notado que para crear el top necesito tener la biblioteca de assets, la voy a copiar del 
    proyecto anterior

    Ya tengo mi primer jsx apunto de terminar, falta estilizarlo con Styled-component, creo que se debe instalar
    y de paso un reset general
        Ahora podemos ir utilizando estilos globales con un theme para ir estlizando bien
//------Tuvimos un problema, no podia ver imagenes por que necesitaban un archivo llamado : react-app-env.d.ts
    dicho archivo va dentro de src
        dentro del archivo era declarar lo siguiente
        declare module "*.png";
        declare module "*.jpg";
        declare module "*.svg";

        Pues era necesario tipar las imagenes en TS, pero es curioso que no lo utilizo en mi archivo movies-app
        Además la carpeta de assets tenía espacios en los nombres de la carpeta, hubo que quitarlos

--Vamos a crear la carpeta theme con los estilos globales
    creamos la carpeta theme
        creamos los archivos :
        "GlobalStyles.js
        "index.js
            los configuramos 
                vamos a importar theme en APP.js y lo pasamos como prop al envoltorio de ThemeProvider
                    despues en GlobalStyles lo leemos y accedemos a sus subobjetos
Salia un error en la consola sobre la imagen logo192.png, que borre por no ser parte del proyecto       
    le dije a chatgpt que ajustara mi favicon para eso y la pegue en la ruta que pedia
        --vamos a ajustar las rutas de las imágenes de mi header antes de estilizar
        --Vamos a definir algunas animaciones globales, como shine dentro de theme en una archivo llamado animations.ts

**Avance del día, mi componente Header ya tiene estilos, apliqué estilos globales al body, al html y *, terminé los 
mixins, las animaciones y eso, pero mi componente header aun necesita:
    --Aplicar correctamente los media querys segun el ejemplo✅
    --hacer algunos ajustes de estilos por temas de especificidad✅
    --Aplicar la lógica correspondiente
        Sigo clavado con js, en React se usa useState para reenderizar cosas o tomar decisiones
        --Falta aplicar la logica de cambiar de fixed al header
----------Quedará pendiente la logica del fixed en el header que necesitamos más componentes para provarlo

**Hemos terminado el componente Banner

**--Estoy estilizando el componente GuideRegister, y he recordado que quizá sea mejor construir toda
la UI antes de aplicar la lógica
