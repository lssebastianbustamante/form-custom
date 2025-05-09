# Form Leads 🚀
Interfaz de formulario para recolectar y almacenar información de leads potenciales. Se integra con VTEX Master Data.

## Últimas Mejoras ⚡

### Optimización de Rendimiento
- **Lazy Loading Components**: Carga bajo demanda de componentes
- **Code Splitting**: Reducción del bundle inicial
- **Carga Progresiva**: Mejor First Contentful Paint (FCP)
- **Optimización Regional**: Recursos específicos por país

### Componentes Lazy Load
```typescript
const LazyComponents = {
  FormField: lazy(() => import('./FormField')),
  GoogleMapsProvider: lazy(() => import('./GoogleMapsProvider')),
  ErrorBoundary: lazy(() => import('./ErrorBoundary'))
}
```

### Multi-país
- 🇦🇷 **Argentina**: Geocodificación con Google Maps
- 🇨🇴 **Colombia**: Validación de departamentos
- 🇵🇪 **Perú**: Sistema de distritos

## Configuración

### Site Editor
1. Incluir la interfaz `form-leads` dentro de un `challenge-block`
2. Configurar propiedades:
   - `backgroundContainer`: Color de fondo
   - `titleBlock`: Título del formulario
   - `subTitleBlock`: Subtítulo
   - `dataEntity`: Entidad de Master Data
   - `canonicalUrl`: URL canónica
   - `tiposDeNegocio`: Tipos de negocio disponibles

### Master Data
Crear entidad con los siguientes campos:

#### Campos Comunes
- `nombre`: Text
- `email`: varchar(100)

- `provincia`: varchar(100)
- `tyc`: boolean

#### Campos por País
##### Argentina
- `calle`: varchar(100)
- `altura`: varchar(10)
- `codigoPostal`: varchar(10)
- `tipoNegocio`: varchar(100)
- `localidad`: varchar(100)
- `telefono`: varchar(50)

##### Colombia
- `celular`: varchar(50)
- `ciudad`: varchar(100)


##### Perú
- `celular`: varchar(50)
- `distrito`: varchar(100)


## Características Específicas por País 🌎

### Argentina
- Geocodificación de direcciones
- Validación de código postal
- Validación de CUIT
- Selección de provincia y localidad
- Obtecion de Seller mediante ubicacion - API Google

### Colombia
- Selección de ciudad y departamento
- Selección de tipo de documento
- Validación de formato de dirección

### Perú
- Selección de distrito y provincia
- Validación de documentos
- Formato de dirección local

## Personalización 🎨

### CSS Handles
- `formLeadContainer`
- `formLeadForm`
- `formLeadInput`
- `formLeadLabel`
- `formLeadSelect`
- `formLeadError`
- `formLeadSubmitBtn`

## Manejo de Errores 🛠️

- Validaciones específicas por país
- Validación de campos del formulario
- Manejo de errores de Google Maps API
- Manejo de errores de red
- Estados de carga

## ⚠️ Limitaciones Conocidas
- No se soporta la carga directa de imágenes
- Usar URLs externas para imágenes

## Author & Contributors ✨

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/santiagopazos">
        <img src="https://github.com/santiagopazos.png?size=100" width="100px;" alt="Santiago Pazos"/>
        <br />
        <sub><b>Santiago Pazos</b></sub>
      </a>
      <br />
      <sub>Author</sub>
    </td>
    <td align="center">
      <a href="https://github.com/lssebastianbustamante">
        <img src="https://avatars.githubusercontent.com/u/67764213?v=4" width="100px;" alt="Luis Bustamante"/>
        <br />
        <sub><b>Luis Bustamante</b></sub>
      </a>
      <br />
      <sub>Maintainer</sub>
    </td>
  </tr>
</table>

