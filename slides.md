---
theme: seriph
layout: center
title: Herramientas y tecnologías del ecosistema de Vue
info: |
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Herramientas y tecnologías del ecosistema de VueJS



## En colaboración con

**MedellinJS**

**Vue JS Colombia**

---
layout: center
---

# **Fabian Beltran**  
Organizador de Vue JS Colombia  
Desarrollador Frontend en Alegra

---

## ¿Qué aprenderás hoy?

- ¿Qué es Vue.js?
- Principales características del framework
- Herramientas esenciales del ecosistema
- Ejemplo práctico de un componente Vue
- Recursos y comunidades para seguir aprendiendo

<!-- Mi meta es convencerte de que pruebes Vue.js, lo lograre? -->


---
layout: center
---

# ¿Qué es Vue.js?

- Framework progresivo para construir interfaces de usuario.
- Enfocado en la capa de vista.
- Fácil de integrar con otros proyectos y bibliotecas.
- Reactivo.

<!-- Te ire dando datos curiosos de Vue a lo largo de la charla,  
El primero   
Inicialmente, se llamaria View, pero parecía demasiado obvio, así que buscó en el traductor de Google las traducciones que le gustaban y terminó optando por el francés Vue.   -->


---
layout: center
---

# Características principales

- Reactividad declarativa
- Componentes reutilizables
- Enrutamiento (Vue Router)
- Manejo de estado (Pinia, Vuex)
- Ecosistema robusto


---
layout: section
---

# Como iniciar con Vue.js

Podemos crear un proyecto con solo un `index.html` o usar vite para montar un nuevo proyecto

```html {monaco}
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">
  <h1>{{ message }}</h1>
  <button @click="count++">Click me</button>
  <p>Count: {{ count }}</p>
</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      const count = ref(0)
      return {
        message,
        count
      }
    }
  }).mount('#app')
</script>
```


---
layout: default
---

# Como iniciar un proyecto de Vue.js

## Vite 

::code-group

```sh [npm]
npm create vite@latest
```

```sh [yarn]
yarn create vite
```

```sh [pnpm]
pnpm create vite
```
::
<!--(Primera tecnologia del ecosistema de vue) -->
---
layout: default
---

# Ejemplo de componente

```shell
ComponentA.Vue
```

````md magic-move
```vue {all}
<script>
</script>
```
```vue{3-4|all}
<script>
</script>
<template>
</template>
```
```vue{5-6|all}
<script>
</script>
<template>
</template>
<style>
</style>
```
````

---
layout: default
---

# Ejemplo de componente

````md magic-move
```vue {all}
<script>
</script>
```
```vue{3-4|all}
<script>
</script>
<template>
</template>
```
```vue{5-6|all}
<script>
</script>
<template>
</template>
<style>
</style>
```
````

---
layout: default
---

# Herramientas del ecosistema

- **Vue CLI / Vite**: Creación y configuración de proyectos.
- **Vitest**: Para testing
- **Vue Devtools**: Depuración.
- **Vue Router**: Enrutamiento SPA.
- **Pinia / Vuex**: Manejo de estado.
- **Nuxt.js**: SSR y SSG con Vue.

