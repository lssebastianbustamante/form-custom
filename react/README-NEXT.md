# Form Leads (Next.js standalone)

Este paquete contiene el formulario desacoplado de VTEX para integrarlo en un proyecto Next.js.

## Requisitos

- React 16.14 (o 17/18 si migras), React DOM.
- react-intl (proveer IntlProvider).
- @react-google-maps/api.
- Variable de entorno con tu API Key de Google Maps.

## Instalación de dependencias (ejemplo)

```bash
# con npm	npm i react react-dom react-intl @react-google-maps/api classnames react-select react-loading-skeleton
# tipos (si usas TS)	npm i -D @types/react @types/node @types/classnames
```

## Configuración de TypeScript

En `react/tsconfig.json` ya se configuró:
- lib: ["es2019", "dom"].
- target: "es2019".
- types: ["google.maps", "node"].

Si tu IDE marca error por `node` types, instala `@types/node` en devDependencies del proyecto Next.

## Variables de entorno

Crea `.env.local` en tu proyecto Next con:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key
```

## Uso

Envuelve tu aplicación con `IntlProvider` en `_app.tsx`:

```tsx
import { IntlProvider } from 'react-intl'
import messagesEs from '../messages/es.json'

export default function App({ Component, pageProps }) {
  return (
    <IntlProvider locale="es" messages={messagesEs}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}
```

Importa y usa el formulario (deshabilitar SSR del mapa es recomendable):

```tsx
import dynamic from 'next/dynamic'
const FormLeads = dynamic(() => import('../react/FormLeads'), { ssr: false })

export default function Page() {
  return (
    <FormLeads
      country="ARG"
      dataEntity="LEADS"
      backgroundContainer="#e18719"
      titleBlock="store/form.title"
      subTitleBlock="store/form.subtitle"
      textButton="store/form.cta"
      canonicalUrl="/contacto"
      tiposDeNegocio="Kiosco, Almacén, Supermercado, otros"
    />
  )
}
```

## Notas de migración desde VTEX

- Eliminado uso de `useRuntime` (VTEX). Ahora `country` se pasa por props.
- Reemplazado `vtex.css-handles` por un hook local `useCssHandles`.
- Reemplazado `IOMessage` por `FormattedMessage`.
- `useGoogleMapsState` ahora lee la API Key desde `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
- El envío de datos (Master Data) sigue en `utils/fetchDocument.ts`. Si no usas VTEX, adapta esa función a tu backend.

## Estilos

Los CSS Handles se mantienen como claves de clase; el hook local retorna un objeto `{ [handle]: handle }`. Puedes mapearlos a tu sistema de estilos si lo prefieres.
