---
id: security-and-privacy
title: Security and Privacy
description: Detalles sobre la seguridad y privacidad de Tella.
slug: /security-and-privacy
sidebar_position: 2
---

# Seguridad y privacidad

Tella fue construida para quienes enfrentan represión física y digital, por lo que todas las funciones de Tella y decisiones de producto están construidas con la privacidad y seguridad en mente. Tella es auditada regularmente por empresas de seguridad independientes, y las funciones y documentación están diseñadas con el apoyo y la guía de profesionales de seguridad.


## Privacidad {#privacy}

Solo recopilamos la mínima cantidad de datos que son necesarios para cumplir el propósito de Tella. **Nunca recopilamos información de identificación personal. Nunca divulgamos, compartimos, o vendemos ningunos de tus datos a terceras partes**.

Al utilizar nuestra app, la(o)s usuaria(o)s pueden enviar datos a servidores administrados por individuos u organizaciones con quienes esten trabajando. Te recomendamos preguntar a estos individuos u organizaciones sobre sus políticas de privacidad, ya que pueden diferir de las nuestras. Proveemos el mismo estándar de protección de privacidad a toda(o)s nuestra(o)s usuaria(o)s sin importar en qué parte del mundo te encuentres.

Puedes leer la [Política de Privacidad](/privacy) completa de Tella.


### Tella Android {#tella-android}

