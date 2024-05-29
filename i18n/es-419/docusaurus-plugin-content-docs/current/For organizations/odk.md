---
id: odk
title: Open Data Kit (ODK - Kit de Datos Abiertos)
description: La conexión a servidor Open Data Kit está disponible para organizaciones que buscan recopilar datos estructurados utilizando formularios.
slug: /odk
---

# Open Data Kit (ODK - Kit de Datos Abiertos)

El [Open Data Kit (ODK - Kit de Datos Abiertos)](https://getodk.org/) es un estándar abierto utilizado para crear formularios personalizados y recopilar datos.

Un servidor Open Data Kit permite a las organizaciones agregar, en un repositorio central, datos recopilados por sus miembros o socia(o)s. La(o)s usuaria(o)s de Tella se conectan a la instancia ODK de su organización, rellenan formularios cuantas veces necesiten (incluso si no tienen conexión a internet), y suben los datos. Organizaciones pueden descargar los datos del servidor o analizarla en el servidor, dependiendo de las alternativas del servidor elegido.

De manera similar a todas las demás conexiones de servidor(como [Tella Web](/tella-web) o [Uwazi](/uwazi)), conectar al servidor ODK mejora la seguridad de los datos recopilados en Tella al:

1. Permitir a la(o)s usuaria(o)s a recopilar datos directamente dentro de un contenedor cifrado de Tella.
2. Garantizar que los datos son enviados directamente de Tella al servidor ODK, sin tener que depender de una herramienta o app de terceras partes.
3. Permitir que usuaria(o)s respalden sus datos en un servidor remoto, para reducir el riesgo de que los datos sean descubiertos en su dispositivo móvil.
4. Asegurar que las organizaciones puedan conservar información importante incluso en caso de confiscación o destrucción de dispositivo, y puedan organizarla para procesos de  investigación, incidencia, o rendición de cuentas.

### Eligiendo e Instalando Tu Servidor ODK Central {#choosing-and-installing-your-odk-central-server}

Porque ODK es un estándar abierto, se puede utilizar Tella con cualquier herramienta que cumpla con ODK.

Para organizaciones de la sociedad civil y defensora(e)s de los derechos humanos, recomendamos utilizar [KoboToolbox](https://www.kobotoolbox.org/) para crear formularios con preguntas personalizadas, gestionar usuaria(o)s, y recopilar los datos enviados por usuaria(o)s. Basado en nuestra experiencia, KoboToolbox es amigable y flexible, y también de código abierto. KoboToolbox ofrece un [servidor público gratuito](https://kf.kobotoolbox.org/accounts/login/) para sin fines de lucro y las ayuda con capacitación y orientación sobre cómo estruturar datos en el servidor. También es posible [usar una instancia privada de KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) o [auto hospedarla](https://support.kobotoolbox.org/kobo_your_servers.html).

Hay disponibles otras apps que cumplen con ODK, como [Ona](https://ona.io/home/) o [ODK Cloud](https://https://getodk.org/index.html). Tella funciona con cualquiera de estas. Si necesitas ayuda, [contáctanos](contact-us) para que podamos ayudarte a seleccionar el mejor servidor para tu caso de uso.

### Cuándo Usar ODK {#when-to-use-odk}

Recomendamos ODK a organizaciones que necesitan usuaria(o)s sobre el terreno para recopilar datos de manera estructurada como los formularios. También lo recomendamos a organizaciones que no tienen la capacidad técnica para instalar y mantener un servidor y quieren utilizar una instancia en la nube lista para usar. Si utilizas una instancia en la nube, recuerda que la organización que aloja tu instancia de ODK podrá acceder a tus datos. Esta es una consideración importante al decidir si auto alojar o utilizar un servicio en la nube.

ODK y KoboToolbox son ampliamente utilizadas, bien documentadas, y fáciles de usar. Hay guías disponibles, y estas ofrecen soporte para organizaciones sin fines de lucro sobre cómo estructurar y mantener sus datos.

## Modela Tus Datos {#model-your-data}

KoboToolbox ofrece una guía detallada de cómo crear tu proyecto y añadir preguntas a tus formularios, y cómo implementarlos para hacerlos disponibles a usuaria(o)s sobre el terreno [aquí](https://support.kobotoolbox.org/overview_of_creating_a_project.html).

## Conecta Tella a una Instancia ODK para Recopilar Datos  {#connect-tella-to-an-odk-instance-to-collect-data}

En esta documentación, nos enfocamos en cómo recopilar datos utilizando Tella. Hay apps móviles alternativas que pueden ser utilizadas para recopilar datos en ODK, incluyendo la app ODK Collect Android. Puedes ver una comparación de estas alternativas [aquí](/faq#how-is-tella-different-from-other-documentation-apps).

:::info
La conexión ODK no está disponible para Tella iOS.
:::

### Conectar a un Servidor ODK {#connect-to-an-odk-server}
Después de crear e implementar un Formulario usando cualquier servidor que cumpla con ODK, en Tella, ve a **Configuración** > **Servidores** > **+** > **Open Data Kit (ODK)**. Llena los siguientes campos:
- **Nombre de Servidor**: Un nombre descriptivo para tu servidor en Tella. El nombre que selecciones solo es visible en la app y no tiene impacto en la conexión ODK.
- **URL del Servidor**: URL de tu servidor. Por ejemplo, "kc.kobotoolbox.org" si estas usando el servidor público de KoboToolbox.
Si tu servidor requiere autenticación de usuaria(o), toca el botón **Avanzada** e introduce tu **Nombre de usuaria(o)** y **Contraseña**. La/el administrador(a) de tu servidor debe proporcionarte toda esta información.


### Rellenar formularios {#fill-forms}

Una vez que te hayas conectado con éxito a la instancia ODK, verás una nueva tarjeta llamada "Formularios" en la sección **Conexiones** de la pantalla de inicio de Tella.

Después de entrar a la sección **Formularios**, verás una lista de Formularios disponibles para tí en la(s) instancia(s) a la(s) que estás conectada(o). Utilizando el botón **Descargar** puedes descargar formularios a Tella para que puedas llenarlos, incluso si no estas conectada(o) a internet.

Puedes tocar sobre cada formulario en blanco para empezar a llenarlo.


#### Enviar formularios {#submit-forms}

A medida que recopilas datos y llenas formularios, las siguientes opciones están disponibles para aumentar el soporte fuera de línea en Tella:
- Enviar: envia el formulario completado al servidor ODK.
- Guardar como borrador: guarda un formulario que no esté completado para que puedas continuar trabajando en este luego.
- Enviar luego: marca un formulario como completo para enviarlo en un momento posterior. Hasta que se envíe, estará disponible en la Bandeja de Salida.
- Pestaña de Borradores: una pestaña con la lista de todos los borradores de formularios. Los borradores pueden ser editados o eliminados.
- Pestaña Bandeja de Salida: una tabla con la lista de todos los formularios listos para enviar. Los formularios en la pestaña de Bandeja de Salida pueden ser editados, eliminados, o enviados.
- Pestaña de Enviados: una pestaña con todos los formularios que se han enviado con éxito al servidor. Los formularios enviados pueden ser eliminados.
- Pausar/Reanudar envío: puedes pausar manualmente un envío y reanudarlo cuando esté listo.
- Pausar envío automáticamente cuando estés fuera de línea: los formularios se enviarán a la Bandeja de Salida si el envío falla debido a problemas de conexión.

### Tipos de Preguntas Admitidas {#supported-question-types}
Debajo una vista general de los tipos de preguntas ODK que son admitidos en Tella Android. Si hay un tipo de pregunta que no es admitido en Tella y que es crítico para tu flujo de trabajo, por favor [contáctanos](/contact-us).

| **Tipo de Pregunta** | **Tella Android** | 
|------|------|
| Selecionar Una | ✔️ |
| Seleccionar Muchas | ✔️ |
| Texto | ✔️ |
| Número / Decimal | ✔️ |
| Fecha | ✔️ |
| Hora | ✔️ |
| Fecha y hora | No  |
| Punto (calcular mi ubicación actual) | ✔️ |
| Punto (mostrar mi ubicación en un mapa) | ✔️ |
| Punto (elegir mi ubicación en un mapa) | ✔️ |
| Línea | No |
| Área | No |
| Foto | ✔️ |
| Firma de foto (escribir a mano mi firma) | ✔️ |
| Audio | ✔️ |
| Video | ✔️ |
| Archivo | No |
| Nota | ✔️ |
| Código de barras / Código QR | No |
| Reconocer | ✔️ |
| Clasificación | ✔️ |
| Matriz de Preguntas | No |
| Ranking | ✔️ |
| Calcular | No |
| Oculta | No |
| Rango | No |
| XML Externo | No |

### Funciones Admitidas {#supported-features}

Debajo una vista general de los tipos de funciones ODK que son admitidos en Tella Android. Si hay un tipo de función que no es admitido en Tella y que es crítico para tu flujo de trabajo, por favor [contáctanos](/contact-us).

| **Función** | **Tella Android** | 
|------|------|
| [Recopilación de datos fuera de línea](/odk#submit-forms) | ✔️ |
| [Lógica de Formulario](https://docs.getodk.org/form-logic/) | ❌ |
| [Requerir respuestas](https://docs.getodk.org/form-logic/#requiring-responses) | ✔️ |
| [Establecer respuestas predeterminadas](https://docs.getodk.org/form-logic/#setting-default-responses) | ❌ |
| [Activar cálculos al cambiar valor](https://docs.getodk.org/form-logic/#triggering-calculations-on-value-change) | ❌ |
| [Validar y restringir respuestas](https://docs.getodk.org/form-logic/#validating-and-restricting-responses) | ❌ |
| [Mostrar respuestas condicionalmente](https://docs.getodk.org/form-logic/#conditionally-showing-questions) | ✔️ |
| [Grupos de preguntas](https://docs.getodk.org/form-logic/#groups-of-questions) | ✔️ |
| [Repetir preguntas](https://docs.getodk.org/form-logic/#repeating-questions) | ✔️ |
| [Filtrar opciones en preguntas de selección](https://docs.getodk.org/form-logic/#filtering-options-in-select-questions) | ✔️ |
| [Generar seleccionadas desde repeticiones](https://docs.getodk.org/form-logic/#generating-select-ones-from-repeats) | ❌ |