# project_final_Fase02

Proyecto final para curso Bedu Santander Desarrollo Web Full-Stack

Objetivo: reforzar el conocimiento obtenido a lo largo del curso generando un sitio web para un recetario, alimentado por una API publica.

## Funciones Y Eventos

### Funciones

<b>- RecetaConsulta()</b>
>Esta funcion consulta a la api lo que se escriba en el buscador, si la palabra esta en la api se mostrara la busqueda deseada, si no escribio nada se mostrara una receta aleatoria.

<b>- detailsReceta(receta)</b> <br/>
> La funcion detailsReceta(receta) el cual su parametro es una receta, la cual se almacena la foto de la receta, su categoria, su nombre y las instrucciones en constantes. La categoria se añade a un elemento y se le agregan atributos, el nombre de la receta de añade a otro elemento y se crea una constante que almacene la funcion obtenerIngredientes(receta) con "receta" como su parametro. Se llama a la funcion listarIngredientes(ingredientes) y se utiliza la constante que tiene el resultado de la funcion obtenerIngredientes(receta) como parametro. Se llama a la funcion getInstrucciones(instruciones) con la constante "instrucciones" como parametro, la cual tiene almacenada las intrucciones del parametro "receta". Por ultimo el atributo src del elemento "pick" se iguala a la constante pickReceta que almacena la foto de la receta.

<b>- listarIngedrientes(ingredientes)</b> <br/>
> El parametro "ingredientes" es un arreglo de datos los cuales iteraremos para que cada ingrediente sea agregado al documento, creando un elemento 'li' y agregandole el texto que vendria siendo cada ingrediente los cuales son agregados a los elementos con id #listIngredientes y #box-listIngredientes ul, ya que el primero es para la vista Desktop y el segundo para la vista Mobile

<b>- getInstrucciones(instrucciones)</b> <br/>
> En esta funcion se crea un elemento 'p' para Desktop y para Mobile, el paramentro "instrucciones" son las intrucciones, las cuales se añaden como texto al elemento 'p' de cada vista.

<b>- obtenerIngredientes(receta)</b> <br/>
>La funcion crea 2 arreglos en donde en uno agrega los ingredientes y en el otro las medidas, al terminar un cliclo for estos arreglos tendran los ingredientes y las medidas de las receta los cuales se uniran en un solo arreglo llamado Ingredientes en donde ira cada ingrediente con sus respectivas medidas.

### Eventos

