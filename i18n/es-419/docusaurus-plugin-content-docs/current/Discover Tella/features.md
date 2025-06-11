---
id: funciones
title: Funciones de Tella
description: Una descripción detallada de las funciones de Tella.
slug: /funciones
---

import FeaturesTable from '.././_features-table.md';
import ConnectionsTable from '.././_connections-table.md';

# Funciones de Tella

Todas las siguientes funciones están disponibles para toda(o)s la(o)s usuaria(o)s tan pronto descargan Tella. Estas no requieren ninguna conexión a un servidor ni ninguna configuración especial.

<FeaturesTable/>


## Bloqueo de la App {#app-lock}

Al instalar Tella, la/el usuaria(o) debe seleccionar un método de bloqueo 🔒 para cifrar y descifrar el contenido de la app.


* En Android, la/el usuaria(o) puede seleccionar un patrón, PIN, o contraseña.
* En iOS, la/el usuaria(o) puede seleccionar un PIN o contraseña.

Sin este método de bloqueo, no es posible abrir Tella.

:::danger
Si la/el usuaria(o) pierde su método de bloqueo, no es posible volver a tener acceso a Tella y los archivos almacenados dentro de la app. La/el usuaria(o) tiene que desinstalar y reinstalar Tella, y todos los archivos se perderán.🔒🔑🚪
:::

