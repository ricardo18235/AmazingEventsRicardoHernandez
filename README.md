# Amazing Events

Este repositorio contiene un proyecto de JavaScript que utiliza módulos para organizar el código. El proyecto crea una interfaz de usuario con tarjetas y proporciona funcionalidades de búsqueda y filtrado. 

## Estructura del Código

El código importa varias funciones y variables desde un módulo llamado `modules.js`. Estas funciones y variables se utilizan para crear y manipular elementos del DOM, así como para implementar la lógica de filtrado.

Las funciones y variables importadas son:

- **contenedorHomeCard**: Un contenedor para las tarjetas.  
- **arrayDeEventos**: Un array que contiene los eventos.  
- **contenedorTarjetas**: Un contenedor para las tarjetas.  
- **contenedorCheckbox**: Un contenedor para los checkboxes.  
- **misCategorias**: Una variable para las categorías.  
- **filtroCategorias**: Una función para filtrar las categorías.  
- **arrayMisCategorias**: Un array que contiene las categorías.  
- **crearCards**: Una función para crear las tarjetas.  
- **filtrado**: Una función para implementar la lógica de filtrado.  
- **botonBusqueda**: Un botón para la búsqueda.  
- **formulario**: Un formulario para la entrada del usuario.  

## Funcionalidad

El código crea un contenedor secundario para las tarjetas y un contenedor para los checkboxes. Luego, para cada categoría en `arrayMisCategorias`, se crea un checkbox y se añade al contenedor de checkboxes.

La función `crearCards` se utiliza para pintar las tarjetas en la interfaz de usuario.

Finalmente, se añaden event listeners al botón de búsqueda y al formulario para implementar la funcionalidad de filtrado cuando el usuario interactúa con ellos.
