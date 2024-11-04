---
id: nextcloud
title: Nextcloud 
description: Tella permite a la(o)s usuaria(o)s a subir fácilmente fotos, videos, pdfs y grabaciones de audio a Nextcloud.
slug: /nextcloud
---

# Conexión Nextcloud

[Nextcloud](https://nextcloud.com/) es una plataforma colaborativa completamente de código abierto. Puedes autohospedar Nextcloud en tu servidor o pagar un [proveedor de Nextcloud confiable](https://nextcloud.com/providers/) para hospedar tu instancia de Nextcloud.

Tella permite a la(o)s usuaria(o)s iniciar sesión en su cuenta de Nextcloud directamente desde Tella y subir archivos directamente en ella.

De manera similar a otras conexiones de servidor (como [Tella Web](/tella-web), [Google Drive](/g-drive), [Uwazi](/uwazi) u [Open Data Kit](/odk)), conectar a un servidor Nextcloud mejora la seguridad de los datos recopilados en Tella al:

1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Garantizar que los datos son enviados directamente de Tella a Nextcloud, sin tener que instalar la app de Nextcloud en el dispositivo o enviar datos a través de una app de terceras partes.
3. Permitir que usuaria(o)s respalden sus datos en un servidor remoto, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil.
4. Asegurar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

Los envíos a Nextcloud toman la forma de "informes" lo cual incluye un título, una descripción de texto y archivos como fotos, videos, grabaciones de audio y documentos pdf.

:::info
La conexión a Nextcloud [solo está disponible en iOS](/features). Actualmente estamos trabajando para añadirla a Tella en Android también.
:::


## Cuándo Usar Nextcloud {#when-to-use-Nextcloud}

La conexión a Nextcloud puede ser particularmente adecuada para:
- Organizaciones que ya utilizan Nextcloud.
- Organizaciones que quiere utilizar software open-source.
- Organizaciones que tienen la capacidad técnica para autohospedar Nextcloud en sus servidores o que pueden pagar un [proveedor de Nexcloud confiable](https://nextcloud.com/providers/) para que alojen Nextcloud por ellas. Si te asocias con un proveedor de Nextcloud, recuerda que el proveedor podrá acceder a tus datos.
- Usuarios que enviarán mayormente archivos multimedia, con algo de texto y no necesitarán recopilación de datos estructurados como formularios o encuestas.


:::tip
Si necesitas ayuda para determinar si Nextcloud es la mejor opción para tu caso de uso, [revisa esta guía]/for-organizations#selecting-the-right-type-of-server) o [contáctanos](/contact-us)!
:::

## Conectate a Nextcloud {#connect-to-Nextcloud}

Para conectarse a Nextcloud:

* Navega a **Configuración ⚙️** > **Servidores** > **+**
* Selecciona "Nextcloud" de la lista de tipos de servidores disponibles.
* Escribe la URL de tu servidor Nextcloud.
* Introduce tu nombre de usuario y contraseña de Nextcloud.
* Elige un nombre para la carpeta donde se guardaran todos tus envíos de Tella.


## Administra la conexión Nextcloud {#manage-the-Nextcloud-connection}

* En **Configuración ⚙️** > **Servidores** > **Nextcloud** >  **⫶** puedes:
  - Eliminar la conexión

Por el momento no es posible iniciar sesión en múltiples cuentas de Nextcloud a la vez. Si deseas iniciar sesión en otra instancia de Nextcloud, elimina tu conexión a Nextcloud y crea una nueva.


## Enviar a Nextcloud {#submit-to-Nextcloud}

* Una vez conectada(o), una tarjeta de "Nextcloud" aparecerá en la sección "Conexiones" de la pantalla de inicio. Toca sobre esta tarjeta para empezar a enviar a Nextcloud.
* La pantalla principal de Nexcloud permite la navegación entre las pestañas Borradores, Bandeja de Salida y  Enviados.
* Toca el botón "Nuevo informe" en la parte inferior de la pantalla para crear un nuevo informe en Nextcloud.
    * En la pantalla "Nuevo informe" puedes completar los detalles del informe, incluyendo el título, descripción, y adjuntos opcionales de fotos, videos y grabaciones de audio.
* Utiliza el botón "Guardar borrador" (en la parte superior derecha de la pantalla) para guardar el informe como un borrador sin dejar la pantalla "Nuevo informe".
    * Para poder guardar como un borrador debes al menos introducir el título del informe.
    * Aparecerá un mensaje en la pantalla para confirmar que el borrador fue guardado.
* El botón "Enviar luego" guarda el informe en la Bandeja de Salida para envío manual.
    * La pestaña bandeja de salida es utilizada a menudo cuando la(o)s recopiladora(e)s de datos no tienen acceso a internet o si la conexión no es estable.
* El botón "Enviar" envía el informe a Nextcloud inmediatamente.
    * Si el envío falla debido a problemas de conectividad, el informe se va a la pestaña "Bandeja de Salida".
    * Si el informe es enviado correctamente, se va a la pestaña "Enviados" y se creará una nueva carpeta en Nextcloud con el título que seleccionaste. Todos los adjuntos serán añadidos a la carpeta y la descripción será añadida como un archivo de texto dentro de la carpeta.


## Borradores de Informes {#draft-reports}


* En la pantalla "Nuevo informe", toca el botón "Guardar borrador" para guardar el informe como un borrador.
    * Se mostrará un mensaje de confirmación, y puedes continuar trabajando en el informe o salir y regresar más tarde.
* Si intentas salir del informe sin guardar, se te pedirá confirmar si tienes seguridad de salir sin guardar el informe.
* En la pestaña Borradores, puedes ver y administrar los borradores de informes. Abre un borrador de informe para continuar trabajando y enviarlo.
* Puedes eliminar un borrador de informe tocando en  **⫶** > **Eliminar** o entrando al informe y tocando el botón Eliminar.


#### Enviar un Informe a Nextcloud {#submit-a-report-to-Nextcloud}

* En un informe, toca "Enviar" para iniciar el envío del informe.
* Se te redireccionará a una pantalla de resumen mostrando el progreso de subida de cada archivo adjunto.
* Un botón de "Eliminar" está disponible para detener la subida y eliminar el informe.
* Si el informe se está subiendo activamente, un botón de "Pausa" te permite detener temporalmente la subida, la cual puede ser reanudada luego utilizando el botón "Reanudar".
* Salir de un informe no afecta el estado de subida. Si el informe se está subiendo activamente, el proceso continúa. 

:::info
Después de que un informe ha sido subido a Nextcloud, no es posible eliminarlo de Nextcloud desde la app móvil de Tella. Eliminar un informe enviado solo eliminará la versión local del mismo, no el informe en el servidor.
:::

:::info
Eliminar un informe en medio de un envío cancelará la subida de los archivos que no hayan subido aún, pero los archivos enviados y archivos parcialmente enviados que ya estén en Nextcloud no serán eliminados.
:::


#### Bandeja de Salida {#outbox}

La Bandeja de Salida contiene informes que han sido guardados para enviar. Esto podría ser:

* Envíos pausados
* Envíos de informes que fueron interrumpidos debido a problemas de conectividad.
* Informes que fueron marcados como "Enviar luego".


#### Informes Enviados {#submitted-reports}

- La pestaña Enviados muestra informes que han sido enviados exitosamente al servidor Nextcloud.
- En la pestaña Enviados, puedes ver y revisar los informes enviados.

:::info
Si la conexión a internet es interrumpida, los informes irán a la pestaña "Bandeja de Salida" y tendrás que reanudar el envío manualmente.
:::



