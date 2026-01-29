---
id: g-drive
title: Google Drive
description: Tella permite a la(o)s usuaria(o)s a subir fácilmente fotos, videos, pdfs y grabaciones de audio a su Google Drive personal u organizacional.
slug: /g-drive
---

# Conexión de Google Drive

Tella permite a la(o)s usuaria(o)s iniciar sesión en su cuenta de Google directamente desde Tella y subir archivos directamente a Google Drive.

De manera similar a otras conexiones de servidor (como [Tella Web](/tella-web), [Uwazi](/uwazi), [Nextcloud](/nextcloud) u [Open Data Kit](/odk)), conectar a un servidor Google Drive mejora la seguridad de los datos recopilados en Tella al:


1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Garantizar que los datos son enviados directamente de Tella a Google Drive, sin tener que instalar la app de Google Drive en el dispositivo o enviar datos a través de una app de terceras partes.
3. Permitir que usuaria(o)s respalden sus datos en una ubicación remota, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil.
4. Asegurar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

La conexión a Google Drive es una opción para recopilar fotos, videos y audios de la(o)s usuaria(o)s en el terreno, cuando no hay la capacidad técnica para instalar un servidor autohospedado (como [servidor Tella Web](/tella-web) y no hay riesgo al utilizar una herramienta comercial como Google.

Los envíos a Google Drive toman la forma de "informes" lo cual incluye un título, una descripción de texto y archivos como fotos, videos, grabaciones de audio y documentos pdf.



## Cuándo Usar Google Drive {#when-to-use-google-drive}

La conexión a Google Drive puede ser particularmente adecuada para:
- Organizaciones que ya utilizan Google Drive o la [funcionalidad de Disco Compartido] de Google Workspace (https://support.google.com/a/users/answer/7212025?hl=en).
- Usuaria(o)s que ya tienen una cuenta de Google.
- Proyectos donde las necesidades de privacidad no impiden el uso de una herramienta como Google Drive.
- Organizaciones que no pueden o no desean autohospedar una app (como [servidor Tella Web](/tella-web)) en un servidor.

:::tip
Si necesitas ayuda para determinar si Google Drive es la mejor opción para tu caso de uso, [lee nuestra guía](/for-organizations) o [contactanos](/contact-us)!
:::


## Conectate a Google Drive {#connect-to-google-drive}

Para conectarse a Google Drive:

* Navega a **Configuración ⚙️** > **Servidores** > **+**
* Selecciona "Google Drive" de la lista de tipos de servidores disponibles.
* Inicia sesión en tu cuenta de Google utilizando el flujo de inicio de sesión de Google en la vista web.
* Por ahora, Google aún no ha verificado Tella, por lo que tendrás que presionar el botón "Avanzado" y "Continuar a Tella" para poder conectar.
* Da permisos a Tella para modificar tu Google Drive (necesitamos este permiso para poder subir archivos a tu disco y crear carpetas en tu nombre).
* Seleciona "Disco Personal" o "Disco Compartido": Los discos compartidos solo están disponibles para cuentas empresariales con Google Workspace. Si los discos compartidos están disponibles para ti, verás una lista de todos los Discos Compartidos a los que tienes acceso. Selecciona el Disco Compartido al que quieres enviar tus datos.
* Elige un nombre para la carpeta donde se guardaran todos tus envíos de Tella.


## Administra la conexión a Google Drive  {#manage-the-google-drive-connection}

* En **Configuración ⚙️** > **Servidores** > **Google Drive** >  **⫶** puedes:
  - Eliminar la conexión

Por ahora, no es posible iniciar sesión en múltiples cuentas de Google a la vez. Si deseas iniciar sesión en tu Google Drive utilizando un email diferente, elimina tu conexión a Google Drive y crea una nueva.


## Enviar a Google Drive {#submit-to-google-drive}

* Una vez conectada(o), una tarjeta de "Google Drive" aparecerá en la sección "Conexiones" de la pantalla de inicio. Toca sobre esta tarjeta para empezar a enviar a Google Drive.
* La pantalla de principal de Google Drive permite la navegación entre las pestañas Borradores, Bandeja de Salida y  Enviados.
* Toca el botón "Nuevo informe" en la parte inferior de la pantalla para crear un nuevo informe en Google Drive.
    * En la pantalla "Nuevo informe" puedes completar los detalles del informe, incluyendo el título, descripción, y adjuntos opcionales de fotos, videos y grabaciones de audio.
* Utiliza el botón "Guardar borrador" (en la parte superior derecha de la pantalla) para guardar el informe como un borrador sin dejar la pantalla "Nuevo informe".
    * Para poder guardar como un borrador debes al menos introducir el título del informe.
    * Aparecerá un mensaje en la pantalla para confirmar que el borrador fue guardado.
* El botón "Enviar luego" guarda el informe en la Bandeja de Salida para envío manual.
    * La pestaña bandeja de salida es utilizada a menudo cuando la(o)s recopiladora(e)s de datos no tienen acceso a internet o si la conexión no es estable.
* El botón "Enviar" envía el informe a Google Drive inmediatamente.
    * Si el envío falla debido a problemas de conectividad, el informe se va a la pestaña "Bandeja de Salida".
    * Si el informe es enviado correctamente, se va a la pestaña "Enviados" y se creará una nueva carpeta en Google Drive con el título que seleccionaste y la descripción que introdujiste. Todos los adjuntos serán añadidos a la carpeta.


## Borradores de Informes {#draft-reports}

* En la pantalla "Nuevo informe", toca el botón "Guardar borrador" para guardar el informe como un borrador.
    * Se mostrará un mensaje de confirmación, y puedes continuar trabajando en el informe o salir y regresar más tarde.
* Si intentas salir del informe sin guardar, se te pedirá confirmar si tienes seguridad de salir sin guardar el informe.
* En la pestaña Borradores, puedes ver y administrar los borradores de informes. Abre un borrador de informe para continuar trabajando y enviarlo.
* Puedes eliminar un borrador de informe tocando en los tres puntos > **Eliminar** o entrando al informe o tocando el botón Eliminar.


#### Enviar un Informe a Google Drive {#submit-a-report-to-google-drive}

* En un informe, toca "Enviar" para iniciar el envío del informe.
* Se te redireccionará a una pantalla de resumen mostrando el progreso de subida de cada archivo adjunto.
* Un botón de "Eliminar" está disponible para detener la subida y eliminar el informe.
* Si el informe se está subiendo activamente, un botón de "Pausa" te permite detener temporalmente la subida, la cual puede ser reanudada luego utilizando el botón "Reanudar".
* Salir de un informe no afecta el estado de subida. Si el informe se está subiendo activamente, el proceso continúa. 

:::info
Después de que un informe ha sido subido a Google Drive, no es posible eliminarlo de Google Drive desde la app móvil de Tella. Eliminar un informe enviado solo eliminará la versión local del mismo, no el informe en el servidor.
:::

:::info
Eliminar un informe en medio de un envío cancelará la subida de los archivos que no hayan subido aún, pero los archivos enviados y archivos parcialmente enviados que ya estén en Google Drive no serán eliminados.
:::


#### Bandeja de Salida {#outbox}

La Bandeja de Salida contiene informes que han sido guardados para enviar. Esto podría ser:

* Envíos pausados
* Envíos de informes que fueron interrumpidos debido a problemas de conectividad.
* Informes que fueron marcados como "Enviar luego".


#### Informes Enviados {#submitted-reports}

- La pestaña Enviados muestra informes que han sido enviados exitosamente al Google Drive.
- En la pestaña Enviados, puedes ver y revisar los informes enviados.

:::info
Si la conexión a internet es interrumpida, los informes irán a la pestaña Bandeja de Salida y tendrás que reanudar el envío manualmente.
:::