:::tip Video tutorial🎥
Aprende más sobre Métodos de Bloqueo de Tella en nuesto [video tutorial](/video-tutorials#tella-locks)
:::

## Cifrado en segundo plano {#background-encryption}

Tella [cifra](#encryption) archivos en segundo plano de manera que los usuarios puedan continuar realizando acciones (tomar más fotos o videos, importar más archivos, etc) mientras los archivos están siendo cifrados. Los usuarios pueden ver las actividades que se están realizando en segundo plano en una **Bandeja de actividad en segundo plano** que es accesible desde la pantalla principal de Tella, al tocar el icono de "notificaciones"  (🔔) en la parte superior izquierda.

Mientras los archivos están siendo cifrados, Tella muestra un marcador naranja el icono de las notificaciones. Si el usuario abre la bandeja de actividad en segundo plano mientras algunos archivos están siendo cifrados, verán la lista de archivos en cola y el progreso del cifrado.

:::danger
Si el usuario sale de Tella forzadamente (por ejemplo, usando [Salida Rápida](#quick-exit) o minimiza la app) mientras los archivos están siendo cifrados en segundo plano, estos se perderán.
:::

:::info
Si el [Modo de Verificación](/features#verification-mode) está activo, el cifrado en segundo plano automáticamente se deshabilita para garantizar que todos los metadatos de archivos son capturados la mismo tiempo que la foto, video o audio son guardados.
:::

## Respaldar archivos a la nube {#backup-files}
We are in the process of adding options for individuals and organizations to backup their data to different clouds. Backups, for the moment, need to be made manually, by creating reports (using, for example, the date of "today" as the report title) and submitting them to the connected server. Files will be available on the connected server inside a folder with the report title.

For the moment we support the following connections. Follow each of the links to find details and step-by-step guides on how to connect and use each of them:
* [Open Data Kit (ODK)](/odk)
* [Uwazi](/uwazi)
* [Tella Web](/tella-web)
* [Google Drive](/g-drive)
* [Nextcloud](/nextcloud)
* [Dropbox](/dropbox)

En esta tabla explicamos qué tipos de servidores están disponibles en las apps de Tella:
<ConnectionsTable/>.


:::danger
For the moment, the submission to any type of server it is **not** encrypted. People who have access to the server itself are able to see the files.
:::



## Configuración de tiempo de espera para bloqueo {#lock-timeout-configuration}

Por defecto Tella se bloqueará inmediatamente cada vez que la/el usuaria(o) salga de la app o se apague la pantalla de tu teléfono. Si te gustaría cambiar esta configuración, la/el usuaria(o) puede hacerlo yendo a

Configuración ⚙️ > Seguridad > Tiempo para Bloqueo.

Las opciones disponibles son 1 minuto, 5 minutos, 30 minutos y 1 hora. ⏱️

:::info
Por favor usa esta función cuidadosamente ya que si Tella está desbloqueada los datos estarían desprotegidos y cualquiera que entre a Tella podría ver toda la información allí. 
:::

:::info
Cuando la cámara o la grabadora de audio estén abiertas, Tella no se bloqueará
:::

:::tip Video tutorial 🎥
Aprende más sobre Función de Seguridad Adicional de Tella en nuestro [video tutorial](/video-tutorials#additional-security-features)
:::



## Modo silencioso de cámara {#camera-silent-mode}

Por defecto Tella tiene el modo silencioso de la cámara deshabilitado. Yendo a **Configuración ⚙️** > **Seguridad** > **Modo silencioso de la cámara**, es posible desactivar el sonido del obturador de la cámara para llamar menos la atención al hacer fotos. 📷🔇

:::tip Video tutorial 🎥
Aprende más sobre Función de Seguridad Adicional de Tella en nuestro [video tutorial](/video-tutorials#additional-security-features)
:::


## Seguridad de la pantalla {#screen-security}

Por defecto Tella bloquea las capturas de pantalla, grabaciones de pantalla dentro de Tella y oculta la pantalla de vista previa de la lista de apps recientes📱🔒. Es posible deshabilitar esta función de seguridad si la/el usuaria(o) necesita tomar capturas o grabaciones de pantalla, o para reflejar Tella en una computadora para una presentación, al ir a **Configuración** ⚙️ > **Seguridad** > **Seguridad de pantalla**.

En iOS la seguridad de pantalla solo bloquea la grabación de pantalla dentro de Tella y bloquea la pantalla en la lista de apps recientes, pero no es posible deshabilitar las capturas de pantalla o grabaciones de pantalla.


:::tip Video tutorial 🎥
Aprende más sobre Función de Seguridad Adicional de Tella en nuestro [video tutorial](/video-tutorials#additional-security-features)
:::

## Restringir intentos de desbloqueo{#restrict-unlocking-attempts}
Yendo a **Configuración ⚙️** > **Seguridad** > **Eliminar después de Desbloqueo Fallido**, la/el usuaria(o) puede decidir cuántos intentos de desbloqueo fallidos están permitidos antes de que todo dentro de Tella sea eliminado.

Por defecto, esta configuración está Deshabilitada, lo que significa que los intentos de desbloqueo no están restringidos y los datos no serán eliminados. La/el usuaria(o) puede elegir restringir los intentos de desbloqueo a 5, 10, o 20. Si eligen cualquiera de estas opciones, también pueden seleccionar si mostrar un indicador visual en la pantalla de desbloqueo 3 intentos antes del número especificado (3 intentos restantes, 2 intentos restantes, etc.), o no mostrar ningún indicador visual.

Después del número de intentos fallidos especificados, todos los archivos, conexiones y todo en Tella se elimina, y la/el usuaria(o) volverá al estado "recién instalado" de la app.

:::info
La función de Restringir Intentos de desbloqueo no se puede habilitar si el camuflaje de Calculadora está habilitado.
:::

:::danger
Aunque está configuración de privacidad evita los intentos de desbloqueo por fuerza bruta para ingresar a Tella, debe ser usada con precaución, ya que no hay forma de restaurar el contenido de Tella una que vez el número máximo de intentos fallidos es alcanzado.
:::

## Editar Medios {#edit-media}
Estamos en proceso de añadir la habilidad de editar archivos multimedia directamente dentro del contenedor cifrado de Tella, para que la(o)s usuaria(o)s no necesiten exportar sus archivos fuera de Tella para editarlos.

| **Tipo de Medio** | **Función** | **Tella Android** | **Tella iOS** | **Tella FOSS** |
|----------------|-------------|-------------------|---------------|----------------|
| Imagen          | Recortar        | ✔️                | ✔️            | ✔️             |
| Imagen          | Rotar      | ✔️                | ✔️            | ✔️             |
| Imagen          | Voltear        | ✔️                | Aún no       | ✔️             |
| Imagen          | Auto-zoom        | ✔️                | Aún no       | ✔️        |
| Video          | Recortar        | Aún no       | ✔️          | Aún no        |
| Video          | Rotar      | Aún no       | ✔️          | Aún no        |
| Audio          | Recortar        | Aún no           |  ✔️          | Aún no        |

Users can edit a picture by going to **More** > **Edit** from the **Images** folder or by tapping the **Edit** button on the top right while viewing image you have on Tella. 
- **Rotate**:  Use the Rotate button at the bottom of the screen to rotate the image counter-clock wise. 
- **Recortar**: Arrastra las esquinas del lienzo blanco para recortar la imagen. 
- **Auto-zoom**: La imagen acercará o alejará automáticamente dependiendo del lienzo seleccionado para evitar perder calidad de imagen.
- **Voltear**: Usa los botones de voltear para reflejar la imagen horizontal o verticalmente.

Cuando finaliza la edición, los usuarios pueden presionar el signo de verificación naranja en la parte superior derecha de la pantalla de edición. El archivo editado se guardará como una copia del archivo original en la misma carpeta.


Users can edit videos or audio recordings: 
- In any folder, next to the file to be edited, by tapping on **⁝** > **Edit**.
- While listening to an audio recording or watching a video in Tella, by tapping the **Edit** button in the top right corner. 

Current editing options include:
- **Trim**: Move the vertical orange lines to select the new start and end point of your audio or video. 
- **Rotate**: Use the Rotate button on the top right of the screen to rotate the video counter-clock wise.

Use the Play button at the bottom of the screen to listen to the audio or the Cancel button to start over. When you are done editing the file, use the orange scissors ✂️ icon in the top-right corner to save the trimmed audio or video. The edited file will be saved as a copy of the original file in the same folder.


## Cifrado {#encryption}

Todos los archivos almacenados dentro de Tella están cifrados. Sin el método de bloqueo de la app, es imposible descifrar y acceder a cualquiera de los archivos almacenados en Tella. 🔒🔐

Al instalar la app, la/el usuaria(o) decide cuál método de bloqueo le gustaría utilizar. Para Android, la/el usuaria(o) puede usar un patrón de seis puntos, un PIN, o una contraseña. Para iOS, pueden usar un PIN o una contraseña. La app no se puede abrir sin el método de bloqueo.

Incluso si el dispositivo está conectado a una computadora y todos los datos del dispositivo son extraídos para ser analizados, todo el contenido de Tella parecerá incoherente y será inútil. Desbloquear la app introduciendo el método de bloqueo correcto es la única forma de descifrar, y por lo tanto leer, el contenido almacenado en Tella. 

:::danger
Si el método de bloqueo es demasiado débil, un(a) adversaria(o) podría adivinarlo y abrir la app en el teléfono; o los datos podrían ser extraídos y una computadora podría forzar la clave de cifrado y descifrar los datos.
:::

:::danger
Si la/el usuaria(o) olvida su método de bloqueo, no hay forma de retomar acceso a la app y recuperar su contenido
:::

:::tip Video Tutorial 🎥
Aprende más sobre Bloqueos y Cifrado en nuestro [video tutorial](/video-tutorials#tella-locks)
:::

:::info
Detalles técnicos sobre el cifrado se pueden encontrar en la sección [Seguridad y Privacidad](/security-and-privacy).
:::

## Administración de archivos {#file-management}

Tella le permite a la(o)s usuaria(o)s administrar archivos y carpetas de manera similar a como lo harían en una computadora. Todos los archivos y carpetas están **cifrados y solo accesibles dentro de Tella**. 📂📝

En Tella, la(o)s usuaria(o)s pueden:

* Almacenar cualquier archivo, incluyendo fotos 📷, videos🎥, archivos de audio 🎧 y documentos 📝.
* In the All Files folder:
    - Crear carpetas y subcarpetas.
    - Mover archivos a carpetas y de una carpeta a otra.
* Exportar archivos a sus dispositivos. Una vez guardados en su dispositivo fuera de Tella, los archivos ya no están cifrados y pueden ser accedidos por cualquiera que busque en el dispositivo.
* Importar archivos desde sus dispositivos. Los archivos se cifran automáticamente cuando son importados a Tella.

:::danger
Importar archivos desde el sistema de archivos a Tella hace una copia de los archivos en Tella. Al importar Tella preguntará si deseas conservar o eliminar el archivo original de tu teléfono. Si eliges conservar el archivo original, permanecerá presente en el dispositivo, fuera de Tella y sin cifrar. 🔒
:::

## Comentarios {#feedback}

Hay varias opciones para que la(o)s usuaria(o)s de Tella se [contacten con el equipo de Tella](/contact-us) para sugerir mejoras, reportar errores y problemas y solicitar soporte. Dentro de Tella hay 2 alternativas:

1. **Email:**
   - Navega a **Configuración** > **Sobre Nosotra(o)s y Ayuda** > **Contáctanos** para encontrar la dirección de correo electrónico.
   - La(o)s usuaria(o)s pueden escribirle al equipo de Tella utilizando su app de email preferida.

2. **Formulario de Comentarios en la App:**
   - Ve a **Configuración** > **Comentarios** para habilitar el formulario de comentarios dentro de la app.
   - Esto le permite a la(o)s usuaria(o)s compartir comentarios con el equipo de Tella anónimamente.


Para asegurar la privacidad y anonimato de la/el usuaria(o), solo los datos esenciales son transmitidos a nuestro servidor de Comentarios a través de solicitudes HTTPS POST. Los registros que contienen información de la/el usuaria(o), (Dirección IP, fecha y hora, y agente de usuari(o)) son eliminados automáticamente cada semana. 

En la base de datos del servidor de Comentarios, solo almacenamos una copia del texto enviado por la(o)s usuaria(o)s en el formulario de comentarios y de qué plataforma proviene (Android o iOS).


:::
La única información que recibiremos es el contenido que la(o)s usuaria(o)s añaden específicamente al formulario de comentarios. Si la(o)s usuaria(o)s están solicitando soporte o quieren que les demos seguimiento, deben proporcionar una manera segura de contactarles.
:::


## Importar archivos desde dispositivo {#import-files-from-device}

La(o)s usuaria(o)s pueden importar archivos a Tella para mantenerlos seguros al usar la función de importar. Pueden importar archivos yendo al botón **Añadir (+)** ya sea en Todos los archivos, Imágenes, Video, Audio o Documentos dependiendo del tipo de archivos que desean importar y luego **Importar desde dispositivo** 📥. Aparecerá un mensaje preguntando a la/el usuaria(o) si desea conservar o eliminar el archivo original de la memoria de su teléfono. Todos los archivos importados se mantendrán seguros en Tella.


:::tip Video tutorial 🎥
Aprende más sobre [Recopilar Evidencia](video-tutorials#collecting-evidence) y [Compartir datos](/video-tutorials#sharing-data-with-other-apps) en nuestros video tutoriales.
:::

## Conservar metadatos al importar {#preserve-metadata-when-importing}

En **Configuración** > **Seguridad** la(o)s usuaria(o)s tienen la opción de Conservar o eliminar los metadatos de los archivos al importar Fotos y Videos a Tella. Los metadatos EXIF de los archivos pueden incluir datos sobre cuándo el archivo fue creado, configuración de la cámara o ubicación del dispositivo.

## Analíticas preservando la privacidad (habilitar){#privacy-preserving-analytics}
Los usuarios de Android pueden optar por compartir analíticas para mejorar Tella. Toda la información es anónima, agregada y nunca puede ser vinculada a usuaria(o)s individuales. Para información técnica sobre que sistemas utilizamos y qué métricas recopilamos, visita la [sección de Analíticas de la página de Seguridad y Privacidad](/security-and-privacy#analytics).

## Abrir archivos en Tella {#open-files-in-tella}
Imágenes, videos, PDF y audios pueden ser visualizados dentro de Tella. 📱📄

## Camuflaje {#camouflage}

En Tella Android, es posible camuflar Tella en dos maneras:

1. La(o)s usuaria(o)s pueden cambiar el nombre e ícono de la app, para hacerla parecer como otra app como un juego o la app del clima. 🎮🌦️
2. La(o)s usuaria(o)s pueden ocultar Tella en una calculadora completamente funcional. Para abrir Tella, la/el usuaria(o) debe introducir su PIN en la calculadora seguido de **=**. El camuflaje de Calculadora solo es posible si la/el usuaria(o) utiliza un bloqueo por PIN. No es posible camuflar Tella como una Calculadora si se utiliza patrón o contraseña. 🔢🔒

Por el momento, debido a las restricciones en la App Store de Apple, Tella para iOS no es compatible con las funciones de camuflaje que están disponibles en Tella Android.

:::danger
El nombre "Tella" y su ícono permanecen visibles en la configuración de Android. Esto quiere decir que el camuflaje no protegerá contra un individuo _activamente_ buscando Tella en el teléfono o llevando a cabo un análisis profundo del dispositivo.🔒👀
:::

:::info
The Calculator camouflage feature cannot be enabled if the Restrict unlock attempts feature is on.
:::

:::tip Video tutorial 🎥
Aprende más sobre [Camuflar Tella](/video-tutorials#camouflaging-tella) en nuestro video tutorial.
:::


## Personalización de la Pantalla de Inicio {#homescreen-customization}

Por defecto, la pantalla de inicio de Tella organiza los archivos por tipo: 📷 imágenes, 🎥 videos, 🎧 audio, 📄 documentos, y otros archivos. También proporciona una sección Todos los archivos donde todos los archivos pueden ser accedidos. Para más información ve la sección de Administración de Archivos.

Por conveniencia y facilidad de acceso, también es posible personalizar la pantalla de inicio para que también muestre accesos directos a uno o más de los siguientes:

* Archivos recientes, para abrir rápidamente los archivos más nuevos en Tella 💼
* Formularios favoritos, para usuaria(o)s conectada(o)s a un servidor ODK 📝
* Plantillas favoritas, para usuaria(o)s conectada(o)s a un servidor Uwazi 📋

Esta configuración se puede encontrar en **Configuración** > **General**.


## Borrado Rápido {#quick-delete}

Un botón de Borrado Rápido permite a la(o)s usuaria(o)s, en solo unos pocos segundos, eliminar información sensible dentro de Tella. El borrado rápido se puede configurar en **Configuración** > **Seguridad** > **Borrado rápido**, donde la/el usuaria(o) puede elegir habilitar un botón deslizable en la pantalla de inicio para eliminar rápidamente información de Tella en situaciones de emergencia. Si se habilita, la/el usuaria(o) puede elegir exactamente qué se elimina cuando esta función es usada. Las opciones disponibles son:

* Delete files: Deletes all files stored in Tella 🗑️
* Delete draft and submitted forms: Deletes drafts and submitted forms in all Connections. [Visit the For Organizations page](/for-organizations) to  discover the available server connections 📝
* Delete server settings: Deletes all server connections and all the forms, templates or reports associated with them 📋
* Eliminar Tella: Elimina la app y todos los datos que contiene. Esto activa un mensaje que pregunta si la/el usuaria(o) quiere desinstalar Tella por igual ❌.  

:::info Eliminar Tella
La opción Eliminar Tella puede no estar disponible en algunos teléfonos Android debido a limitaciones técnicas. Estamos trabajando para corregir este problema. Para iOS no es posible eliminar una app programáticamente.
:::

## Salida rápida {#quick-exit}

Al hacer clic en el botón de salir en la esquina superior derecha de la pantalla de inicio de Tella, usuaria(o)s de Android pueden rápidamente cerrar y bloquear la app en caso de emergencia. Mientras que tener el tiempo de espera para bloqueo establecido a "inmediatamente" significa que la app ya se bloquea cuando la/el usuaria(o) sale, usar el botón Salida Rápida añade una capa extra de seguridad y garantiza que la app se cerrará y bloqueará 🔒

En iOS, no es posible cerrar una app desde dentro de la propia app. Tocar el botón de salida rápida en su lugar bloquea la app.

## Modo de Verificación {#verification-mode}

En las configuraciones de Tella, la(o)s usuaria(o)s pueden activar el "Modo de Verificación" ✅

Cuando está activado, cada vez que una(o) usuaria(o) toma una foto o un video, o graba audio, Tella automáticamente captura información de verificación (metadatos de archivo). Esta información de verificación puede ser usada para corroborar evidencia, contrastar con otros hechos conocidos sobre el evento o sobre el área donde fue capturada. La información de verificación será incluida como un archivo separado al guardar el archivo en el dispositivo o al compartirlo a través de apps de terceras partes. El formato de archivo es .CSV con la información de metadatos incluida en columnas. Este archivo se puede abrir con cualquier app de hoja de cálculo (como Excel, Google Spreedsheets, u OpenOffice).

:::info Contáctanos
Si necesitas ayuda para entender mejor el Modo de Verificación, siéntete libre de contactarnos 😊
:::

Debajo una lista de cada pieza de metadatos capturada por Tella:

**Información sobre el archivo**

* Ruta de archivo: donde el archivo está ubicado en el directorio de Tella 📂
* Hash de archivo: un número único para identificar el archivo 🔍
* Archivo modificado: la fecha y la hora en la que el archivo fue modificado por última vez en el dispositivo 📅

**Información sobre el dispositivo**

* Fabricante: el nombre del fabricante del dispositivo📱 
* Hardware: el modelo exacto del dispositivo 💻
* ID del Dispositivo: un número único que identifica el dispositivo Android 🆔
* Tamaño de pantalla: el tamaño exacto de la pantalla del dispositivo 📏
* Idioma: el idioma al que está establecido el sistema operativo del dispositivo 🌐
* Localidad: la región geográfica en la que está configurado el dispositivo 🌍
* Estado de la conexión: si el dispositivo está conectado o desconectado del internet 📶
* Tipo de red: si el dispositivo está conectado a internet, especifica si el dispositivo está conectado a una red WiFi o a una red celular 📲
* MAC del Wi-Fi: un identificador único para el conector del dispositivo Wi-Fi 🔍
* IPv4: una dirección única que identifica la conexión a internet del dispositivo 🔗
* IPv6: un identificador más reciente para la conexión a internet de un dispositivo 🔗

**Información sobre el entorno donde se capturó el archivo**

* Ubicación: la ubicación exacta del dispositivo, incluyendo las coordenadas de latitud y longitud, altitud en metros, la precisión de la medida en metros y la hora 🌍
* Proveedor de ubicación: cómo es determinada la ubicación del dispositivo📍 
* Velocidad de ubicación: la velocidad a la cual el dispositivo está viajando 🚀
* Información celular: los números identificadores de todas las torres celulares a las que está conectado el dispositivo 📡
* Información de Wi-Fi: el nombre de todas las redes WiFi en la cercanía del dispositivo 🔍

## Conectarse a servidores {#connecting-to-servers}

Usuaria(o)s pueden recopilar datos directamente en Tella, conservar los datos protegidos dentro de la app, y conectar a servidores para enviar los datos de manera segura a un servidor. Esta función es usada frecuentemente por organizaciones que centralizan los datos recopilados por voluntaria(o)s o activistas sobre el terreno. Estas personas recopilan información usando Tella en sus dispositivos y luego la envían a sus organizaciones. Implementaciones anteriores de Tella donde la(o)s usuaria(o)s sobre el terreno recopilan datos y los envían a un servidor de su organización han oscilado entre 1 y 2,000 usuaria(o)s. 📲 📡

Actualmente los servidores que se pueden conectar a Tella son:

* [Open Data Kit (ODK)](/odk)
* [Uwazi](/uwazi)
* [Tella Web](/tella-web)
* [Google Drive](/g-drive)
* [Nextcloud](/nextcloud)
* [Dropbox](/dropbox)


:::tip Video tutorial 🎥
Aprende más sobre [Conectar a Servidores](/video-tutorials#server-connections) en nuestros video tutoriales.
:::


## Cámara (fotos y videos){#camera-photos-and-videos}

Tella ofrece una cámara integrada donde puedes tomar fotos y videos. Todos los medios recopilados dentro de Tella no estarán disponibles fuera de esta, ya que todos archivos son cifrados tan pronto son capturados. Los archivos solo pueden ser accedidos dentro de Tella, usando el método de bloqueo para abrir la app. Las fotos y videos no aparecerán en la Galería del teléfono. En Tella, las fotos y videos tendrán un nombre por defecto, pero la(o)s usuaria(o)s pueden renombrarlos usando el botón de Renombrar. Los archivos también pueden ser organizados en carpetas. 📷

La cámara ofrece la posibilidad de cambiar la resolución de los videos antes de grabar para ahorrar espacio: mientras más baja la resolución, menor es el espacio ocupado por el video, pero también más baja la calidad del video. 🎥 💾

En [Tella-FOSS](/faq#is-tella-available-on-f-droid), donde usamos la biblioteca CameraX completamente de código abierto, faltan algunas de las funciones de la Cámara (zoom, girar cámara, habilitar flash, habilitar cuadrícula, cambiar resolución de video).


## Seleccionar resolución de video {#select-video-resolution}
Puedes elegir fácilmente tu resolución de video deseada en Tella accediendo a la pantalla de grabación de video y tocando en el botón de Configuración. Las opciones disponibles incluyen:
- Resolución más alta posible
- Alta resolución (1080p)
- Resolución media (720p)
- Baja resolución (480p)

La resolución de video se refiere al número de pixeles en cada fotograma del video. Resoluciones más altas, como 1080p o 720p, resultan en videos más nítidos y detallados. Sin embargo, ten en cuenta que los videos de alta resolución también tienen tamaños de archivo más grandes, lo que podría requerir más espacio de almacenamiento en tu dispositivo.

Es importante notar que seleccionar la resolución de video es actualmente solo admitida en dispositivos Android.


## Grabadora de Audio {#audio-recorder}

Tella tiene una grabadora de audio incorporada. Todo el audio grabado dentro de Tella no estará disponible fuera de esta, ya que todos los archivos son cifrados tan pronto son capturados. Los archivos de audio solo pueden ser accedidos dentro de Tella, usando el método de bloqueo para abrir la app. Las grabaciones no aparecerán en la app Grabadora de Voz o sistema de archivo del teléfono. En Tella, los archivos de audio tendrán un nombre por defecto, pero la(o)s usuaria(o)s pueden renombrarlos usando el botón Renombrar. Las grabaciones de audio también se pueden organizar en carpetas. 🎤 🎧

La grabadora de audio permite a la(o)s usuaria(o)s pausar la grabación y reiniciarla según sea necesario, conservando toda la información en el mismo archivo. Usuaria(o)s ven cuánto espacio tienen disponible al grabar, para asegurar que no se quedarán sin espacio mientras graban. 📈 💾


## Recopilación de datos fuera de línea {#offline-data-collection}

Una vez que Tella es instalada y configurada en el teléfono, no necesita una conexión a internet para recopilar datos. 📲 Una conexión a internet solo es necesaria para compartir archivos a través de otras apps o a través de Conexiones. 🌐 Si la(o)s usuaria(o)s tienen un servidor conectado, una vez los formularios o plantillas son descargados al teléfono, todos los datos recopilados se almacenarán en la pestaña bandeja de salida y los pueden subir al servidor una vez se conecten a internet. 📩


