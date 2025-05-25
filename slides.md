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
layout: center
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
layout: default
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
layout: cover
---
# APIs de Vue.js

## Option

---
layout: default
---

# Ejemplo de componente

```shell
HelloWorld.Vue
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

```vue {1-7|2|3-6|}
<script>
import { ref } from 'vue'
const message = ref('¡Bienvenido a Vue 3!')
const count = ref(0)
const name = ref('')
const frameworks = ref(['Vue', 'Angular', 'Svelte', 'React'])
</script>
<template>
</template>
<style>
</style>
```

```vue{3-16|5|6-7|8-9|10-14}
<script>
</script>
<template>
  <div>
      <h1 class="msg">{{ message }}</h1>
      <input v-model="name" placeholder="¿Cómo te llamas?" />
      <p v-if="name">¡Hola, <b>{{ name }}</b>! 👋</p>
      <button @click="count++"> Haz click </button>
      <p> Has hecho click <b>{{ count }}</b> veces </p>
      <ul>
          <li v-for="(framework, i) in frameworks" :key="i">
              {{ framework }}
          </li>
      </ul>
  </div>
</template>
<style>
</style>
```

```vue{5|8-13}
<script>
</script>
<template>
  <div>
      <h1 class="msg">{{ message }}</h1>
  </div>
</template>
<style>
.msg{
  font-size: 1rem;
  padding: 0 8px;
}
</style>
```
````

---
layout: default
---

# Ejemplo de componente

```shell
ParentComponent.Vue
```

````md magic-move
```vue {all|2}
<script>
import HelloWorld from './HelloWorld.vue'
</script>
```
```vue{4-6|5}
<script>
import HelloWorld from './HelloWorld.vue'
</script>
<template>
  <HelloWorld />
</template>
```
````

---
layout: default
---

# Expresiones con JavaScript

```vue {13-14|15-18|20}
<script setup>
const message = 'Hello, Vue 3! ';
const count = 0;

// format date
function formatDate(date) {
  return date.toISOString();
}

</script>

<template>
  <h1>{{ message + 'AltSchool' }}</h1>
  <h3>{{ message.toUpperCase() }}</h3>
  <!-- Podemos usar cualquier expresion de JS -->
  <h2>{{message.repeat(3)}}</h2>
  <h2>{{message + 'AltSchool'.toUpperCase()}}</h2>
  <div>Cart: {{ count > 1 ? 'items' : 'item' }}</div>
  <!-- Y cualquier funcion que creemos -->
  <div>Current time: {{ formatDate(new Date()) }}</div>
</template>
```


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

