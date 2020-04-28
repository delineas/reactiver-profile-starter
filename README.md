# Reactiver Profile Starter

> Es un starter pensado para freelance cuyo primer idioma es el español. Mejor aún si son oyentes de Web Reactiva

[Demo](https://reactiver-profile-starter.netlify.app)

Hijo de [eleventail](https://github.com/philhawksworth/eleventail) y [jamstack-web-starter](https://github.com/scottishstoater/jamstack-web-starter) pero principalmente del trabajo de [Marc Filleul](https://www.artisanweb.dev/) con su [MF Blog Starter](https://github.com/marcfilleul/mf-blogstarter).

Además esta plantilla usa masivamente los componentes y *templates* ofrecidos por [mert.dev](https://mert.dev/tailwind-blocks/).

La esencia de este *starter* está en:

- [Eleventy](https://11ty.dev) para la generación del sitio y la gestión de las plantillas.
- [Tailwindcss](https://tailwindcss.com) para la maquetación.

- PostCSS se encarga de:

  - TailwindCSS
  - Autoprefixer
  - PurgeCSS para borrar el CSS que no se usa

- Usamos la fuente [Inter](https://rsms.me/inter/)
- Aviso legal de Cookies de la mano de [Cookie Notice](https://github.com/AOEpeople/cookie-notice#readme)
- Formulario de contacto con [FormSpree](https://formspree.io)
- HTML minificado en producción
- CSS minificado en producción
- Scripts optimizados para producción
- El `<head>` tomado de [htmlhead.dev](https://htmlhead.dev)

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Con `npm run watch` se arranca Eleventy y la compilación de ficheros CSS.
4. Con `npm run build` se compila la versión para producción.

## Desplegar en Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/delineas/reactiver-profile-starter)

## Configuración

- Modificar todos los parámetros del sitio en `src/_data/site.js`
- Si quieres utilizar el formulario de contacto con FormSpree debes darte de alta y usar el correo configurado en el fichero anterior
- Los enlaces del menú principal se modifican en `src/_data/navigation.js`
- Modificar las imágenes de base en `src/assets/img`
- Los estilos pueden usar la sintaxis de `postcss-nested` y ubicarse en `src/_css/main.css`
- Los bloques de código usan estilos de PrismJS definidos en `src/_css/prism.css`

## Agradecimientos

Mi enterno agradecimiento a la plantilla de [Marc Filleul](https://www.artisanweb.dev/) que en la inspiración y la base de esta plantilla.

También a todas los integrantes del primer Grupo de trabajo de Developers Optimistas de la Zona Premium.

## Soporte

A través de las *issues* del repositorio de Github y en https://www.danielprimo.io
