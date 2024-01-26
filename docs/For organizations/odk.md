---
id: odk
title: Open Data Kit (ODK)
description: The Open Data Kit server connection is available for organizations looking to collect structured data using forms.
slug: /odk
---

# Open Data Kit (ODK)

The [Open Data Kit (ODK)](https://getodk.org/) is an open standard used to create custom forms and collect data. Open Data Kit is open source software and a standard for data collection used by 2 million people every year. There are many ODK-compliant server alternatives.

An Open Data Kit server allows organizations to aggregate, in a central repository (_referred to as Central server_), data collected by their members or partners. Tella users connect to their organization's server instance, fill forms as many times as they need (even if they don't have internet connectivity), and upload the data. Organizations can download the data from the server or analyze it on the server, depending on the chosen server alternatives.

Similarly to any other server connection (like [Tella Web](/tella-web) or [Uwazi](/uwazi)), connecting to the ODK server enhances the security of data collected on Tella by:

1. Allowing users to collect data directly inside Tella's encrypted container.
2. Ensuring that data is sent directly from Tella to the ODK server, without relying on a third-party tool or app.
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device.
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it for research, advocacy, or accountability processes.

### Choosing and Installing Your ODK Central Server{#install-your-odk-server}

Because ODK is an open standard, Tella can be used with any of the tools that are ODK-compliant.

According to the [Open Data Kit getting started page](https://docs.getodk.org/getting-started/), you can use a [paid](https://getodk.org/#pricing) [ODK Cloud](https://getodk.org/#odk-cloud) as a Central server or self-host it for free. They offer [this guide](https://docs.getodk.org/central-install/) to guide you on the installation process.

For civil society organizations and human rights defenders, we recommend using [KoboToolbox](https://www.kobotoolbox.org/) to create forms with custom questions, manage users, and aggregate the data submitted by users. Based on our experience, KoboToolbox is user-friendly and flexible, and it is also open source. KoboToolbox offers a [free public server](https://kf.kobotoolbox.org/accounts/login/) for non-profits and supports them with training and guidance on how to structure the data on the server. It is also possible [to use a private instance of KoboToolbox](https://www.kobotoolbox.org/services/private-servers/) or [self-host it](https://support.kobotoolbox.org/kobo_your_servers.html).

There are other ODK-compliant servers available, like the [Ona server](https://ona.io/home/). Tella will work with any of these. If you need help, [contact us](contact-us) so we can help you choose the best server for your use case.

### When to Use ODK{#when-to-use-odk}

We recommend ODK to organizations that need on-the-ground users to collect data in a structured manner. We also recommend it to organizations that don't have the technical capacity to install and maintain a server and want to use a cloud instance that's reliable and fast. Remember that if you use a cloud instance, we recommend you understand where your data will be hosted and whether that's safe for your use case.

ODK and KoboToolbox are widely used, well-documented, and easy to use. There are guides available, and they offer support to non-profit organizations on how to structure and maintain their data.

## Model Your Data{#model-your-data}

KoboToolbox offers a detailed guide on how to create your project and add questions to your forms, and how to deploy them to make them available to on-the-ground users [here](https://support.kobotoolbox.org/overview_of_creating_a_project.html).

## Connect to an ODK Server to Collect Data{#collect-data}

In this documentation, we focus on how to collect data using Tella. There are other alternatives, including the ODK Collect Android App. You can check the alternatives [here](/faq#how-is-tella-different-from-other-documentation-apps).

:::info
The ODK server connection is not available for Tella iOS.
:::

### Connect to an ODK Server{#connect-to-an-odk-server}
After creating and deploying a Form using any ODK-compliant server, in Tella, go to **Settings** > **Servers** > **+** > **Open Data Kit (ODK)**. Fill the following fields:
- **Name**: A descriptive name for your server in Tella.
- **URL**: Your server URL. For example, `kc.kobotoolbox.org` if you are using the KoboToolbox public server.
If your server requires user authentication, tap the **Advanced** button and enter your **Username** and **Password**. Your server's administrator should provide all this information to you.

Once you are in the **Forms**, you will be able to see all the Forms that have been made available to you on this server instance.

### Supported Question Types{#supported-question-types}
Below is an overview of the ODK question types that are supported in Tella Android. If there is a question type that isn't supported in Tella and that is critical to your workflow, please [contact us](/contact-us).

| **Question type** | **Tella Android** | 
|------|------|
| Select One | ✔️ |
| Select Many | ✔️ |
| Text | ✔️ |
| Number | ✔️ |
| Decimal | ✔️ |
| Date | ✔️ |
| Time | ✔️ |
| Date & time | ? |
| Point | ? |
| Note | ? |
| Barcode / QR Code | ❌ |
| Acknowledge | ✔️ |
| Area | ❌ |
| Rating | ❌ |
| Question Matrix | ❌ |
| Ranking | ❌ |
| Calculate | ❌ |
| File | ? |
| Range | ❌ |

### Supported Features{#supported-features}

Below is an overview of the ODK features that are supported in Tella Android. If there is a feature that isn't supported in Tella and that is critical to your workflow, please [contact us](/contact-us).
    
| **Feature** | **Tella Android** | 
|------|------|
| [Offline data collection](/odk#data-collection-alternatives) | ✔️ |
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

### Data Collection Alternatives with Tella{#data-collection-alternatives}

| **Feature** | **Details**| **Tella Android** | 
|------|------|------|
| Submit | Send the filled form to the connected server. | Yes |
| Save as draft | Save a form that's not completed.  | Yes |
| Submit later | Mark a form as ready and send it to the Outbox tab,  | Yes |
| Drafts Tab | A tab with all drafts. Drafts can be edited or deleted.  | Yes |
| Outbox Tab | A tab with forms ready to submit. Forms on the outbox tab can be edited or deleted.  | Yes |
| Submitted Tab | A tab with all forms that have been successfully sent to the server. Submitted forms can be deleted.  | Yes |
| Pause/Resume submission | Users can manually pause a submission and resume it when ready.  | Yes |
| Automatically pause submission when offline | Submissions will be sent to the Outbox tab if submission fails due to connectivity issues.  | Yes |
