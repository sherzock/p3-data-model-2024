# Información del Proyecto

Se trata de un modelo de datos que emula un sistema de una universidad o escuela. En el modelo podemos encontrar las siguientes tablas:
- Estudiantes
- Profesores
- Cursos
- Aulas
- Inscripciones
- Notas

Los estudiantes pueden tener inscripciones de varios cursos.
Por otro lado, los profesores pueden llevar varios cursos.
Se les puede añadir notas a los alumnos, cada nota se vera reflejada en su inscripción correspondiente.
Los Cursos, aparte de profesor, pueden tener aula asignada y deben tener un código único para identificarlos.
También se puede añadir una descripción de los cursos.
Las aulas pueden tener ubicación, capacidad y para las aulas online, una url.

## Representación gràfica del modelo de datos

![image](imgs/prismaliser.png)

## inicializar el modelo de datos para su uso

Al descargar el proyecto, lo primero que debemos hacer es generar el container de docker. Desde la carpeta /Docker debemos hacer:

docker compose up -d

Una vez generado el container, tenemos que generar la base de datos con:

bunx prisma generate

A continuación tendremos que hacer un push del modelo creado a la nueva base de datos:

bunx prisma db push

Después debemos generar los datos para poder probar el modelo que hemos creado:

bunx prisma db seed

Podemos ver el contenido usando:

bunx prisma studio

Tambien podemos usar pgadmin:

usuario postgres: fullstack
contraseña postgres: fullstack123

usuario pgadmin: fullstack@upc.edu
contraseña: fullstack123

el puerto para entrar es el 5050 por defecto:

localhost:5050

Ahora ya estamos preparados para usar los diferentes scripts y funcionalidades.

## Scripts y funcionalidades

### Estudiantes

Para los estudiantes tenemos 6 scripts que podemos usar: 

- Crear estudiante

    bun scripts/StudentsCreateStudent.ts "Nombre" "Apellidos" "email"

    El email debe ser único y no usado antes en la base de datos

- Eliminar estudiante

    bun scripts/Students/DeleteStudent.ts "id del estudiante"

    Solo se podrá eliminar si no tiene ninguna inscripción

- Inscribir estudiante

    bun scripts/Students/EnrrollStudent.ts "id del estudiante" "id del curso"

- Encontrar estudiante

    bun scripts/Students/FindStudent.ts "id del estudiante"

    Devuelve los datos del estudiante que se busca

- Lista de estudiantes

    bun scripts/Students/ListStudents.ts

    Devuelve una lista con la información de todos los estudiantes.

- Modificar estudiante

    bun scripts/Students/UpdateStudent.ts "id del estudiante" "nombre" "apellidos" "email"

    El email debe ser único, no puede estar repetido en la base de datos

### Profesores

Para los profesores tenemos 7 scripts que podemos usar: 

- Crear profesor

    bun scripts/Teachers/CreateTeacher.ts "Nombre" "Apellidos" "email"

    El email debe ser único y no usado antes en la base de datos

- Eliminar profesor

    bun scripts/Teachers/DeleteTeacher.ts "id del profesor"

    Solo se podrá eliminar si no tiene ningún curso asignado

- Asignar nota a estudiante

    bun scripts/Teachers/GradeStudent.ts "id del estudiante" "id del curso" "nota" "nombre del trabajo o examen"

- Encontrar profesor

    bun scripts/Teachers/FindTeacher.ts "id del profesor"

    Devuelve los datos del profesor que se busca

- Lista de profesores

    bun scripts/Teachers/ListTeachers.ts

    Devuelve una lista con la información de todos los profesores.

- Modificar profesor

    bun scripts/Teachers/UpdateTeacher.ts "id del profesor" "nombre" "apellidos" "email"

    El email debe ser único, no puede estar repetido en la base de datos

- Asignar Curso

    bun scripts/Teachers/AssignCourse.ts "id del profesor" "id del curso"

    Asigna un profesor a un curso

### Cursos

Para los cursos tenemos 5 scripts:

- Crear Curso

    bun scripts/Courses/CreateCourse.ts "nombre" "código" "descripción" "id del profesor" "id del aula"

    el código ha de ser único, no puede haber dos cursos con el mismo código

- Eliminar Curso

    bun scripts/Courses/DeleteCourse.ts "id del curso"

    Para eliminar un curso, no se puede tener ninguna inscripción asociada a este

- Encontrar Curso

    bun scripts/Courses/FindCourse.ts "id del curso"

    Muestra los datos del curso que buscamos

- Listar Cursos

    bun scripts/Courses/ListCourses.ts

    Devuelve una lista con los datos de los cursos

- Modificar Curso

    bun scripts/Courses/UpdateCourse.ts "id del curso" "nombre" "código" "descripción" "id del profesor" "id del aula"

    El código ha de ser único, no se puede repetir

### Aulas

Para el aula tenemos 5 scripts diferentes:

- Crear Aula
    
    bun scripts/Classrooms/CreateClassroom.ts "nombre" "capacidad" "ubicación" "url"

- Eliminar Aula

    bun scripts/Classrooms/DeleteClassroom.ts "id del aula"

    Solo se podrá eliminar si no tiene ningún curso asociado

- Encontrar Aula

    bun scripts/Classrooms/FindClassroom.ts "id del aula"

    Devuelve los datos del aula que busquemos

- Listar Aulas

    bun scripts/Classrooms/ListClassrooms.ts

    Devuelve una lista con los datos de las aulas

- Modificar Aula

    bun scripts/Classrooms/UpdateClassroom.ts "id del aula" "nombre" "capacidad" "ubicación" "url"

# Descripción de la entrega
# Modelo de Datos

En esta práctica hay que desarrollar el modelo de datos para una aplicación que resulte de tu interés. (No es necesario pensar en la autenticación aún, estudiaremos eso por separado.)

Se trata, como otras veces, de hacer un _fork_ de este repositorio y trabajar en él.

La solución del ejercicio debe ser un proyecto Javascript con:
- El esquema de Prisma (`schema.prisma`).
- La configuración para una base de datos (con `docker-compose.yml`).
- Rellenado con unos pocos datos de prueba.
- Scripts en Typescript de demostración que hacen algunas cosas con los datos.
- Documentación sobre cómo lanzar la base de datos y usar los scripts de demostración (sustituyendo este mismo README).

## Esquema

El esquema debe tener almenos 3 entidades, pero no hay límite superior. Empieza siempre por definir las entidades más importantes, y asegúrate de que las relaciones cumplen con las necesidades que has planteado (nunca hay una única solución, cada solución tienes sus ventajas e inconvenientes, simplemente hay que ser conscientes de ellos). Luego añade entidades para hacer crecer el modelo. No intentes hacerlo todo de golpe (a no ser que ya tengas experiencia).

## Rellenado de datos de prueba

Para crear los datos iniciales con los que poder hacer algo al principio se puede usar cualquier mecanismo que automatice la inserción. Se recomienda mirar la documentación sobre como usar `seed.ts` en Prisma, que es una manera semi-estandarizada.
