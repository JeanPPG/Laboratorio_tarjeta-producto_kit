// componentes/tarjeta-producto.js
// Práctica de laboratorio · Construye <tarjeta-producto> (Actividad 8 de las diapositivas)
// Completa cada PASO. Los números son los mismos de la diapositiva y de la tarea en Moodle.

// ───────── PASO 2 · Plantilla con Shadow DOM y slots ─────────
// Una sola plantilla, declarada fuera de la clase.
const plantilla = document.createElement("template");
plantilla.innerHTML = `
  <style>
    :host {
      display: block;
      height: 100%;
      border: 1px solid var(--color-marca, #B08968);
      border-radius: 12px;
      background: #fff;
      overflow: hidden;
    }
    .tarjeta {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .foto {
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: #eee;
    }
    ::slotted(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .cuerpo {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 16px;
      flex: 1;
    }
    ::slotted(h3) {
      color: var(--color-marca, #B08968);
      margin: 0;
    }
    .descripcion {
      margin: 0;
      flex: 1;
    }
    ::slotted(p) {
      margin: 0;
    }
    .marca {
      color: var(--color-marca, #B08968);
      font-weight: 700;
      margin: auto 0 0;
      padding-top: 8px;
      border-top: 1px solid #eee;
    }
  </style>

  <div class="tarjeta">
    <div class="foto"><slot name="foto"></slot></div>
    <div class="cuerpo">
      <slot name="nombre"></slot>
      <div class="descripcion"><slot>Sin descripción</slot></div>
      <p class="marca">Precio: $<span id="precio">0</span></p>
    </div>
  </div>
`;

export class TarjetaProducto extends HTMLElement {

  // PASO 3 · Indica qué atributos observa el componente.
  static get observedAttributes() {
    return ["precio"];
  }

  constructor() {
    super();
    // PASO 2 · Crea el Shadow DOM en modo "open".
    // Recuerda: aquí no se leen atributos ni se dibuja HTML.
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // PASO 2 · Agrega al Shadow DOM una COPIA de la plantilla con cloneNode(true).
    // PASO 3 · Muestra el precio inicial.
    this.shadowRoot.append(plantilla.content.cloneNode(true));
    this._mostrarPrecio();
  }

  attributeChangedCallback(nombre, anterior, valor) {
    // PASO 3 · Cuando cambie "precio", actualiza lo que se ve en pantalla.
    // Ojo: si el atributo ya viene escrito en el HTML, este método se ejecuta
    // ANTES que connectedCallback; comprueba que la plantilla ya esté clonada.
    if (nombre === "precio") {
      this._mostrarPrecio();
    }
  }

  _mostrarPrecio() {
    const nodo = this.shadowRoot ? this.shadowRoot.querySelector("#precio") : null;
    if (nodo) {
      nodo.textContent = this.getAttribute("precio") ?? "0";
    }
  }

  // PASO 3 · La propiedad lee y escribe el atributo, así quedan sincronizados.
  get precio() {
    return Number(this.getAttribute("precio"));
  }

  set precio(valor) {
    this.setAttribute("precio", valor);
  }
}

// ───────── PASO 1 · Registra el componente ─────────
// Etiqueta con guion para no chocar con elementos futuros del estándar.
customElements.define("tarjeta-producto", TarjetaProducto);
