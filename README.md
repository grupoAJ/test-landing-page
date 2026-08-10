# Landing ERP (boceto)

Landing page de marketing para presentar el ERP como producto genérico.
App **standalone**: no depende de ningún backend ni de otro proyecto.

## Cómo levantarla

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Dónde editar el contenido

Casi todo (textos, módulos, planes, datos de contacto) vive en un solo archivo:

- **`content.ts`** — nombre del producto, hero, módulos, features, planes y
  contacto. Empezá por acá.
  - Para cambiar el **nombre del producto**: `brand.name`.
  - Datos de contacto (email / teléfono / web): objeto `contact` (son
    placeholders).

## Estructura

- `app/page.tsx` — arma la página con todas las secciones.
- `app/components/` — Header, formulario, mockups e íconos.
- `app/components/Mockups.tsx` — las "capturas" de la app hechas con HTML/CSS.
  Buscá `TODO: reemplazar por capturas reales` para cambiarlas por imágenes
  cuando las tengas.

## Mover la carpeta

Es autocontenida: podés mover toda la carpeta a otro lado. Después de moverla,
**no lleves `node_modules`**; en el destino corré `npm install` de nuevo.

## Notas

- Modo claro/oscuro con toggle en el header (recuerda la preferencia).
- El formulario de contacto **no envía nada**: es un boceto y simula el éxito.
- Marca: **Born ERP** (paleta verde/azul de Born). El nombre se cambia en
  `content.ts` (`brand.name`).
- Logo: recreación en SVG en `app/components/Logo.tsx`. Para usar el archivo
  exacto, guardalo en `public/` y seguí el TODO de ese archivo.
