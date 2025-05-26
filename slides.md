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


# Presentado por: 
- **Fabian Beltran**  
  - Organizador de **Vue JS Colombia**  
  - Desarrollador Frontend en **Alegra**


## En colaboración con:
### **Josue Barreto**
- Estudiante Ing. de Software

---
layout: center
---

<!-- TODO: Ajustar con los contenidos -->

## ¿Qué aprenderás hoy?

- ¿Qué es Vue.js?
- Principales características del framework
- Herramientas esenciales del ecosistema
- Ejemplo práctico de un componente Vue
- Recursos y comunidades para seguir aprendiendo

<!-- Objetivo: Convencerte de que pruebes Vue.js -->


---
layout: center
---

<!-- TODO: Mejorar -->

# ¿Qué es Vue.js?

- Framework progresivo para construir interfaces de usuario.
- Enfocado en la capa de vista.
- Fácil de integrar con otros proyectos y bibliotecas.
- Reactivo.

<!-- Te ire dando datos curiosos de Vue a lo largo de la charla.   
Dato curioso #1:  
El creador del framework es Evan You.  
Lo lanzó en 2014, hace más de 11 años. -->


---
layout: center
---

# Características principales

- Reactividad declarativa
- Componentes reutilizables
- Enrutamiento (Vue Router)
- Manejo de estado (Pinia, Vuex)
- Ecosistema robusto

<!-- Dato curioso #2:  
Inicialmente iba a llamarse "View", pero Evan lo cambió a "Vue" tras buscar en Google Translate y elegir el francés por estética. -->

---
layout: default
---

# Como iniciar con Vue.js

Podemos crear un proyecto con solo un `index.html` o usar vite para montar un nuevo proyecto

```html {monaco}
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<div id="app">
    <h1>{{ message }}</h1>
    <input v-model="name" placeholder="¿Cómo te llamas?" />
    <p v-if="name">¡Hola, <b>{{ name }}</b>! 👋</p>
    <button @click="count++"> Haz click</button>
    <p>Has hecho click <b>{{ count }}</b> veces</p>
    <ul>
      <li v-for="(framework, i) in frameworks" :key="i">
          {{ framework }}
      </li>
    </ul>
</div>
<script>
    const { createApp, ref } = Vue
    createApp({
        setup() {
            const message = ref('¡Bienvenido a Vue 3!')
            const count = ref(0)
            const name = ref('')
            const frameworks = ref(['Vue', 'Angular', 'Svelte', 'React'])
            return { message, count, name, frameworks }
        }
    }).mount('#app')
</script>
```

<!--
C:\Users\FabianAlegra\Desktop\VueJsCo\Slides-VueJS-Tools\examples\index.html
-->

---
layout: default
---

# Estructura de un componente Vue

```shell
HelloWorld.Vue
```

Un componente Vue combina HTML, JS y CSS en un solo archivo `.vue`

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

<!--
Dato curioso #3:  
Evan You se inspiró en AngularJS.  
Quería crear algo más liviano, usando solo lo que le gustaba del framework original.  

Los nombre de los componentes tienen que ser MultiWord, esto con la idea de que se puedan diferencias de las etiquetas de html nativas  
Script - Logica 

Template - HTML 

Style - Estilos 
-->
---
layout: default
---

# Implementar componente de Vue

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
```vue{4-6|5}
<script>
import HelloWorld from './HelloWorld.vue'
</script>
<template>
  <hello-world/>
</template>
```
````

---
layout: default
---

# Template – Directivas

Vue usa *directivas* para extender HTML con lógica:

- `v-bind`: enlaza atributos
- `v-model`: enlace bidireccional
- `v-for`: bucles
- `v-if`, `v-else-if`, `v-show`: condiciones
- `@click`, `@input`, etc.: eventos

````md magic-move
```html
<button @click="count++" :disabled="isLoading">
  Count: {{ count }}
</button>
```
````

---
layout: default
---

# Combinando 'v-for' y 'v-if'

Aunque se pueden usar juntos, **no es recomendable** colocar ambos en el mismo elemento. Esto puede generar ambigüedades y problemas de rendimiento.

❌ **Mala práctica – Ambos en el mismo nodo**:

```html
<li v-for="user in users" v-if="user.active">
  {{ user.name }}
</li>
```

✅ **Mejor práctica – Usar en elementos anidados**:

