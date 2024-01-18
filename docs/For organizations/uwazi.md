---
id: uwazi
title: Uwazi Server Connection
description: The Uwazi server connection is available for organizations looking to collect structured data using a relational database.
slug: /uwazi
---

# Uwazi Server Connection

[Uwazi](https://uwazi.io/) is an open-source documentation tool developed by HURIDOCS. It is a flexible, web-based database application designed for human rights defenders to manage their collections of information, including documents, evidence, cases, and complaints.

Similarly to [Tella Web](/tella-web), connecting to an Uwazi server enhances the security of files collected on Tella by allowing users to back them up on a remote server. By having a copy of their files stored on the server, organizations ensure the preservation of important information even in the event of device seizure or destruction, and can organize it to use for research, advocacy, or accountability processes. For users on the ground, backing up their data to Tella Web means that they can delete the information from their phone and avoid potential repression.

Uwazi does not have a user-facing public instance, but you can try Uwazi functionality using the [Uwazi Demo server](https://demo.uwazi.io/). We recommend Uwazi for organizations that need on-the-ground users to collect data in a structured manner, by filling template formularies. Uwazi also offers an admin center so project managers can organize, analyze, visualize, and share the collected data easily. You can find extensive documentation about Uwazi on [Uwazi's Documentation Site](https://uwazi.readthedocs.io/en/latest/).

Uwazi does not have a mobile app, so by integrating Uwazi and Tella, you can leverage Tella's encryption and offline capabilities and Uwazi's abilities to organize, search, download, and visualize information. Uwazi is also great if you need different language support and to facilitate collaboration between teams.

Horizontal and HURIDOCS have a very good relationship, so if you have particular questions about Uwazi or would like us to introduce you to the HURIDOCS team, [contact-us](contact-us).

## Install an Uwazi Server{#install-an-uwazi-server}

The HURIDOCS team created a comprehensive administrator guide with step-by-step instructions to install Uwazi on your server, configure backups, and set up advanced features. We recommend you share [this guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html) with your system administrator.

## Model Your Data{#model-your-data}

An Uwazi collection is made up of types of information called Entities. An entity has Properties which are the fields that the user on the ground will collect. Entities can hold Primary Documents and/or Supporting Files and some properties that are defined by administrators on the Uwazi server. On [this link](https://uwazi.readthedocs.io/en/latest/admin-docs/building-info-architecture.html#understanding-properties) you can read about the properties that are available on the Uwazi server and how to model your data and create your templates.

For the moment we only support properties and functionalities that have been flagged as prioritary to users of the Uwazi+Tella integration. If you need us to add other properties, [contact us](/contact-us).

:::info
If users of Tella download a template that has properties that are not supported in Tella, those properties won't be shown on the app. However, users will be able to submit the entities, and admins will be able to access the reports without any problems.
:::

### Available Properties{#available-properties}

| **Property or Feature** | **Tella Android**| **Tella iOS** | **Tella Android FOSS** |
|------|------|-----|-----| 
| Primary and Supporting Documents | Yes | Yes | Yes |
| Plain Text | Yes | Yes | Yes |
| Numeric | Yes | No | Yes |
| Single Select  | ? | Yes | ? | 
| Multiple Select  | Yes | No | Yes | 
| Relationship | Soon! | Soon! | Soon! |
| Single Date | Yes| Yes | Yes |
| Multiple Date | ?| No | ? |
| External Link | Yes| No | Yes |
| Rich Text | No?| Yes | No? |
| Single and Multiple Date Range | No?| No | No? |
| Attach Media (Image, Video, or Audio) | Yes| Yes | Yes |
| Geolocation | Yes | No | Yes |
| Generated ID  | No | No | No |


## Get People on the Ground Ready to Start Submitting Data {#get-people-on-the-ground-ready-to-start-submitting-data}

### Connect to the Server{#connect-to-the-server}

In order to connect to an Uwazi server, users would need to:

* Navigate to **Settings ⚙️** > **Servers** > **Add a server**
* Select "Uwazi" from the list of available server types.
* Enter the organization’s Uwazi server URL (generated and provided by admins).
* Choose between:
    *  **Log In:**  if a username and password were provided by admins.
    *  **Public Access:**  if the server is configured to accept anonymous submissions.
* Enter the 2FA code provided by admins, in case that the server is configured to require two-factor authentication.

:::info
You can watch [this video](/video-tutorials#uwazi) on how to connect to an Uwazi server from the Tella.
:::

### Send Your Information{#send-your-information}

Once you successfully connected to an Uwazi server, you'll see a new card with the label "Uwazi" on the **Connections** sections of your Tella's home screen.

To download a Template, tap the **+** button at the bottom of the screen. You will see a list of templates that have been made available to you on all the Uwazi's server instances you are connected to. Tap on the **Save icon** to download templates on your Tella or the **Refresh** button to update your templates based on changes on the server.

Then go back to the Uwazi home screen and tap to the template you want to fill.

You can use the **Save** button to save your entity as a draft or the **Submit Later** button if you are not ready to send your entity or the **Submit** button to send your entity to the server now.

:::info
For the moment, the iOS implementation does not include the Submit Later button nor the Outbox tab.
:::

