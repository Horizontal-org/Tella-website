---
id: overview
title: Overview
description: Learn how organziations can connect servers to Tella.
slug: /for-organizations
---

# Tella for organizations - Overview 

In addition to keeping the data protected within the app, users can also connect to a server to securely back up their data. This is typically  a server managed by organizations, where they can centralize the data collected by volunteers or activists on the ground. These individuals gather information using Tella on their phones and then send it to their organizations.

Previous Tella deployments, where on-the-ground users collected data and sent it to an organization's server, have ranged from 1 to 2,000 users. 📲 📡. You can read user stories here, or you can contact us so that we can assist you in finding the best way to use Tella for your organization.

Currently, Tella can be connected to the following servers:

* [Open Data Kit (ODK)](#open-data-kit-odk)
* [Uwazi](#uwazi)
* [Tella Web](#tella-web)

These are called [Connections](/features#connecting-to-servers) in Tella.


You can watch a video discussing which server connection could work best for each scenario [here](/video-tutorials#connections-full-video).

:::info
If you need support choosing the best deployment setup or would like to discuss the possibility of integrating another server, [contact us!](/contact-us)
:::


### Tella Web {#tella-web}

Tella Web is an open-source tool that enables individuals and organizations to centralize and manage reports sent by Tella users, including photos, videos, and audio files. 

It is not the web equivalent of the mobile app; rather, it is a tool specifically designed for centralizing and managing reports sent through Tella in the simplest way possible. With Tella Web, you can create projects, which function like folders where people can submit reports. For instance, you can create projects for specific geographic areas or themes such as police violence, gender-based violence, and environmental abuse. On Tella Web, you can also manage users who have the ability to upload reports to each project, assign different roles, and set permissions.

Tella Web is developed internally by our team at Horizontal, the same team responsible for developing Tella's mobile app. It is a user-friendly solution for managing reports in a safe and private manner. We can provide support for the installation and configuration of a Tella Web serverif you don't have someone within your organization who can maintain the server.

Tella Web integration works for both Android and iOS apps, but it's not available yet on [Tella-FOSS](/faq#is-tella-available-on-f-droid). 

Learn more about Tella Web [here](/tella-web)


### Uwazi {#uwazi}

[Uwazi](https://uwazi.io/) is an open-source documentation tool developed by HURIDOCS. It is a flexible, web-based database application designed for human rights defenders to manage their collections of information, including documents, evidence, cases and complaints. 

Organizations who use Uwazi as a database can connect Tella to one or more of their databases to upload data. All that is required to connect Tella to Uwazi is the Uwazi database URL, and a username and password. The Uwazi database should already have one or more templates configured, which can be downloaded into Tella. Once successfully downloaded, users can easily navigate between their templates to enter details for each new record, even when there is no internet connection. When the data entry is complete, it can be saved as a draft in the Tella app or immediately uploaded to the connected Uwazi database. This enables users who work offline to collect data and upload the information when it is convenient. 

Uwazi does not have a user facing public instance, but you can try Uwazi functionality using the [Uwazi Demo server](https://demo.uwazi.io/). If you decide to use Uwazi and need help to deploy your instance, please contact us contact@tella-app.org. 

Resources to learn more about Uwazi:
* video demoing the Uwazi integration[here](/video-tutorials#uwazi).
* [blogpost from the Uwazi team](https://huridocs.org/2022/07/the-new-tella-app-lets-uwazi-users-document-violations-safely-and-while-offline/) about the integration.
* [Uwazi](https://uwazi.io/) website and [support page](https://uwazi.io/en/page/9852italrtk/support).

:::info 
For the moment, Uwazi server integration is [only available on Android](/features). 
:::


### Open Data Kit (ODK) {#open-data-kit-odk}

The [Open Data Kit (ODK)](https://getodk.org/) is an open standard used to create custom forms and collect data. In order to connect a Open Data Kit server, first you need to create forms with different questions types (text, date, geolocation, media, etc) using any  of the tools that are ODK-compliant.

On our [Open Data Kit server connection page](/odk) we explain how to create an account, where to find information about creating forms and how to connect to the server from Tella. If you are considering using Open Data Kit or you need help to [deploy](/faq#deploying-tella) your instance, please [contact us](/contact-us). 


:::info
ODK server integration is [only available on Android](/features). 
:::

:::tip
You can also watch a video demoing the ODK Server integration [here](/video-tutorials#open-data-kit).
:::