```html
<ul>
  <li v-for="user in users" :key="user.id">
    <span v-if="user.active">{{ user.name }}</span>
  </li>
</ul>
```

<!-- 
ANOTACIONES:

- Vue procesa 'v-if' antes que 'v-for', lo cual puede provocar resultados inesperados.
- La forma correcta es usar 'v-if' dentro del bloque de iteración, no en la misma línea.
-->

---
layout: default
---

# Malas prácticas comunes en templates

Evita incluir **lógica compleja directamente en el template**. Manténlo limpio y declarativo.

❌ **Evitar lógica compleja inline**:

```html
<p>{{ items.filter(i => i.active).map(i => i.name).join(',') }}</p>
```

✅ **Mejor en el script**:

```vue
<script setup>
const activeNames = computed(() =>
  items.value.filter(i => i.active).map(i => i.name).join(',')
)
</script>

<template>
<p>{{ activeNames }}</p>
</template>
```

<!-- 
ANOTACIONES:

- El template debe mostrar datos, no procesarlos.
- Mover la lógica a una propiedad computada mantiene el código más legible y mantenible.
-->


---
layout: default
---

# Uso de expresiones en templates Vue

En Vue puedes usar **expresiones JavaScript directamente en el template**.  
Esto te permite mostrar valores derivados, manipular strings, aplicar condiciones, y llamar funciones.

```vue {monaco-run}
<script setup>  
const message = 'Hello, Vue 3!'
const count = 0

// Función auxiliar para mostrar fecha actual
function formatDate(date) {
  return date.toISOString()
}
</script>

<template>
  <h1>{{ message + 'AltSchool' }}</h1>
  <!-- Métodos de strings -->
  <h3>{{ message.toUpperCase() }}</h3>
  <h2>{{ message.repeat(3) }}</h2>
  <2>{{ message + 'AltSchool'.toUpperCase() }}</2>
  <!-- Operador ternario -->
  <dv>Cart: {{ count > 1 ? 'items' : 'item' }}</dv>
  <!-- Llamado de función definida en script -->
  <div>Current time: {{ formatDate(new Date()) }}</div>'
</template>
```

<!--
ANOTACIONES:

- Vue soporta expresiones JS simples dentro de {{ }}.
- No se recomienda usar lógica compleja o estructuras como loops o asignaciones en el template.
- Las expresiones deben ser *side-effect free* (sin efectos secundarios).
-->

---
layout: default
---

# ¿Qué expresiones JS se pueden usar en el template?

Vue permite usar **expresiones simples**, pero **no estructuras de control ni declaraciones**.

````md magic-move

```vue
<template>
  <!-- Operaciones básicas -->
  <p>{{ count + 1 }}</p>
  <p>{{ name.toUpperCase() }}</p>

  <!-- Operador ternario -->
  <p>{{ isAdmin ? 'Admin' : 'Usuario' }}</p>

  <!-- Acceso a propiedades y funciones -->
  <p>{{ user.age >= 18 }}</p>
  <p>{{ formatDate(new Date()) }}</p>
</template>
```

```vue
<template>
  <!-- ❌ No puedes declarar variables -->
  <!-- <p>{{let x = 5 }}</p>  -->

  <!-- ❌ No puedes usar if/else -->
  <!-- <p>{{ if (a > b) return 'Mayor' }}</p> -->

  <!-- ❌ No loops ni try/catch -->
  <!-- <p>{{ for (let i = 0; i < 5; i++) {} }}</p> -->
</template>
```
````

<!-- 
ANOTACIONES:

- Las expresiones deben evaluarse a un valor, no ejecutar bloques de código.
- Si necesitas lógica compleja, muévela al script como funciones o propiedades computadas.
-->




---

# Ciclo de vida de un componente

````md magic-move
```vue {all|4|8|12}
<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('✅ Componente montado')
})

onUpdated(() => {
  console.log('🔄 Componente actualizado')
})

onUnmounted(() => {
  console.log('🗑️ Componente destruido')
})
</script>
```

````
<!--
![Ciclo de vida](./lifecyle.png)
-->

---

# Hooks

## Estos son 3 hooks que Vue dispone para calcular, observar y reaccionar

### - computed
### - watch
### watchEffect
---
layout: cover
---
# APIs de Vue.js

## Composition (Actual)

## Option (Anterior)

<!-- 
Dato curioso #4:  
Nombres de Versiones Inspirados en Anime:  
Las versiones de Vue.js llevan nombres de series de anime populares, como "Evangelion", "Dragon Ball", "Naruto" y "One Piece" .
 -->

