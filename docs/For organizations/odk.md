---
id: odk
title: Open Data Kit (ODK)
description: The Open Data Kit server connection is available for organizations looking to collect structured data using forms.
slug: /odk
---

# Open Data Kit (ODK) Connection

The [Open Data Kit (ODK)](https://getodk.org/) is an open standard used to create custom forms and collect data. 

An Open Data Kit server allows organizations to aggregate, in a central repository, data collected by their members or partners. Tella users connect to their organization's ODK instance, fill forms as many times as they need (even if they don't have internet connectivity), and upload the data. Organizations can download the data from the server or analyze it on the server, depending on the chosen server alternatives.

Similarly to any other server connection (like [Tella Web](/tella-web), [Google Drive](/g-drive), [Nextcloud](/nextcloud) or [Uwazi](/uwazi)), connecting to the ODK server enhances the security of data collected on Tella by:

1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to the ODK server, without relying on a third-party tool or app.
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it for research, advocacy, or accountability processes.

### Choosing and Installing Your ODK Central Server {#choosing-and-installing-your-odk-central-server}

Because ODK is an open standard, Tella can be used with any of the tools that are ODK-compliant.

For civil society organizations and human rights defenders, we recommend using [KoboToolbox](https://www.kobotoolbox.org/) to create forms with custom questions, manage users, and aggregate the data submitted by users. Based on our experience, KoboToolbox is user-friendly and flexible, and it is also open source. KoboToolbox offers a free [community plan](https://www.kobotoolbox.org/pricing/) for non-profits and offer free training resources and guidance on how to structure the data on the server (Self-serve learning base and Community Forum). It is also possible [to use a private instance of KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) or [self-host it](https://support.kobotoolbox.org/kobo_your_servers.html).

There are other ODK-compliant apps available, like [Ona](https://ona.io/home/) or [ODK Cloud](https://https://getodk.org/index.html). Tella works with any of these. If you need help, [contact us](contact-us) so we can help you select the best server for your use case.

### When to Use ODK {#when-to-use-odk}

We recommend ODK to organizations that need on-the-ground users to collect data in a structured manner like forms. We also recommend it to organizations that don't have the technical capacity to install and maintain a server and want to use a ready-to-use cloud instance. If you use a cloud instance, remember that the organization hosting your ODK instance will be able to access your data. This is an important consideration when deciding whether to self-host or use a cloud service. 

ODK and KoboToolbox are widely used, well-documented, and easy to use. There are guides available, and they offer support to non-profit organizations on how to structure and maintain their data.

:::tip
If you need help figuring out if ODK is best for your use-case, [read our guide](/for-organizations) or [contact us](/contact-us)!
:::

## Model Your Data {#model-your-data}

KoboToolbox offers a detailed guide on how to create your project and add questions to your forms, and how to deploy them to make them available to on-the-ground users [here](https://support.kobotoolbox.org/overview_of_creating_a_project.html).

## Connect Tella to an ODK Instance to Collect Data {#connect-tella-to-an-odk-instance-to-collect-data}

In this documentation, we focus on how to collect data using Tella. There are alternative mobile apps that can be used to collect data on ODK, including the ODK Collect Android app. You can see a comparison of these alternatives [here](/faq#how-is-tella-different-from-other-documentation-apps).

:::info
The ODK connection is not available for Tella iOS.
:::

### Connect to an ODK Server {#connect-to-an-odk-server}
After creating and deploying a Form using any ODK-compliant server, in Tella, go to **Settings** > **Servers** > **+** > **Open Data Kit (ODK)**. Fill the following fields:
- **Server Name**: A descriptive name for your server in Tella. The name you select is only visible in the app and does not impact the ODK connection. 
- **Server URL**: Your server URL. For example, `kc.kobotoolbox.org` if you are using the KoboToolbox public server.
If your server requires user authentication, tap the **Advanced** button and enter your **Username** and **Password**. Your server's administrator should provide all this information to you.


### Fill forms {#fill-forms}

After you successfully connected to the ODK instance, you'll see a new card called "Forms" in the **Connections** sections of the Tella homescreen.

After you enter the **Forms** section, you will see a list of Forms available to you on the instance(s) that you are connected to. Using the **Download** button you can download forms to Tella so that you can fill them, even if you are not connected to the internet.

You can tap on each blank form to start filling it.


#### Submit forms {#submit-forms}

As you collect data and fill forms the following options are available to increase offline support on Tella:
- Submit: send the filled form to the ODK server.
- Save as draft: save a form that is not completed so you can continue working on it later.
- Submit later: mark a form as complete to submit it a later point. Until it is sent, it will be available in the Outbox tab.
- Drafts tab: a tab with the list of all draft forms. Drafts can be edited or deleted.
- Outbox tab: a table with the list of all forms ready to be submitted. Forms in the Outbox tab can be edited, deleted, or submitted.
- Submitted tab: a tab with the list of all forms that have been successfully sent to the server. Submitted forms can be deleted.
- Pause/Resume submission: you can manually pause a submission and resume it when ready.
- Automatically pause submission when offline: forms will be sent to the Outbox tab if the submission fails due to connectivity issues.

### Supported Question Types {#supported-question-types}
Below is an overview of the ODK question types that are supported in Tella Android. If there is a question type that isn't supported in Tella and that is critical to your workflow, please [contact us](/contact-us).

| **Question type** | **Tella Android** | 
|------|------|
| Select One | ✔️ |
| Select Many | ✔️ |
| Text | ✔️ |
| Number / Decimal | ✔️ |
| Date | ✔️ |
| Time | ✔️ |
| Date & time | No  |
| Point (calculate my current location) | ✔️ |
| Point (show my location on a map) | ✔️ |
| Point (let me choose my location on a map) | ✔️ |
| Line | No |
| Area | No |
| Photo | ✔️ |
| Photo signature (handwrite my signature) | ✔️ |
| Audio | ✔️ |
| Video | ✔️ |
| File | No |
| Note | ✔️ |
| Barcode / QR Code | No |
| Acknowledge | ✔️ |
| Rating | ✔️ |
| Question Matrix | No |
| Ranking | ✔️ |
| Calculate | No |
| Hidden | No |
| Range | No |
| External XML | No |

### Supported Features {#supported-features}

Below is an overview of the ODK features that are supported in Tella Android. If there is a feature that isn't supported in Tella and that is critical to your workflow, please [contact us](/contact-us).
    
| **Feature** | **Tella Android** | 
|------|------|
| [Offline data collection](/odk#submit-forms) | ✔️ |
| [Form logic](https://docs.getodk.org/form-logic/) | ❌ |
| [Requiring responses](https://docs.getodk.org/form-logic/#requiring-responses) | ✔️ |
| [Setting default responses](https://docs.getodk.org/form-logic/#setting-default-responses) | ❌ |
| [Triggering calculations on value change](https://docs.getodk.org/form-logic/#triggering-calculations-on-value-change) | ❌ |
| [Validating and restricting responses](https://docs.getodk.org/form-logic/#validating-and-restricting-responses) | ❌ |
| [Conditionally showing questions](https://docs.getodk.org/form-logic/#conditionally-showing-questions) | ✔️ |
| [Groups of questions](https://docs.getodk.org/form-logic/#groups-of-questions) | ✔️ |
| [Repeating questions](https://docs.getodk.org/form-logic/#repeating-questions) | ✔️ |
| [Filtering options in select questions](https://docs.getodk.org/form-logic/#filtering-options-in-select-questions) | ✔️ |
| [Generating select ones from repeats](https://docs.getodk.org/form-logic/#generating-select-ones-from-repeats) | ❌ |