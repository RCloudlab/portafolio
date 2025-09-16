export const Saludo = ({nombre, edad}: {nombre: string, edad: number} ) => {
    return <h1>Hola, {nombre}! Tienes {edad} años.</h1>;
}