---
id: connections
title: Connections
description: Learn about how to share data with others using Tella Connections.
slug: /connections
---
import ConnectionsTable from '.././_connections-table.md';


# Tella Connections - Overview 

In addition to keeping the data protected within the app, users can use *Connections* as a way to share data with others. Depending on the type of connections, some use-cases might be:
- An individual can choose to back up some of their files to a cloud, another phone or to a computer.
- Volunteers or activists on the ground can submit forms to their organization, directly from Tella.
- A group of people can connect to a drive, cloud or space and send files to it. 
- An individual can share encrypted data with other Tella users in the context of an internet shutdown.

There are 2 main type of connections:
- [Nearby Sharing](#nearby-sharing): Share files, encrypted, to another Tella device that's in physical proximity. This feature do not require an internet connection and it's typically used on internet shutdown scenarios.
- [Upload to a server](#server-connections): Connect to a server and upload files, using internet, so that others can access them. This feature is typically used by organizations running data collection processes. 

The Tella homescreen will show a shortcut to all connected servers. Nearby Sharing shortcut is turned on by default, but it can be disabled from **Settings** > **Connections**. 


## Nearby Sharing {#nearby-sharing}




## Server connections {#server-connections}

Server connections are useful for organizations leading data collection processes. Organizations can choose, configure and manage a server, where they can centralize the data collected by volunteers or activists on the ground. These individuals gather information using Tella on their phones and then send it to their organizations.

Previous Tella deployments, where on-the-ground users collected data and sent it to an organization's server, have ranged from 1 to 2,000 users. 📲 📡. You can read user stories [here](/user-stories), or you can contact us so that we can assist you in finding the best way to use Tella for your organization.

Currently, Tella can be connected to the following types of servers:

* [Open Data Kit (ODK)](/odk)
* [Uwazi](/uwazi)
* [Tella Web](/tella-web)
* [Google Drive](/g-drive)
* [Nextcloud](/nextcloud)
* [Dropbox](/dropbox)

Feature availability by platform:
<ConnectionsTable/>


Some individuals use the commercial clouds (Google Drive, Dropbox, Nextcloud) as a backup system for their Tella data. However, we advice that this feature is used with caution. For the moment there is not automatic backups to any server, and the files on the server will be accessible to anyone with access to the server. [Read more about backups in Tella here](/features#backup-files).

:::info
All server connections we implemented are offline first, with built in mechanisms for keeping progress even if the internet is not reliable. You can read more about [offline data collection here](/features#offline-data-collection)
:::

:::danger
Even if the data travel to the server using secure methods (SSL), the files on the server itself **are not** encrypted. People who have access to the server itself are able to see the files.
:::

[Continue reading here about Server Connections and how organizations are using Tella](/for_organizations).
