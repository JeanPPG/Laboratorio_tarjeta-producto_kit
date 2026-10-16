# Práctica de laboratorio · `<tarjeta-producto>`

Programación Integrativa de Componentes Web · Unidad 1: Web Components

| Dato | Completa |
|---|---|
| Emprendimiento | Café Loma |
| Estudiantes (Apellido Nombre) | Peñaranda Jean |
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

- Método que reacciona cuando cambia `precio`: `attributeChangedCallback` (con apoyo de `_mostrarPrecio()`)
- Color de marca (`--color-marca`) y dónde lo definimos: `#6B3F2A`, definido en `estilos.css` en el selector `tarjeta-producto`
- Valor de respaldo que usa el componente si la página no define la variable: `#B08968` en `var(--color-marca, #B08968)`

### Paso 4 · Tres productos del emprendimiento

| # | Producto | Precio |
|---|---|---|
| 1 | Espresso Clásico | 2500 |
| 2 | Capuchino Vainilla | 3200 |
| 3 | Mocha Chocolate | 3800 |

### Paso 5 · Repositorio del equipo

Enlace: https://github.com/JeanPPG/Laboratorio_tarjeta-producto_kit — `develop` integra `feature/tarjeta-producto-1` (Espresso), `feature/tarjeta-producto-2` (Capuchino) y `feature/tarjeta-producto-3` (Mocha).

| Integrante | Qué hizo en este laboratorio |
|---|---|
| Peñaranda Jean | Emprendimiento Café Loma, componente `<tarjeta-producto>` (Pasos 1-4), 3 fotos reales, fix de alineación (imagen 4/3 + flex), reparto una tarjeta por feature, merges a `develop` y README completo |

## Verificación

Marca con una `x` lo que ya comprobaste en el navegador.

- [x] La etiqueta tiene guion.
- [x] La página solo cambia lo que el componente expone con `var()`.
- [x] `setAttribute` cambia el precio en pantalla.
- [x] La consola no muestra errores.

Prueba que usamos en la consola:

```js
document.querySelector("tarjeta-producto").setAttribute("precio", "25");
```

Resultado que vimos: La primera tarjeta (Espresso Clásico) actualiza su `#precio` a `25` sin recargar. Página verificada en Live Server con las 3 tarjetas parejas (foto 4/3 sin solape, detalle alineado) y consola sin errores.

## Reto extra (opcional)

- [ ] Atributo `destacado` que cambia el borde con `:host([destacado])`.

## Uso de inteligencia artificial

- Herramienta usada (o «ninguna»): opencode + Muse Spark (Shadow Monarch)
- Para qué la consultamos: propuesta de emprendimiento sencillo, plan del feature y redacción/implementación del componente con slots, precio reactivo y `var(--color-marca)`
- Qué cambiamos o comprobamos nosotros: elegimos Café Loma y precios 2500/3200/3800, descargamos 3 fotos reales a `img/`, verificamos sintaxis con `node --check`, confirmamos `customElements.define`, `cloneNode(true)`, `attributeChangedCallback` y prueba `setAttribute("precio","25")` en código
