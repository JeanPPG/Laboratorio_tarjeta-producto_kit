# Práctica de laboratorio · `<tarjeta-producto>`

Programación Integrativa de Componentes Web · Unidad 1: Web Components

| Dato | Completa |
|---|---|
| Emprendimiento | Café Loma |
| Estudiantes (Apellido Nombre) | |
| NRC | 36642 |
| Fecha | 2026-10-16 |
| Enlace del repositorio | https://github.com/JeanPPG/Laboratorio_tarjeta-producto_kit |

## Propuesta del emprendimiento

- Nombre del emprendimiento: Café Loma
- Problema que resuelve: Entre clases solo hay vending amargo y caro, sin café de especialidad rápido al paso.
- Cliente al que se dirige: Estudiantes y docentes que quieren café bueno, barato y rápido.

## Cómo abrir el proyecto

1. Abre la carpeta en Visual Studio Code.
2. Clic derecho sobre `index.html` → **Open with Live Server**. Los módulos no cargan con `file://`.
3. Abre las herramientas del navegador (F12) y deja visible la pestaña **Consola**.

## Registro de los pasos

### Paso 1 · index.html y el módulo

- Etiqueta que registramos: `tarjeta-producto`
- ¿Por qué el nombre debe llevar guion?: El estándar exige guion en custom elements para distinguirlos de etiquetas nativas y evitar choques con elementos futuros.
- Ruta del módulo y cómo lo importa la página: `componentes/tarjeta-producto.js` con `<script type="module" src="./componentes/tarjeta-producto.js">`.

### Paso 2 · Plantilla, Shadow DOM y slots

- Slots con nombre que tiene la plantilla: `foto` y `nombre`
- Texto de respaldo del slot sin nombre: `Sin descripción`
- ¿Qué pasaría si no usáramos `cloneNode(true)`?: Moveríamos los nodos originales de la plantilla en vez de copiarlos, la primera tarjeta vaciaría la plantilla y las siguientes quedarían vacías o compartirían los mismos nodos.

### Paso 3 · Atributo precio y estilos

- Método que reacciona cuando cambia `precio`:
- Color de marca (`--color-marca`) y dónde lo definimos:
- Valor de respaldo que usa el componente si la página no define la variable:

### Paso 4 · Tres productos del emprendimiento

| # | Producto | Precio |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |

### Paso 5 · Repositorio del equipo

| Integrante | Qué hizo en este laboratorio |
|---|---|
| | |
| | |
| | |
| | |

## Verificación

Marca con una `x` lo que ya comprobaste en el navegador.

- [ ] La etiqueta tiene guion.
- [ ] La página solo cambia lo que el componente expone con `var()`.
- [ ] `setAttribute` cambia el precio en pantalla.
- [ ] La consola no muestra errores.

Prueba que usamos en la consola:

```js
document.querySelector("tarjeta-producto").setAttribute("precio", "25");
```

Resultado que vimos:

## Reto extra (opcional)

- [ ] Atributo `destacado` que cambia el borde con `:host([destacado])`.

## Uso de inteligencia artificial

- Herramienta usada (o «ninguna»):
- Para qué la consultamos:
- Qué cambiamos o comprobamos nosotros:
