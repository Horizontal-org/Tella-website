---
id: tella-web
title: Tella Web
description: La función de Informes empodera a la(o)s usuaria(o)s a subir fácilmente fotos, videos, pdfs y grabaciones de audio al servidor Tella Web de su organización
slug: /tella-web
---

# Conexión Tella Web

Tella Web es una herramienta de código abierto que permite a individuos y organizaciones a centralizar y gestionar informes enviados por la(o)s usuaria(o)s de Tella, incluyendo fotos, videos, y archivos de audio.

Tella Web es desarrollada internamente por nuestro equipo en Horizontal, el mismo equipo responsable de desarrollar la app móvil de Tella. Es una solución amigable para sus usuaria(o)s para respaldar archivos de medios en un servidor remoto de manera segura y privada. Usar un servidor de Tella Web también permite a los usuarios extraer datos (guías, instrucciones, mensajes importantes, etc) desde el servidor directamente a su Tella.

 Podemos proporcionar soporte para la instalación, configuración, y mantenimiento de una instancia Tella Web si no tienes a alguien dentro de tu organización que pueda hacerlo.

Similarly to all other connections([Uwazi](/uwazi), [Google Drive](/g-drive), [Nextcloud](/nextcloud), [Dropbox](/dropbox) and [Open Data Kit](/odk)), connecting to Tella Web enhances the security of data collected on Tella by:
1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Garantizar que los datos son enviados directamente de Tella a Tella Web, sin tener que depender de una herramienta o app de terceras partes.
3. Permitir que usuaria(o)s respalden sus datos en un servidor remoto, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil.
4. Garantizar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

Tella Web es una excelente opción para recopilar "informes" de la(o)s usuaria(o)s. Los informes pueden incluir fotos, videos, grabaciones de audio, documentos pdf y texto. Las organizaciones también puede subir archivos PDF a cada proyecto de Tella Web y la(o)s usuaria(o)s pueden acceder a estos recursos directamente desde su bóveda de Tella.

Configurar Tella Web conlleva tres pasos, que son analizados detalladamente en esta sección:

* **Instalar Tella Web**: Este paso implica instalar el servidor Tella Web y configurar el nombre de dominio para garantizar su funcionamiento adecuado.
* **Configurar tu(s) proyecto(s) en tu servidor**": En este paso, la(o)s admins deciden cómo organizarse para recopilar datos, crear "proyectos", añadir "recursos" para que la(o)s usuaria(o)s descarguen en sus dispositivos, y establecer roles y permisos para sus usuaria(o)s.
* **Preparar a las personas sobre el terreno para empezar a enviar informes**: La(o)s usuaria(o)s instalan Tella en su dispositivo Android o iPhone. Posteriormente se conectan al proyecto Tella Web y empiezan a recopilar información.

## Cuándo Usar Tella Web {#when-to-use-tella-web}

Tella Web puede ser una buena alternativa si:
- Si tienes capacidad para auto-hospedar Tella Web.
- Gente sobre el terreno enviará mayormente archivos multimedia, con algo de texto y no necesitarán recopilación de datos estructurados (formularios).
- Te asociarás con Horizontal y deseas que la misma organización te ayude con la instalación, configuración y mantenimiento de tu instancia de Tella Web y las apps de Tella.


:::tip
Si necesitas ayuda para determinar si Tella Web es la mejor opción para tu caso de uso, [lee nuestra guía](/for-organizations) o [contactanos](/contact-us)!
:::


## Instalar el servidor {#install-the-server}

