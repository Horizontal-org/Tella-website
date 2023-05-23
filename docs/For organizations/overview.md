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


### Tella Web

Tella Web is a secure and private server connection for Tella. It is an open-source tool that enables individuals and organizations to centralize and manage reports sent by Tella users, including photos, videos, and audio files. 

It is not a web version of the mobile app; rather, it is a tool specifically designed for centralizing and managing reports sent through Tella in the simplest way possible. With Tella Web, you can create projects, which function like folders where people can submit reports. For instance, you can create projects for specific geographic areas or themes such as police violence, gender-based violence, and environmental abuse. On Tella Web, you can also manage users who have the ability to upload reports to each project, assign different roles, and set permissions.

Tella Web is developed internally by our team at Horizontal, the same team responsible for developing Tella's mobile app. It is a reliable and user-friendly solution for managing reports in a safe and private manner. We provide support for the installation and configuration of a Tella Web server, but we recommend having someone within your organization who can maintain the server and perform all administrative tasks.

Learn more about Tella Web [here](/tella-web)


### Uwazi

Uwazi is HURIDOCS’ flagship documentation tool. It is a flexible web-based database application designed for human rights defenders to manage their collections of information, including documents, evidence, cases and complaints. 

Organizations who use Uwazi as a database tool, can connect Tella to one or more of their databases to upload data. All that is required to connect Tella to an Uwazi instance is the Uwazi database url, and the username and password. The Uwazi database should already have one or more templates configured, which can be downloaded into Tella. Once successfully downloaded, users can easily navigate between their templates to enter details for each new record, even when there is no internet connection. When the data entry is complete, it can be saved as a draft in the Tella app or immediately uploaded to the connected Uwazi database. This enables users who work offline to collect data, add it to the submission forms, save it and upload the information when it is convenient. In addition to the protection and encryption features, working in offline mode is a huge benefit for those who collect information in risky environments and areas with limited or no connectivity. 

You can watch a video demoing the Uwazi integration [here](/video-tutorials#uwazi), or read [this blogpost from the Uwazi team](https://huridocs.org/2022/07/the-new-tella-app-lets-uwazi-users-document-violations-safely-and-while-offline/) about the integration.


### Open Data Kit (ODK)

Open Data Kit (ODK) is a free and open-source suite of tools designed for mobile data collection. If you need advanced data collection capabilities (structured data, by giving reporters Forms to fill) choosing the ODK connection could be beneficial for your organization or project.

Read about the features we support for the ODK integration [here](/video-tutorials#open-data-kit). 

You can also watch a video demoing the ODK Server integration [here](https://vimeo.com/manage/videos/817030533).



:::tip
Keeep in mind there are other data collection tools available. We shared an overview of them [here:](/faq/#how-is-tella-different-from-other-documentation-apps)
:::

If you need support choosing the best deployment setup or would like to discuss the possibility of integrating another server, [contact us!](/contact-us)