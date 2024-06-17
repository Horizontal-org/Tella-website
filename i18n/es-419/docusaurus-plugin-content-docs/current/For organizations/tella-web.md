---
id: tella-web
title: Tella Web
description: La función de Informes empodera a la(o)s usuaria(o)s a subir fácilmente fotos, videos, pdfs y grabaciones de audio al servidor Tella Web de su organización
slug: /tella-web
---

# Tella Web 

Tella Web es una herramienta de código abierto que permite a individuos y organizaciones a centralizar y gestionar informes enviados por la(o)s usuaria(o)s de Tella, incluyendo fotos, videos, y archivos de audio.

Tella Web es desarrollada internamente por nuestro equipo en Horizontal, el mismo equipo responsable de desarrollar la app móvil de Tella. Es una solución amigable para sus usuaria(o)s para respaldar archivos de medios en un servidor remoto de manera segura y privada. Podemos proporcionar soporte para la instalación, configuración, y mantenimiento de una instancia Tella Web si no tienes a alguien dentro de tu organización que pueda hacerlo.

De manera similar a todas las demás conexiones([Uwazi](/uwazi) y [Open Data Kit](/odk)), conectar a Tella Web mejora la seguridad de los datos recopilados en Tella al:
1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Garantizar que los datos son enviados directamente de Tella a Tella Web, sin tener que depender de una herramienta o app de terceras partes.
3. Permitir a la(o)s usuaria(o)s respalden sus datos en un servidor remoto, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil.
4. Garantizar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

Tella Web es una excelente opción para recopilar "informes" de la(o)s usuaria(o)s. Los informes pueden incluir fotos, videos, grabaciones de audio, documentos pdf y texto.

Configurar Tella Web conlleva tres pasos, que son analizados detalladamente en esta sección:

* **Instalar Tella Web**: Este paso implica instalar el servidor Tella Web y configurar el nombre de dominio para garantizar su funcionamiento adecuado.
* **Configurar tu(s) proyecto(s) en tu servidor**": En este paso, la(o)s admins deciden cómo organizarse para recopilar datos, crear "proyectos", y establecer roles y permisos para sus usuaria(o)s.
* **Preparar a las personas sobre el terreno para empezar a enviar informes**: La(o)s usuaria(o)s instalan Tella en su dispositivo Android o iPhone. Posteriormente se conectan al proyecto Tella Web y empiezan a recopilar información.


## Instalar el servidor {#install-the-server}

