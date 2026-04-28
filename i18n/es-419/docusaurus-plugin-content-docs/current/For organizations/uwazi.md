---
id: uwazi
title: Uwazi
description: La conexión a servidor Uwazi está disponible para organizaciones que buscan recopilar datos estructurados.
slug: /uwazi
---

# Conexión Uwazi

[Uwazi](https://uwazi.io/) es una herramienta de documentación de código abierto desarrollada por [HURIDOCS](https://huridocs.org). Es una aplicación de base de datos, flexible, basada en la web desarrollada para que la(o)s defensora(e)s de derechos humanos administren sus recopilaciones de información, incluyendo documentos, evidencias, casos, y reclamaciones.

Uwazi permite a las organizaciones agregar, en un repositorio central, los datos recopilados por sus miembros o socia(o)s. La(o)s usuaria(o)s de Tella se conectan a la instancia Uwazi de su organización, descargan formularios (llamados plantillas), rellenan plantillas cuantas veces sea necesario (incluso si no tienen conexión a internet), y suben los datos. Las organizaciones luego pueden curar, organizar, y publicar sus datos directamente desde Uwazi.

Similarly to all other server connections([Tella Web](/tella-web), [Google Drive](/g-drive), [Nextcloud](/nextcloud), [Dropbox](/dropbox), and [Open Data Kit](/odk)), connecting to Uwazi enhances the security of data collected on Tella by:
1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Asegurar que los datos son enviados directamente de Tella a Uwazi, sin tener que depender de una herramienta de terceras partes o app
3. Permitir a la(o)s usuaria(o)s a respaldar sus datos en un servidor remoto, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil
4. Asegurar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

### Probando Uwazi {#testing-uwazi}

Puedes probar Uwazi utilizando [esta instancia Demo](https://demo.uwazi.io/).

### Cuándo usar Uwazi {#when-to-use-uwazi}

Recomendamos Uwazi a organizaciones que necesiten usuaria(o)s en el terreno para recopilar datos de manera estructurada a través de formularios.

Uwazi también permite a la(o)s administradora(e)s de proyectos organizar, analizar, visualizar, y publicar fácilmente los datos recopilados. Es especialmente poderoso porque su base de datos permite hacer relaciones entre entidades, lo que ayuda a conectar puntos de datos (como incidentes, perpetradora(e)s, y víctimas) para generar patrones. Uwazi también es excelente para recopilar datos en muchos idiomas diferentes y para facilitar la colaboración entre equipos.

Uwazi no cuenta con una app móvil oficial, por lo que al integrar Uwazi y Tella, puedes elevar las capacidades de cifrado y fuera de línea de Tella y aprovechar al máximo las habilidades de Uwazi para organizar, buscar, descargar, visualizar, y publicar información.

Aquí hay algunos indicadores de que Uwazi puede ser particularmente adecuado para tu caso de uso:
- Necesitas hacer que los datos recopilados sean accesibles públicamente en un sitio web.
- Necesitas establecer relaciones entre puntos de datos.
- Los datos deben ser contenidos en registros de base de datos estructurados.
- Necesitas limpiar, editar, organizar y curar los datos recopilados.
- Necesitas buscar, encontrar y analizar datos rápidamente.
- Trabajas en un entorno multilingüe.
- Trabajas en un entorno colaborativo con multiples usuarios y diferentes perfiles.
- Necesitas preservar información de manera segura a largo plazo.

Puedes aprender más sobre Uwazi en la [documentación oficial de Uwazi](https://uwazi.readthedocs.io/en/latest/). HURIDOCS es una excelente amistad de Horizontal, por lo que si tienes preguntas sobre Uwazi o te gustaría que te conectemos al equipo de HURIDOCS [contact-us](contact-us).

:::tip
Si necesitas ayuda para determinar si Uwazi es la mejor opción para tu caso de uso, [lee nuestra guía](/for-organizations) o [contactanos](/contact-us)!
:::

## Configura Uwazi en un servidor {#configure-uwazi-on-a-server}


El equipo HURIDOCS ofrece 2 alternativas sobre como configurar tu servidor Uwazi:

1. Autohospedado: Comparte esta [guía completa del administrador](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html) con tu administrador de sistemas para instrucciones paso a paso sobre como instalar Uwazi en tu servidor, configurar respaldos y funciones avanzadas.
2. Hospedado por HURIDOCS: HURIDOCS ofrece paquetes de hospedaje como un servicio. Servicios de hospedaje gratuito (hasta un almacenamiento limite) y una versión de prueba de Uwazi están disponibles para organizaciones de los derechos humanos. [Contacta a HURIDOCS](https://huridocs.org/services/) para más detalles sobre el servicio.

## Modela Tus Datos {#model-your-data}

Una colección de Uwazi está hecha de Entidades. Una entidad tiene Propiedades que son los campos que la(o)s usuaria(o)s de Tella rellenan para recopilar datos. Las Entidades pueden tener Documentos Primarios y/o Archivos de Soporte y algunas propiedades que son definidas por administradora(e)s en el servidor Uwazi cuando crean las plantillas. Una plantilla es un formulario vacío que puede ser rellenado cuantas veces sea necesario; una vez que se rellena una plantilla, se convierte en una Entidad.

[Aquí puedes leer](https://uwazi.readthedocs.io/en/latest/admin-docs/building-info-architecture.html#understanding-properties) sobre las propiedades que están disponibles en el servidor Uwazi y cómo modelar tus datos y crear tus plantillas. Por el momento solo permitimos propiedades y funcionalidades que han sido marcadas como alta prioridad por la(o)s usuaria(o)s de Uwazi. Si necesitas otras propiedades, [contáctanos](/contact-us).

:::info
Si la(o)s usuaria(o)s de Tella descargan una plantilla que tiene propiedades que no son permitidas en Tella, esas propiedades no aparecerán en la app. De todos modos, la(o)s usuaria(o)s aún podrán enviar las entidades, y la(o)s admins podrán acceder a estas entidades, incluyendo todas las propiedades que fueron rellenadas, sin ningún problema.
:::

### Propiedades Disponibles {#available-properties}

| **Propiedad o Función** | **Tella Android**| **Tella iOS** | **Tella Android FOSS** |
|------|------|-----|-----| 
| Documentos Primarios y de Soporte | ✔️ | ✔️ | ✔️ |
| Texto Plano | ✔️ | ✔️ | ✔️ |
| Numérico  | ✔️ | ✔️ | ✔️ |
| Selección Única  | ✔️ | ✔️ | ✔️ | 
| Selección Múltiple   | ✔️ | No | ✔️ | 
| Relación | ✔️ | ✔️ | ✔️ |
| Fecha Única | ✔️ | ✔️ | ✔️ |
| Fecha Múltiple | ✔️ | No | ✔️ |
| Enlace Externo | ✔️ | No | ✔️ |
| Texto Enriquecido | ✔️ | ✔️ | ✔️ |
| Rango de Fecha Único y Múltiple | ✔️ | No | ✔️ |
| Adjuntar Medios (Imagen, Video, o Audio) | ✔️| ✔️ | ✔️ |
| Geolocalización | ✔️ | No | ✔️ |
| ID Generado  | ✔️ | No | ✔️ |


## Prepara a la Gente Sobre el Terreno para Empezar a Enviar Datos {#get-people-on-the-ground-ready-to-start-submitting-data}

### Conectar al Servidor {#connect-to-the-server}

Para conectarse a un servidor Uwazi:

* Navigate to **Settings ⚙️** > **Connections** > **+**
* Selecciona "Uwazi" de la lista de tipos de servidores disponibles.
* Introduce la URL del servidor Uwazi de la organización (generada o proporcionada por la(o)s admins).
* Elige entre:
    *  **Iniciar Sesión:** si un nombre de usuaria(o) y contraseña fueron proporcionados por la(o)s admins.
    *  **Acceso Público:** si el servidor está configurado para aceptar envíos anónimos.
* Si el servidor requiere autenticación en dos factores, introduce el código de un solo uso.
* Elige el **Idioma** en el cual quieres mostrar tus plantillas.

:::info
Puedes ver [este video](/video-tutorials#uwazi) sobre cómo conectarse a un servidor Uwazi desde Tella.
:::

### Envía Tu Información {#send-your-information}

Una vez te hayas conectado con éxito a una instancia Uwazi, verás una nueva tarjeta con la etiqueta "Uwazi" en la sección **Conexiones** de tu pantalla de inicio de Tella.

Para descargar una plantilla, toca el botón **+** en la parte inferior de la pantalla. Verás una lista de plantillas que están disponibles para ti en todas las instancias de Uwazi a las que estes conectada(o). Toca el botón **Descargar** para descargar plantillas o el botón **Refrescar** para ver si hay actualizaciones en las plantillas disponibles para ti en el servidor.

Luego vuelve a la pantalla principal de Uwazi y toca la plantilla que quieres usar para crear una entidad.


#### Alternativas de Envío de Datos {#data-submission-alternatives}

| **Función** | **Detalles**| **Tella Android** | **Tella iOS** | 
|------|------|------|------|
| Enviar | Envia el formulario completado al servidor conectado. | Sí | Sí |
| Guardar como borrador | Guardar un formulario que no está completo.  | Sí | Sí |
| Enviar luego | Marcar un formulario como listo y enviarlo a la pestaña Bandeja de Salida.  | Sí | Sí |
| Pestaña de Borradores | Una pestaña con todos los borradores. Los borradores pueden ser editados o eliminados.  | Sí | Sí |
| Pestaña de Bandeja de Salida | Una pestaña con los formularios listos para enviar. Los formularios en la bandeja de salida pueden ser editados o eliminados.  | Sí | Sí |
| Pestaña de Enviados | Una pestaña con todos los formularios que se han enviado con éxito al servidor. Los formularios enviados pueden ser eliminados.  | Sí | Sí |
| Pausar/Resumir envío | Usuaria(o)s pueden pausar manualmente un envío y reanudarlo cuando esté listo.  | Sí | No |
| Pausar envíos automáticamente cuando se esté fuera de línea. | Los envíos serán enviados a la Bandeja de Salida si un envío falla debido a problemas de conexión.  | Sí | Sí |