Tella Android, tal como está disponible en la Tienda Google Play, incluye dos rastreadores, [Google CrashLytics](https://firebase.google.com/docs/crashlytics) y [Google Firebase Analytics](https://firebase.google.com/docs/analytics), que nos ayudan a detectar errores y fallas. Esto es crítico para mantener la app segura y funcional para usuaria(o)s en riesgo.

### Tella-FOSS {#tella-foss}

[Tella-FOSS](/faq#is-tella-available-on-f-droid), publicada en la [tienda F-droid](https://f-droid.org/en/packages/org.hzontal.tellaFOSS/), no contiene ningún rastreador.


### Tella iOS {#tella-ios}

[Tella para iOS](https://apps.apple.com/us/app/tella-document-protect/id1598152580) no incluye ningún rastreador. 

Como resultado de las estrictas políticas de las apps de iOS de Apple, Tella para iOS actualmente no está disponible en tiendas alternativas de apps o para instalación manual.

## Analíticas {#analytics}

In Tella Android, Tella FOSS and [Tella Web](/tella-web), users can choose to share analytics to improve Tella. This data helps us understand how people use Tella and which features are important to them. ***Analytics data is only collected if users opt-in in the app's settings***

Utilizamos [Divvi Up](https://divviup.org/), un servicio de telemetría que respeta la privacidad. Divvi Up es implementado por el  [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/) una organización sin fines de lucro que también mantiene el proyecto [Let’s Encrypt](https://letsencrypt.org/).

Aquí tienes información sobre nuestro enfoque de analíticas preservando la privacidad:

1. **Todos los datos son anónimos y agregados**: la biblioteca de Divvi Up divide los datos en dos partes anonimizadas y cifradas y sube cada parte a diferentes procesadores de datos compartidos (uno alojado pro ISRG y otro por nosotros) que no comparten datos entre sí. De esta manera, solo se revela información parcial sobre los datos originales a cada procesador. 
2. **Incluso si quisiéramos, no podríamos obtener los datos completos**: No es posible construir la información completa con solo una parte. Cada procesador agrega sus partes de datos en una suma parcial. Las sumas parciales pueden entonces ser combinadas en una agregación final, permitiendo estadísticas útiles sobre el conjunto de datos a la vez que revela información mínima sobre participantes individuales. Se puede encontrar información técnica exhaustiva sobre como funciona Divvi Up [aquí](https://docs.divviup.org/).
3. **Recopilamos la menor cantidad de datos posible**: Incluso aunque todo los datos son anonimizados, siempre minimizamos la cantidad de datos que recopilamos. A partir de las últimas versiones de Tella, solo recopilamos datos sobre los siguientes eventos (y nada más):

    **Tella Android and Tella FOSS**
    - Number of times Tella is successfully unlocked.
    - Number of media files recorded (videos/photos taken and audio recordings captured).
    - Number of files imported from the device's gallery or file system into Tella.
    - Number of security features activated (number of times that camouflage is enabled, number of times that the quick delete action is triggered).
    - Number of new installations.
    - Number of reports uploaded to any connection (Tella Web, Uwazi, ODK, Nexcloud, Google Drive, Dropbox)
    - Time spend in Tella. 


    **Tella Web**
   The data below is only collected from Tella Web instances that have opted-in to share privacy-preserving analytics with the Tella team.
    - Number of visits (triggered every time someone enters any Tella Web instance).
    - Number of file uploads (triggered every time someone uploads a file to any Tella Web instance).
    - Number of Report uploads (triggers every time someone uploads a report to any Tella Web instance).


Para más información sobre las métricas que añadimos a nuestras apps, echa un vistazo a nuestras [notas de lanzamiento](/releases).


## Funciones de seguridad {#security-features}

Tella integra varias medidas de seguridad para lograr un nivel aceptable de seguridad:



1. **Cifrado en reposo**: Todos los datos son cifrados en reposo, en el dispositivo de la/el usuaria(o). Esto quiere decir que a menos que la app esté desbloqueada (al introducir el método de bloqueo de usuaria(o)), los datos que contiene no pueden ser en absoluto accedidos. Incluso si alguien confisca el teléfono y extrae todos los datos utilizando una computadora, los datos permanecerán ilegibles.
2. **Encryption in transit:** All data being transferred between Tella and servers (see [Connections section](/connections)) is encrypted through[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security). Tella makes it impossible to send data to a server without TLS encryption.
3. **Método de Bloqueo**: La(o)s usuaria(o)s de Tella [eligen un método de bloqueo](/features#app-lock) para la app tan pronto como la instalan. Los bloqueos con Contraseña, Patrón y PIN están disponibles y cada nivel de seguridad es comunicado a la(o)s usuaria(o)s.
4. **Tiempo de espera para Bloqueo:** La(o)s usuaria(o)s también pueden configurar un [tiempo de espera para bloqueo](/features#lock-timeout-configuration), para elegir qué tan rápido Tella se bloqueará cuando no esté en uso. Por defecto, el tiempo de espera para bloqueo está establecido a "inmediatamente", por lo que tan pronto la/el usuaria(o) sale de Tella, la app se bloquea y todos los datos son cifrados.
5. **Camuflaje**: En Tella Android, actualmente hay [dos modos de camuflaje](features#camouflage) para Tella: una calculadora completamente funcional y la posibilidad de cambiar el ícono y nombre de la app para hacer que sea más difícil de encontrar en el teléfono. Debido a las restricciones de iOS, no es posible camuflar Talla para iOS.
6. **Botón de Borrado Rápido**: La(o)s usuaria(o)s pueden habilitar un botón deslizable de **[borrado rápido](features#quick-delete)** para eliminar datos de Tella rápidamente en una situación de emergencia. La(o)s usuaria(o)s pueden elegir, en la configuración de Tella, eliminar todos los archivos almacenados en Tella, borradores y formularios enviados, configuración de servidor y la app en sí cuando se active ese botón. Cuando se activa el botón de Borrado Rápido, una cuenta regresiva de 5 segundos es mostrada a la/el usuaria(o). Durante la cuenta regresiva, la/el usuaria(o) puede cancelar la acción de Borrado Rápido al tocar en cualquier parte de la pantalla. Cuando la cuenta regresiva llega a 0, la acción de borrado establecida por la/el usuaria(o) es aplicada. Si la/el usuaria(o) seleccionó la opción "eliminar Tella", Android le pedirá confirmar la eliminación de la app.
7. **Modo silencioso de la Cámara**: La(o)s usuaria(o)s pueden elegir [desactivar el sonido del obturador de la cámara](/features#camera-silent-mode) para llamar menos la atención al tomar fotos.
8. **Seguridad de pantalla**: Por defecto, Tella bloquea las capturas de pantalla y las grabaciones de pantalla dentro de Tella y oculta la vista previa de pantalla de la lista de apps recientes. [Esta configuración](/features#screen-security) se puede deshabilitar, por ejemplo para grabar tutoriales dentro de Tella o reflejar la app a una computadora para una presentación.
9. **Restringir intentos de desbloqueo**: La(o)s usuaria(o)s pueden decidir cuántos [intentos de desbloqueo](features#restrict-unlocking-attempts) fallidos están permitidos antes de que todo dentro de Tella sea eliminado y si un indicador visual con el número de intentos restantes será visible en la pantalla de desbloqueo o no.
10. **Offline file sharing**: Tella allows establishing a secure connection with devices that are in the same physical location and transferring files encrypted, from one Tella vault to another. [Nearby Sharing](/nearby-sharing) works fully offline, even on insecure networks or networks being surveilled.  Nearby Sharing is available cross-platform (between Android, iOS and Desktop).

:::tip Video tutorial 🎥
Aprende más sobre Funciones de Seguridad en nuestro [video tutorial](/video-tutorials#additional-security-features)
:::


## Limitaciones de seguridad {#security-limitations}

No hay tal cosa como una app que sea 100% "segura". La seguridad depende de las amenazas y riesgos enfrentados por cada usuaria(o), y las capacidades de la(o)s adversaria(o)s. Con Tella, hicimos todo lo posible para añadir tantas capas de seguridad como fuera posible para reducir la probabilidad de que alguien pueda detectar la app o acceder a sus datos. Aquí, listamos todos riesgos de seguridad y limitaciones importantes que la(o)s usuaria(o)s deben tener en cuenta al usar Tella:



* Camuflaje:
    * En Android, cuando Tella está camuflada usando uno de los dos [métodos de camuflaje disponibles](/features#camouflage), la app aún puede ser detectada en la Configuración de Android. Esto quiere decir que alguien que navegue en la Configuración de Android > Apps podrá ver que hay una app instalada en el dispositivo que se llama "Tella". También podrá ver el tamaño de la app. Por lo que si la/el usuaria(o) almacena archivos muy grandes, como videos, el tamaño de la app puede llamar la atención.
* Administración de archivos:
    * Los archivos que son exportados fuera de Tella al sistema de archivos del dispositivo ya no estarán cifrados. Esto quiere decir que cualquiera con acceso al dispositivo que navegue por el sistema de archivos o la galería podría encontrar esos archivos.
    * Los archivos que son compartidos a través de apps de terceras partes pueden ser visibles para aquellas apps y guardados sin cifrar en el sistema de archivos del dispositivo, y alguien que busque en estas apps podría encontrar los archivos. Por ejemplo: una foto almacenada dentro de Tella y compartida en WhatsApp será visible dentro de WhatsApp, y también será visible en el sistema de archivos, donde se almacenan las fotos de WhatsApp. Esto pasa porque para compartir con apps de terceras partes el archivo necesita guardarse en el sistema de archivos del teléfono, el cual no está cifrado. Es por esto que recomendamos eliminar manualmente el archivo del sistema de archivos del dispositivo después de compartirlo.
    * Files sent to a [server connection](/for-organizations) will be stored un-encrypted on the server, unless the server has implemented disk encryption. People who have access to the server might be able to see the files. Tella makes sure that the data travels encrypted to the server but cannot guarantee the security practices of the server. If you choose to connect to a Google Drive or Dropbox instance, or work with a third party organization for hosting your data, we recommend looking into whether the organization itself can access your data.
    * Importar un archivo crea una copia de este, y luego se importa y cifra dentro de Tella. En la versión 1.1(iOS) y 2.1(Android) hemos desarrollado una función para que la(o)s usuaria(o)s seleccionen si quieren conservar o eliminar el archivo original cuando importen a Tella. Sin embargo, recomendamos verificar que el archivo original no esté presente en la Papelera de Reciclaje (Mis archivos > Papelera) y eliminar el archivo de cualquier servicio de respaldo automático que hayas habilitado en tu teléfono (Google Photos, Dropbox, etc).


## Auditorías de seguridad {#security-audits}

Regularmente solicitamos a empresas de seguridad independientes auditar nuestro código para garantizar que sea robusto y seguro.

| Fecha | Auditado por | Plataformas auditadas  | Enlace      |
| -----|----------|----|-----------|
| May 2026 | Convocation Research and Design Labs  |  Android, iOS, Desktop |[Placeholder for report !]|
| August 2024 | Radically Open Security |  Android, iOS, Android FOSS|[View pen-testing results](</assets/2024.08.30-Penetration-Test-Report-Horizontal.pdf>)|
| Mayo de 2024 | Subgraph Technologies, Inc. |  Android, iOS, Tella Web|[View updated report confirming fixes has been implemented](</assets/2024.05.18 - Subgraph - Updated Report.pdf>)|
| Mayo de 2023 | Subgraph Technologies, Inc. | Android, iOS, Tella Web |[View security audit](</assets/2023.05 - Tella security audit - Final report.pdf>)|









