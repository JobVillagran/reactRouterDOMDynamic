import { useParams } from "react-router-dom";

/*

EN App.js [es el main] es donde agregamos un Route con
la siguiente sintaxis:

<Route path="/profile/:name" element={<Profile />} />

AL MOMENTO DE COLOCAR EN TERMINAL yarn start 
TENDREMOS EL LINK http://localhost:3000/
LUEGO CON LA FUNCION DINAMICA COLOCAMOS EL URL
http://localhost:3000/profile Y NO VA A MOSTRAR NADA,
PERO, SI AL FINAL DE ESA URL COLOCAMOS UN NOMBRE DE EJEMPLO
ENTONCES NOS MOSTRARA EL CONTENIDO DE FORMA DINAMICA DE ESE USUARIO

EJEMPLO:

http://localhost:3000/profile/randy

EN ESTE CASO NOS MOSTRARA LA INFORMACION DE RANDY

*/

export default function Profile() {
    const { name } = useParams();
    console.log(name);
    return(
        <div>
            <h2>Pagina de perfil de {name}</h2>
        </div>
    );
}