Este paso consiste en instalar y configurar Tella Web en el servidor que tu organización estará utilizando. Este paso necesita ser llevado a cabo por la persona que será responsable de la administración de sistema (un(a) desarrollador(a) o un(a) administrador(a) de sistemas). Las instrucciones técnicas se pueden encontrar en [nuestro Github](https://github.com/Horizontal-org/tellaweb).

Puedes revisar las notas de lanzamiento de Tella Web [aquí](https://github.com/Horizontal-org/tellaweb/releases).


:::info
Nuestro equipo puede ofrecer ayuda con la instalación, configuración y mantenimiento de Tella Web. Si tienes alguna pregunta o necesitas ayuda, [contáctanos](/contact-us/).
:::

:::tip
[Contáctanos](/contact-us) para obtener acceso a nuestro servidor demo, para que puedas probar Tella Web antes de instalarla en tu propio servidor.
:::


## Configura tu proyecto en tu servidor {#set-up-your-project-on-your-server}

Una vez que Tella Web esté instalada y la/el primer(a) usuaria(o) "admin" creada(o), es hora de configurar el proyecto o los proyectos al cual el equipo en el campo compartirá información.



:::info
Echa un vistazo a [este video tutorial](/video-tutorials#connections-full-video) para una demo de cómo configurar Tella Web.
:::

### Centro de Administración {#admin-center}


#### Configure spaces’ settings {#configure-spaces-settings}
Los Admins del espacio de Tella Web pueden habilitar o deshabilitar configuraciones de todo el sistema dependiendo de sus propias evaluaciones de riesgo y consideraciones de privacidad.
- [Opta para compartir analíticas con el equipo de Tella](/security-and-privacy#analytics).
- Detección de inicio de sesión sospechoso:
    - Si se habilita, Tella Web registrará la ubicación de cada IP de inicio de sesión y la ubicación aproximada basada en la IP. Si el usuario se conecta desde una ubicación inusual, Tella Web bloqueará el intento de inicio de sesión para prevenir cualquier inicio de sesión no autorizado y enviará un correo electrónico al usuario para confirmar que fue un intento de inicio de sesión legítimo. 
    - Utilizamos un [servicio de terceras partes](https://ipinfo.io/) para calcular el país de la IP.
    - Tella Web requiere un servidor SMTP correctamente configurado y funcionando para que esta función se realice. 
    - Si se deshabilita, Tella Web no almacenará la IP, no calculará la ubicación ni hará ping a ningún servicio de terceros.
- Comentarios:
    - Cuando se habilita, Tella Web muestra un cuadro de comentarios que le permite a la(o)s usuaria(o)s enviar una nota anónima al equipo de Tella sobre cualquier solicitud de comentarios o informe de errores que puedan encontrar. No contiene ninguna información sobre el usuario o la instancia de Tella Web.
    - Para asegurar la privacidad y anonimato de la/el usuaria(o), solo los datos esenciales son transmitidos a nuestro servidor de Comentarios a través de solicitudes HTTPS POST. Los registros que contienen información de la/el usuaria(o), (Dirección IP, fecha y hora, y agente de usuari(o)) son eliminados automáticamente cada semana. 
    -  En la base de datos del servidor de Comentarios, solo almacenamos una copia del texto enviado por la(o)s usuaria(o)s en el formulario de comentarios y de qué plataforma proviene (en este caso de "Tella Web" sin especificar cual instalación de servidor).

#### Backup your space {#backup-your-space}

Admins of the Tella Web instance can export all data out of Tella Web by generating a backup. Backups can be used to port the data to another location, including a computer, a USB flash drive, an external disk or a remote server.  The action to generate the backup runs in the background and, if triggered, an email notification will be sent to the person who generated the backup when it is ready to download. However, all backups are accessible in the Admin Center to all users with admin access.

The backup is a full export everything in the space: including all Projects, Reports, Users and Resources, plus all metadata. The export is a zip file including a collection of CSVs and folders with with the uploaded media. For now, there is no way to import the backup back into a Tella Web instance from the Admin Center, but each backup includes a .sql file that advanced users can use to import the data to the database directly. 

:::warning
The information included in the backup is highly sensitive, it not only contains all the data (unencrypted) but also information about the Tella Web users. Please proceed with caution when generating the backup.
:::


### Administrando Proyectos {#managing-projects}

Tella Web te permite crear y administrar proyectos, garantizando que tus informes estén organizados y accesibles.

Los proyectos funcionan como carpetas donde la(o)s usuaria(o)s de Tella pueden enviar informes. Por ejemplo, puedes crear proyectos para áreas geográficas especificas o temas como la violencia policial, violencia de género, y abuso medioambiental.

Cada proyecto tiene su propia URL, por lo que la(o)s usuaria(o)s de Tella pueden estar conectados a múltiples proyectos de Tella Web.


#### Ver todos los proyectos disponibles {#view-all-available-projects}

Haz clic en el botón "Proyectos" en el menú de navegación izquierdo para acceder a la pantalla de "Proyectos".

La pantalla de "Proyectos" muestra cada proyecto existente como una tarjeta.


#### Crea un Nuevo Proyecto {#create-a-new-project}

En la pantalla de "Proyectos", haz clic en el botón "Crear proyecto". Aparecerá un modal pidiendo que nombres el nuevo proyecto. Introduce el nombre deseado para el proyecto y haz clic en "Crear". Te redireccionará a la pantalla de "Configuraciones de proyecto" para el proyecto recién creado.


#### Abrir un Proyecto {#open-a-project}

Abre la pantalla "Proyectos" y haz clic en la tarjeta del proyecto deseado.

Esto abrirá el proyecto, donde puedes acceder a todos los informes enviados al proyecto.

Puedes abrir, eliminar, o descargar informes (dependiendo de tus permisos para este proyecto específico).


#### Configura los ajustes de los proyectos {#configure-projects-settings}

En la pantalla "Configuración de Proyecto", puedes configurar el proyecto:
* La sección "General" te permite renombrar el proyecto, ver detalles del proyecto, y modificar la URL del proyecto.
* La sección "Administrar accesos" te permite añadir o eliminar usuaria(o)s de un proyecto. Más info sobre los roles de usuaria(o)s [aquí](/tella-web#managing-users).
* La sección "Zona de peligro" proporciona opciones para eliminar el proyecto, incluyendo todos los informes dentro del mismo.


#### Eliminar un Proyecto {#delete-a-project}

En la pantalla "Configuraciones de proyecto", desliza hacia la sección "Zona de peligro".

Haz clic en la opción "Eliminar proyecto".

Aparecerá un modal advirtiendo sobre la eliminación permanente del proyecto y todos sus informes. Para proceder con la eliminación, introduce el nombre del proyecto correctamente (incluyendo las mayúsculas y minúsculas correctas). Escribe "ELIMINAR" (en letras mayúsculas) para confirmar la eliminación.

Una vez confirmado, el proyecto y todos sus informes asociados serán eliminados permanentemente.


#### Configura la URL del proyecto {#configure-the-project-url}

La URL del proyecto es automáticamente generada cuando el proyecto es creado. Para editar la URL del proyecto, ve a la sección "General" en la pantalla "Configuración de Proyecto" y modifica acorde. Esta URL es la que la(o)s informadora(e)s utilizarán para conectarse al proyecto desde sus apps.

:::info
La URL que tendrás que enviarle a la(o)s usuaria(o)s debe verse como esta "https://tu-dominio.com/p/nombre-del-proyecto"
:::


### Administrando usuaria(o)s {#managing-users}

### Comprendiendo roles de usuaria(o)s {#understanding-user-roles}
La(o)s usuaria(o)s son una parte importante de Tella Web. Hay dos roles diferentes disponibles para usuaria(o)s:
- Informador(a): esta(e) es un(a) usuaria(o) que puede conectarse al proyecto de Tella Web desde una app móvil Tella y subir informes. Un(a) informador(a) debe estar asignada(o) a un proyecto para poder subir informes.
- Espectador(a): esta(e) es un(a) usuaria(o) que, además de subir informes desde Tella, también puede iniciar sesión en Tella Web para ver (pero no editar o eliminar) informes. Un(a) espectador(a) debe ser asignado(a) a un proyecto específico para tener acceso.
- Editor(a): este(a) es un(a) usuario(a) que, como espectador(a)s, puede subir informes desde Tella e iniciar sesión en Tella Web, pero quien también puede editar o eliminar informes. Un(a) editor(a) debe ser asignado(a) a un proyecto específico para tener acceso.
- Admin: un(a) admin puede subir informes desde Tella y realizar todas las acciones en Tella Web, incluyendo administración de informes, proyectos, recursos y usuaria(o)s. Un(a) admin tiene acceso a todos los proyectos.

He aquí una vista detallada de los permisos de cada rol:

| |Informador(a) |Espectador(a)|Editor(a)|Admin |
|--------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--|
|**En Tella móvil**|
| Crear y subir informes | ✅|✅|✅|✅| 
|**En Tella Web**| 
| Iniciar sesión en Tella Web  |❌|✅|✅|✅| 
| Ver informes  |❌|✅|✅|✅| 
| Editar informes (renombrar) |❌|❌|✅|✅| 
| Eliminar informes |❌|❌|✅|✅| 
| Editar proyectos (crear, renombrar, editar URL) |❌|❌|✅|✅| 
| Eliminar proyectos |❌|❌|✅|✅| 
| Administrar usuaria(o)s (crear, editar, eliminar) |❌|❌|❌|✅| 
| Asignar usuaria(o)s a proyectos |❌|❌|❌|✅| 
| Crea recursos para el espacio |❌|❌|❌|✅| 
| Añade/elimina recursos a un proyecto  |❌|❌|✅|✅| 
| Ve recursos asignados a un proyecto   |❌|✅|✅|✅| 




#### Crear usuaria(o)s {#creating-users}

En la barra superior, sobre la lista de usuaria(o)s, la/el admin del servidor puede hacer clic en el botón "Crear usuario(a)" para crear un(a) nuevo(a) usuario(a) en el servidor. Email, contraseña, confirmación de contraseña y rol son necesarios para crear usuaria(o)s.

En el campo de contraseña, un medidor de seguridad de contraseña ayuda a la(o)s admins a crear contraseñas seguras. Estimamos la complejidad de la contraseña utilizando la biblioteca [zxcvbn](https://github.com/dropbox/zxcvbn) que toma en cuenta:
- Caracteres (más de 10)
- Complejidad (minúsculas, mayúsculas, números, símbolos)
- No patrones comunes como fechas, repeticiones (aaa), secuencias (abcd), patrones de teclado (qwertyuiop)
- No contraseñas comunes como nombres, ciudades, etc.


#### Administración de accesos a proyectos {#managing-access-to-projects}


En la sección "Administrar acceso" de la pantalla "Configuración de proyecto", admins pueden asignar usuaria(o)s existentes al proyecto. Haz clic en el campo "Añadir usuaria(o)s". Un menú desplegable mostrará todos la(o)s usuaria(o)s en el servidor. Desliza a través de la lista o escribe para buscar un(a) usuario(a) por nombre de usuario(a).
Después de seleccionar la(o)s usuaria(o)s a añadir al proyecto, haz clic en el botón "Añadir" para guardar los cambios y conceder acceso al proyecto.

:::info
La lista completa de usuarios que puede enviar informes a los proyectos incluye los usuarios listados en esta sección más todos los administradores del servidor.
:::

### Gestionando recursos {#managing-resources}

Tella Web permite a las organizaciones difundir de forma segura recursos y materiales a sus
usuaria(o)s directamente dentro del contenedor cifrado de Tella. Los recursos pueden ser utilizados para enviar instrucciones para recopilación de datos, mensajes o guías sobre cómo recopilar datos.

#### Creando recursos para el espacio {#creating-resources-to-the-space}

Los Administradores pueden crear recursos para el espacio al navegar a la barra lateral izquierda **Recursos**. Por el momento los recursos pueden ser creados al subir PDFs. Recomendamos mantener estos inferiores a 20MB para garantizar que los usuarios puedan descargarlos incluso si su internet es lento.

Los recursos son compartidos dentro del espacio. Ten en cuenta que los recursos solo están disponibles para los usuarios después de añadirlos proyectos específicos.

En la misma pantalla, los administradores de espacio pueden gestionar recursos. Las siguientes opciones están disponibles:
- Descargar recursos individualmente o descargar multiples recursos.
- Abrir cada recurso para verlo.
- Encuentra a cuales proyectos está añadido cada recurso al tocar en Previsualizar.
- Eliminar recursos del espacio.

:::info
Si tu organización necesita otro tipo de Recursos o si experimentas problemas con el formato o limite de tamaño, por favor [contáctanos](/contact-us).
:::

#### Añadiendo recursos a proyectos {#adding-resources-to-projects}

Los administradores y editores pueden añadir recursos disponibles en el espacio a proyectos a los que tengan acceso. Hay dos atajos para hacerlo:
1. Al navegar a **Administrar Accesos** en la sección **Configuración** de cada proyecto.
2. Al tocar el icono **Recursos** en la tarjeta de cada proyecto en la Pantalla Principal de Tella Web.

Para añadir recursos a proyectos toca en el botón "Añadir recursos" y busca los recursos disponibles por nombre. Uno o varios recursos pueden ser añadidos al proyecto al mismo tiempo.

Todos los usuarios que se conecten a este proyecto desde sus apps de Tella verán una tarjeta de Recursos disponible y pueden descargar este Recurso a su contenedor cifrado.

Tella Web no realiza seguimiento de ninguna información sobre descargas de recursos.




## Prepara a la gente sobre el terreno para empezar a enviar informes {#get-people-on-the-ground-ready-to-start-submitting-reports}


Los pasos listados a continuación aplican a ambas versiones de Android e iOS de la app Tella. La función de informe está disponible en:

* Tella Android v2.1.0 (152) y posterior
* Tella iOS v1.1.0 (43) y posterior

Informes todavía no están disponibles en [Tella-FOSS](/faq#is-tella-available-on-f-droid).

:::info
Puedes ver [este video](/video-tutorials#tella-web) sobre cómo configurar y usar los Informes en Tella.
:::


#### Conectar a Proyectos de Tella Web {#connect-to-tella-web-projects}

Para conectar a un servidor Tella Web:

* Navigate to **Settings ⚙️** > **Connections** > **+**
* Selecciona "Tella Web" de la lista de tipos de servidores disponibles.
* Introduce la información de inicio de sesión (generada y proporcionada por admins)
    * La URL del proyecto Tella Web. La URL debe parecerse a esta "https://tu-dominio.com/p/nombre-del-proyecto"
    * Tu Nombre de Usuaria(o) y Contraseña
* Habilita o deshabilita las funciones avanzadas de acuerdo a tus necesidades: [auto-informe](#auto-report), [auto eliminar](#auto-delete) y [envío en segundo plano](#background-submission).


#### Administra Proyectos de Tella Web {#manage-tella-web-projects}

* In **Settings ⚙️** > **Connections** >  **[Project name]** > 3-dots, you can:
    * Editar: Abre una pantalla "editar servidor" donde puedes ver el nombre del proyecto, URL, y tu nombre de usuaria(o), y editar funciones avanzadas.
    * Eliminar: Elimina la conexión, incluyendo toda la información del servidor y todos los borradores e informes enviados almacenados en Tella. Esto no afectará ningún informe que ya haya sido enviado al servidor.

#### Extrae Recursos de tu espacio {#pull-resources-from-your-space}

Una vez conectado a al menos un proyecto de Tella Web, una tarjeta de **Recursos** aparecerá en la sección "Conexiones" de la pantalla principal. Toca sobre esta tarjeta para ver y descargar cualquier guía, instrucciones o mensajes que admins de tu organización hayan puesto disponibles para ti en cualquiera de los proyectos a los que estes conectado.

En la sección **Disponible para descargar** de la pantalla de Recursos, verás una tarjeta para cada uno de los recursos que hayan sido compartidos contigo. Toca en el **icono de Descarga** (📥) para extraer este recurso del espacio de tu organización y poder acceder a aquellos en la sección **Descargados**, incluso fuera de línea. Puedes **Ver** cada PDF al tocar en la carta y puedes **Eliminar de descargas** si quieres liberar espacio en tu bóveda de Tella. Siempre puedes volver a descargarlos cuando los necesites.

Utiliza el botón **Refrescar** en la parte superior derecha para extraer nuevos recursos del espacio de tu organización.

Una vez te desconectas de un proyecto de Tella Web, todos los recursos asociados serán removidos de tu pantalla de Recursos.

#### Crear un Informe Manual {#create-a-manual-report}

* Una vez conectada(o) a por lo menos un proyecto Tella Web, una tarjeta de "Informes" aparecerá en la sección "Conexiones" de la pantalla de inicio. Toca sobre esta tarjeta para empezar a crear informes.
* La pantalla de informes principal permite la navegación entre las pestañas Borradores, Bandeja de Salida y  Enviados.
* Toca el botón "Nuevo informe" en la parte inferior de la pantalla para crear un nuevo informe.
    * En la pantalla "Nuevo informe" puedes completar los detalles del informe, incluyendo el título, descripción, y adjuntos opcionales de fotos, videos, documentos pdf y grabaciones de audio.
    * Si estás conectada(o) a múltiples proyectos de Tella Web, podrás seleccionar en la parte superior de la pantalla a cuál proyecto enviar el informe.
* Use the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft without leaving the "New report" screen. 
    * Para poder guardar como un borrador debes al menos introducir el título del informe.
    * Aparecerá un mensaje en la pantalla para confirmar que el borrador fue guardado.
* The "Submit later" button ⏱️ saves the report to the Outbox for manual submission.
    * The "Outbox" tab is often used when data collectors don’t have access to the internet or if the connection is not stable.
* El botón "Enviar" envía el informe al proyecto de Tella Web inmediatamente.
    * Si el envío falla debido a problemas de conectividad, el informe se va a la pestaña "Bandeja de Salida".
    * Si el informe es enviado correctamente, se va a la pestaña "Enviados".


#### Borradores de Informes {#draft-reports}

A Draft report is a report that was created and saved but not yet submitted. Drafts reports are useful to save work in progress that can be editted later on. It allows users to create reports offline or over a long period of time before finalizing and sending them. This is especially useful in low-connectivity areas or when a user needs to gather information in multiple stages.

Reports in the Draft tab can be edited.

* On the "New report" screen, tap the "Save draft" button 💾 (on the top right of the screen) to save the report as a draft.
    * A confirmation will be displayed, and you can continue working on the report or exit to come back to it later.
* If you try to exit a report without saving, you will be asked to confirm whether you are sure to exit without saving.
* En la pestaña Borradores, puedes ver y administrar los borradores de informes. Abre un borrador de informe para continuar trabajando y enviarlo.
* Puedes eliminar un borrador de informe tocando en los tres puntos > **Eliminar** o entrando al informe o tocando el botón Eliminar.


#### Enviar un Informe {#submit-a-report}

* En un informe, toca "Enviar" para iniciar el envío del informe.
* Se te redireccionará a una pantalla de resumen mostrando el progreso de subida de cada archivo adjunto.
* Un botón de "Eliminar" está disponible para detener la subida y eliminar el informe.
* Si el informe se está subiendo activamente, un botón de "Pausa" te permite detener temporalmente la subida, la cual puede ser reanudada luego utilizando el botón "Reanudar".
* Salir de un informe no afecta el estado de subida. Si el informe se está subiendo activamente, el proceso continúa. 

:::info
Después de que un informe ha sido subido a Tella Web, no es posible eliminarlo de Tella Web desde la app móvil de Tella. Eliminar un informe enviado solo eliminará la versión local del mismo, no el informe en el servidor.
:::

:::info
Eliminar un informe en medio de un envío cancelará la subida de los archivos que no hayan subido aún, pero los archivos enviados y archivos parcialmente enviados que ya estén en Tella Web no serán eliminados.
:::


#### Bandeja de Salida {#outbox}

The Outbox tab contains reports that are finalized and have been saved for later submission. Reports in the Outbox are ready to be submitted once the device reconnects to the internet or when the user chooses to manually send them.

Reports in the Outbox tab cannot be edited.

To send a report to the Outbox, use the Submit later button (⏱️), at the bottom left of the Submit Report screen.

The Outbox contains:

* Envíos pausados
* Envíos de informes que fueron interrumpidos debido a problemas de conectividad.
* Informes que fueron marcados como "Enviar luego".


#### Informes Enviados {#submitted-reports}

- La pestaña Enviados muestra informes que han sido enviados exitosamente al servidor Tella Web.
- En la pestaña Enviados, puedes ver y revisar los informes enviados.

:::info
Si la conexión a internet es interrumpida, los informes irán a la pestaña Bandeja de Salida y tendrás que reanudar el envío manualmente.
:::


### Funciones Avanzadas {#advanced-features}

#### Auto-informe {#auto-report}

Si se habilita auto-informe, Tella creará y subirá informes automáticamente cada vez que tomes una foto, grabes un video, o captures una grabación de audio en Tella. Esto garantiza que tus informes se suban fluidamente sin la necesidad del trabajo manual. Los archivos se suben al mismo auto-informe si se recopilan dentro del lapso de 30 minutos.

Se puede habilitar auto-informe desde la pantalla Editar Conexión.

:::info
auto-informe solo se puede habilitar para un proyecto a la vez
:::

#### Auto-eliminar {#auto-delete} 

Cuando auto-informe está habilitado, puedes habilitar auto-eliminar, lo que elimina automáticamente informes y sus archivos asociados de tu dispositivo después de que son subidos exitosamente a Tella Web. Esto te ayuda a administrar el espacio de almacenamiento de tu dispositivo y garantiza que no sean conservados involuntariamente datos sensibles.

El botón de alternación de auto-eliminar aparecerá debajo del botón de auto-informe en la pantalla Editar Conexión del proyecto deseado.

#### Envío en Segundo Plano {#background-submission}

El envío en segundo plano le permite al proceso de envío de informes continuar incluso si cambias a otras tareas dentro de Tella o si sales completamente de Tella. El envío en segundo plano puede funcionar en combinación con informes Manuales y Automáticos, y se puede habilitar en la pantalla Editar Conexión del proyecto deseado.

Cuando el envío en segundo plano está habilitado, sin importar lo que hagas en Tella o si cierras la app de Tella, el proceso de subida continuará sin interrupción. También funcionará si está habilitado el auto-informe y cierras la app después de recopilar la información.

Al subir informes en segundo plano, Tella permanece desbloqueada. Esto significa que si alguien abre Tella, podrá acceder a tus archivos e informes. Para bloquear Tella cuando los informes están siendo subidos en segundo plano, toca el botón "Salida Rápida" en la parte superior derecha de la pantalla de inicio de Tella.

Si el envío es interrumpido debido a una conexión débil a internet u otros factores, Tella enviará el informe a la pestaña Bandeja de Salida y automáticamente reiniciará la subida tan pronto el teléfono vuelva a tener una conexión a internet estable.