---
layout: default
---

# Composition API vs Options API

Vue 3 ofrece dos formas de escribir componentes:

- **Options API**: tradicional, basada en secciones como `data`, `methods`, `computed`, etc.
- **Composition API**: moderna, más flexible y basada en funciones dentro de `setup()`

Ambas son válidas. Puedes elegir según el caso o combinarlas si lo necesitas.

<!-- 
ANOTACIONES:

- Options API es más familiar para principiantes o quienes vienen de Vue 2.
- Composition API es ideal para proyectos grandes, organización de lógica reutilizable, y mejores herramientas con TypeScript.
-->

---
layout: default
---

# Ejemplo: Options API Vs Composition API


````md magic-move
```vue
<script>
export default {
  data() {
    return {
      message: ''Hola desde Options API!'',
      count: 0
    }
  },
  computed: {
    uppercaseMessage() {
      return this.message.toUpperCase()
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

```vue
<script setup>
import { ref, computed } from 'vue'

const message = ref('Hola desde Composition API!')
const count = ref(0)

const uppercaseMessage = computed(() => message.value.toUpperCase())

function increment() {
  count.value++
}
</script>
```
````
<!-- 
ANOTACIONES:
Options
- Todo se organiza por opción: data, computed, methods.
- Más declarativo y fácil de leer para principiantes.


Composition:
- La lógica se organiza por funcionalidad, no por tipo.
- Mejora la escalabilidad en componentes grandes.
-->


---
layout: default
---

# Herramientas del ecosistema

- **Vue CLI / Vite**: Creación y configuración de proyectos.
- **Vue Router**: Enrutamiento SPA.
- **Pinia / Vuex**: Manejo de estado.
- **Vue Devtools**: Depuración.
- **Vitest**: Para testing
- **Nuxt.js**: SSR y SSG con Vue.

---

# ¿Qué es Vite?  

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

- Herramienta moderna para desarrollo frontend ⚡
- Creador: **Evan You** (el mismo de Vue)
- Usa **módulos ES nativos** y **hot reload rápido**
- Reemplaza a herramientas como Webpack y Vue CLI

## Características:
- Dev server casi instantáneo
- Build optimizado con Rollup
- Configuración mínima
<!--(Primera tecnologia del ecosistema de vue) -->

---

# Impacto de Vite en Vue y más allá

- **Vue CLI fue reemplazado oficialmente por Vite**
- **Vue 3 está optimizado para Vite**
- **Nuxt 3 usa Vite por defecto**
- Herramientas como Vitest, VueUse, UnoCSS están basadas en Vite

🌍 Además:
- Adoptado también por React, Svelte y SolidJS
- Influencia en nuevas herramientas como Turbopack (Next.js)

✨ Vite es el nuevo estándar del desarrollo web moderno

---

# Vue Router - Routing

````md magic-move

```js {all|3-5|8-11|12|15-18}
// Configuración
import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import UserView from './UserView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  // Pasar variable "name" a la vista
  { path: '/user/:name', component: UserView },
  { path: '/lazyloading', component: () => import('./views/Lazyloading.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
```

```vue {all|4|19|5|8|14-15|20-21|23}
<script setup>
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

function goToUsers() {
  router.push({ name : "Users" })
}

</script>
<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <router-link :to="{ name: 'Users' }">Users</router-link>
  </div>

  <p>
    <p>{{ route.params.id }}</p>
    <button @click="router.go(-1)">Regresarse</button>
    <button @click="goToUsers()">Ir a usuarios</button>
  </p>
  <router-view/>
</template>

```
````

<!-- 
route: Información de la ruta actual  

Es un objeto reactivo que representa la ruta activa en ese momento.

router: El controlador de navegación  

Es el objeto que maneja la navegación: crear rutas, redireccionar, avanzar, retroceder.
 -->

---

# Pinia - State management

````md magic-move
```javascript{2|6}
/// Configuración
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

```javascript
// Definición del store en stores/counter.js
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

```vue
<!-- Consumo del store -->
<script setup>
import { useCounterStore } from '@/stores/counter'

// accede a las variables `count` y al metodo `increment`
const store = useCounterStore()
</script>

<template>
  <p> {{ store.count }} </p>
  <button @click="store.increment()">Incrementar conteo</button>
</template>
```
````
