---
id: uwazi
title: Uwazi
description: The Uwazi server connection is available for organizations looking to collect structured data.
slug: /uwazi
---

# Uwazi

[Uwazi](https://uwazi.io/) is an open-source documentation tool developed by [HURIDOCS](https://huridocs.org). It is a flexible, web-based database application designed for human rights defenders to manage their collections of information, including documents, evidence, cases, and complaints.

Uwazi allows organizations to aggregate, in a central repository, data collected by their members or partners. Tella users connect to their organization's Uwazi instance, download forms (called templates), fill templates as many times as they need (even if they don't have internet connectivity), and upload the data. Organizations can then curate, organize, and publish their data directly from Uwazi. 

Similarly to all other server connections([Tella Web](/tella-web) and [Open Data Kit](/odk), connecting to Uwazi enhances the security of data collected on Tella by:
1. Allowing users to collect data directly inside Tella's encrypted container
2. Ensuring that data is sent directly from Tella to Uwazi, without having to rely on a third-party tool or app
3. Allowing users to back up their data on a remote server, to lower the risk that data is discovered on their mobile device
4. Ensuring that organizations can preserve important information even in the event of device seizure or destruction, and can organize it to use for research, advocacy, or accountability processes

### Testing Uwazi {#testing-uwazi}

You can test Uwazi using [this Demo instance](https://demo.uwazi.io/).

### When to use Uwazi {#when-to-use-uwazi}

We recommend Uwazi to organizations that need on-the-ground users to collect data in a structured manner through forms. 

Uwazi also allows project managers to easily organize, analyze, visualize, and publish the collected data. It is especially powerful because of its database allows making relationships between entities, which helps connect data points (such as incidents, perpetrators, and victims) to emerge patterns Uwazi is also great to collect data in many different languages and to facilitate collaboration between teams.

Uwazi does not have an official mobile app, so by integrating Uwazi and Tella, you can leverage Tella's encryption and offline capabilities and take full advantage of Uwazi's abilities to organize, search, download, visualize, and publish information. 

You can learn more about Uwazi on [Uwazi's official documentation](https://uwazi.readthedocs.io/en/latest/). HURIDOCS is a great friend of Horizontal, so if you have questions about Uwazi or would like us to connect you to the HURIDOCS team, [contact-us](contact-us).

## Configure Uwazi on a server {#configure-uwazi-on-a-server}


The HURIDOCS team offers 2 alternatives on how to set up your uwazi server:

1. Self-hosted: Share this [comprehensive administrator guide](https://uwazi.readthedocs.io/en/latest/sysadmin-docs/index.html) with your system's administrator for step-by-step instructions on how to install Uwazi on your server, configure backups, and set up advanced features. 
2. Hosted by HURIDOCS: HURIDOCS offer hosting packages as a service. Free hosting services  (up to a storage limit) and a trial version of Uwazi are available for human rights organizations. [Reach out to HURIDOCS](https://huridocs.org/services/) for more details about the service.  

## Model Your Data {#model-your-data}

An Uwazi collection is made up of Entities. An entity has Properties which are the fields that Tella users will fill to collect data. Entities can hold Primary Documents and/or Supporting Files and some properties that are defined by administrators on the Uwazi server when they create templates. A template is an empty form that can be filled as many times as needed; once a template is filled, it becomes an Entity. 

[You can read here](https://uwazi.readthedocs.io/en/latest/admin-docs/building-info-architecture.html#understanding-properties) about the properties that are available on the Uwazi server and how to model your data and create your templates. For the moment we only support properties and functionalities that have been flagged as high priority by Uwazi users. If you need other properties, [contact us](/contact-us).

:::info
If Tella users download a template that has properties that are not supported in Tella, those properties won't be shown in the app. However, users will still be able to submit the entities, and admins will be able to access these entities, including all the properties that were filled, without any problems.
:::

### Available Properties {#available-properties}

| **Property or Feature** | **Tella Android**| **Tella iOS** | **Tella Android FOSS** |
|------|------|-----|-----| 
| Primary and Supporting Documents | ✔️ | ✔️ | ✔️ |
| Plain Text | ✔️ | ✔️ | ✔️ |
| Numeric | ✔️ | ✔️ | ✔️ |
| Single Select  | ✔️ | ✔️ | ✔️ | 
| Multiple Select  | ✔️ | No | ✔️ | 
| Relationship | No | No | No |
| Single Date | ✔️ | ✔️ | ✔️ |
| Multiple Date | ✔️ | No | ✔️ |
| External Link | ✔️ | No | ✔️ |
| Rich Text | ✔️ | ✔️ | ✔️ |
| Single and Multiple Date Range | ✔️ | No | ✔️ |
| Attach Media (Image, Video, or Audio) | ✔️| ✔️ | ✔️ |
| Geolocation | ✔️ | No | ✔️ |
| Generated ID  | ✔️ | No | ✔️ |


## Get People on the Ground Ready to Start Submitting Data {#get-people-on-the-ground-ready-to-start-submitting-data}

### Connect to the Server {#connect-to-the-server}

In order to connect to an Uwazi server:

* Navigate to **Settings ⚙️** > **Servers** > **+**
* Select "Uwazi" from the list of available server types.
* Enter the organization’s Uwazi server URL (generated and provided by admins).
* Choose between:
    *  **Log In:**  if a username and password were provided by admins.
    *  **Public Access:**  if the server is configured to accept anonymous submissions.
* If the server is requires two-factor authentication, enter the one-time code.
* Choose the **Language** in which you want to display templates.

:::info
You can watch [this video](/video-tutorials#uwazi) on how to connect to an Uwazi server from the Tella.
:::

### Send Your Information {#send-your-information}

Once you successfully connected to an Uwazi instance, you'll see a new card with the label "Uwazi" in the **Connections** sections of your Tella homescreen.

To download a template, tap the **+** button at the bottom of the screen. You will see a list of templates that are available to you on all the Uwazi instances you are connected to. Tap on the **Download** button to download templates or the **Refresh** button to see if there are updates to the templates available to you on the server.

Then go back to the Uwazi main screen and tap the template you want to use to create an entity.


#### Data Submission Alternatives {#data-submission-alternatives}

| **Feature** | **Details**| **Tella Android** | **Tella iOS** | 
|------|------|------|------|
| Submit | Send the filled form to the connected server. | Yes | Yes |
| Save as draft | Save a form that's not completed.  | Yes | No |
| Submit later | Mark a form as ready and send it to the Outbox tab,  | Yes | No |
| Drafts Tab | A tab with all drafts. Drafts can be edited or deleted.  | Yes | No |
| Outbox Tab | A tab with forms ready to submit. Forms on the outbox tab can be edited or deleted.  | Yes | No |
| Submitted Tab | A tab with all forms that have been successfully sent to the server. Submitted forms can be deleted.  | Yes | No |
| Pause/Resume submission | Users can manually pause a submission and resume it when ready.  | Yes | No |
| Automatically pause submission when offline | Submissions will be sent to the Outbox tab if submission fails due to connectivity issues.  | Yes | No |


