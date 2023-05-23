---
id: overview
title: Overview
description: Learn how organziations can connect servers to Tella.
slug: /for-organizations
---

# Tella for organizations - Overview 

Besides collecting information directly in Tella and keeping the data protected within the app, some users also connect to a server to securely back up their data. This is typically done by organizations that centralize the data collected by volunteers or activists on the ground. These individuals gather information using Tella on their phones and then send it to their organizations.

Previous Tella deployments, where on-the-ground users collected data and sent it to an organization's server, have ranged from 1 to 2,000 users. 📲 📡. You can read user stories here, or you can contact us so that we can assist you in finding the best way to use Tella for your organization.

Currently, Tella can be connected to the following servers:



* [Open Data Kit (ODK)](#open-data-kit-odk)
* [Uwazi](#uwazi)
* [Tella Web](#tella-web)


You can watch a video discussing which server connection could work best for each scenario [here](/video-tutorials#connections-full-video).

:::info
If you need support choosing the best deployment setup or would like to discuss the possibility of integrating another server, [contact us!](/contact-us)
:::


### Tella Web

Tella Web is a secure and private server connection for Tella. It is an open-source tool that enables individuals and organizations to centralize and manage reports sent by Tella users, including photos, videos, and audio files. 

It is not a web version of the mobile app; rather, it is a tool specifically designed for centralizing and managing reports sent through Tella in the simplest way possible. With Tella Web, you can create projects, which function like folders where people can submit reports. For instance, you can create projects for specific geographic areas or themes such as police violence, gender-based violence, and environmental abuse. On Tella Web, you can also manage users who have the ability to upload reports to each project, assign different roles, and set permissions.

Tella Web is developed internally by our team at Horizontal, the same team responsible for developing Tella's mobile app. It is a reliable and user-friendly solution for managing reports in a safe and private manner. We provide support for the installation and configuration of a Tella Web server, but we recommend having someone within your organization who can maintain the server and perform all administrative tasks.

Tella Web integration works for both Android and iOS apps. Learn more about Tella Web [here](/tella-web)


### Uwazi

[Uwazi](https://uwazi.io/) is an open-source app made by HURIDOCS with powerful features to collect, organize, and visualize human rights data. Uwazi must be installed on a server. Uwazi does not have a user facing public instance, but you can try Uwazi functionality using the [Uwazi Demo server](https://demo.uwazi.io/). If you decide to use Uwazi and need help to deploy your instance, please contact us contact@tella-app.org. 

You can watch a video demoing the Uwazi integration [here](/video-tutorials#uwazi), or read [this blogpost from the Uwazi team](https://huridocs.org/2022/07/the-new-tella-app-lets-uwazi-users-document-violations-safely-and-while-offline/) about the integration.

:::info
For the moment, Uwazi server integration is [only available on Android](/features). 
:::


### Open Data Kit (ODK)

The [Open Data Kit (ODK)](https://getodk.org/) is an open standard used to create custom forms and collect data. Because ODK is an open standard, Tella can be used with any of the tools that are ODK-compliant, like [Ona](https://ona.io/home/) or [KoboToolbox](https://www.kobotoolbox.org/), to create forms with custom questions, manage users, and aggregate the data submitted by users. We recommend using [KoboToolbox](https://www.kobotoolbox.org/) because it is open-source and is user-friendly. Kobotoolbox has a free, publicly available server [here](https://kf.kobotoolbox.org/) or it can be self-hosted. [Here you can read more about Kobotoolbox and the features we support](https://tella.slite.com/app/docs/r7vxebjDQ3TAWE).

If you are using Kobotoolbox, [first create an account here](https://kf.kobotoolbox.org/accounts/login/), and then create and deploy a Form. In Tella go to Settings > Servers > Add Server > Open Data Kit (ODK). Give your server a name and type kc.kobotoolbox.org as the server URL field.  Enter your username and password on the Advanced section in order to load your Forms.

:::info
For the moment, ODK server integration is [only available on Android](/features). 
:::

:::tip
You can also watch a video demoing the ODK Server integration [here](/video-tutorials#open-data-kit).
:::