Este paso consiste en instalar y configurar Tella Web en el servidor que tu organización estará utilizando. Este paso necesita ser llevado a cabo por la persona que será responsable de la administración de sistema (un(a) desarrollador(a) o un(a) administrador(a) de sistemas). Las instrucciones técnicas se pueden encontrar en [nuestro Github](https://github.com/Horizontal-org/tellaweb).



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

En la pantalla "Configuraciones de Proyecto", puedes configurar el proyecto:
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
- Admin: un(a) admin puede subir informes desde Tella y realizar todas las acciones en Tella Web, incluyendo administración de informes, proyectos, y usuaria(o)s. Un(a) admin tiene acceso a todos los proyectos.

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
La lista completa de usuaria(o)s que pueden enviar informes al proyecto incluye la(o)s usuaria(o)s listada(o)s en esta sección más toda(o)s la(o)s administradora(e)s del servidor.
:::

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

* Navega a **Configuración ⚙️** > **Servidores** > **+**
* Selecciona "Tella Web" de la lista de tipos de servidores disponibles.
* Introduce la información de inicio de sesión (generada y proporcionada por admins)
    * La URL del proyecto Tella Web. La URL debe parecerse a esta "https://tu-dominio.com/p/nombre-del-proyecto"
    * Tu Nombre de Usuaria(o) y Contraseña
* Habilita o deshabilita las funciones avanzadas de acuerdo a tus necesidades: [auto-informe](#auto-report), [auto eliminar](#auto-delete) y [envío en segundo plano](#background-submission).


#### Administra Proyectos de Tella Web {#manage-tella-web-projects}

* En **Configuración ⚙️** > **Servidores** > **[Nombre de proyecto]** > 3-dots, puedes:
    * Editar: Abre una pantalla "editar servidor" donde puedes ver el nombre del proyecto, URL, y tu nombre de usuaria(o), y editar funciones avanzadas.
    * Eliminar: Elimina la conexión, incluyendo toda la información del servidor y todos los borradores e informes enviados almacenados en Tella. Esto no afectará ningún informe que ya haya sido enviado al servidor.

#### Crear un Informe Manual {#create-a-manual-report}

* Una vez conectada(o) a por lo menos un proyecto Tella Web, una tarjeta de "Informes" aparecerá en la sección "Conexiones" de la pantalla de inicio. Toca sobre esta tarjeta para empezar a crear informes.
* La pantalla de informes principal permite la navegación entre las pestañas Borradores, Bandeja de Salida y  Enviados.
* Toca el botón "Nuevo informe" en la parte inferior de la pantalla para crear un nuevo informe.
    * En la pantalla "Nuevo informe" puedes completar los detalles del informe, incluyendo el título, descripción, y adjuntos opcionales de fotos, videos, documentos pdf y grabaciones de audio.
    * Si estás conectada(o) a múltiples proyectos de Tella Web, podrás seleccionar en la parte superior de la pantalla a cuál proyecto enviar el informe.
* Utiliza el botón "Guardar borrador" (en la parte superior derecha de la pantalla) para guardar el informe como un borrador sin dejar la pantalla "Nuevo informe".
    * Para poder guardar como un borrador debes al menos introducir el título del informe.
    * Aparecerá un mensaje en la pantalla para confirmar que el borrador fue guardado.
* El botón "Enviar luego" guarda el informe en la Bandeja de Salida para envío manual.
    * La pestaña bandeja de salida es utilizada a menudo cuando la(o)s recopiladora(e)s de datos no tienen acceso a internet o si la conexión no es estable.
* El botón "Enviar" envía el informe a proyecto de Tella Web inmediatamente.
    * Si el envío falla debido a problemas de conectividad, el informe se va a la pestaña "Bandeja de Salida".
    * Si el informe es enviado correctamente, se va a la pestaña "Enviados".


#### Borradores de Informes {#draft-reports}


* En la pantalla "Nuevo informe", toca el botón "Guardar borrador" para guardar el informe como un borrador.
    * Se mostrará un mensaje de confirmación, y puedes continuar trabajando en el informe o salir y regresar más tarde.
* Si intentas salir del informe sin guardar, se te pedirá confirmar si tienes seguridad de salir sin guardar el informe.
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

La Bandeja de Salida contiene informes que han sido guardados para enviar. Esto podría ser:

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

El envío en segundo plano permite que el proceso de envío de informes continúe incluso si cambias a otras tareas dentro de Tella o si sales de Tella completamente. El envío en segundo plano puede funcionar en combinación con ambos informes Manual y Auto, y puede habilitarse en la pantalla de Editar Conexión para el proyecto deseado.

Cuando el envío en segundo plano está habilitado, independientemente de lo que hagas en Tella o si cierras la app, el proceso de subida continuará sin interrupción. También funcionará si los auto-informes están habilitados y cierras la app después de recopilar la información.

Al subir informes en segundo plano, Tella permanece desbloqueada. Esto significa que si alguien abre Tella, podrá acceder a tus archivos e informes. Para bloquear Tella cuando los informes están siendo subidos en segundo plano, toca el botón "Salida Rápida" en la parte superior derecha de la pantalla de inicio de Tella.

Si el envío se interrumpe debido a una conexión a internet débil u otros factores, Tella enviará el informe a la pestaña Bandeja de salida y automáticamente reiniciará la subida tan pronto el teléfono vuelva a tener una conexión a internet estable.