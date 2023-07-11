---
id: incident-ios-files
title: What's new
description: Incident report - Users lost access to their files on iOS
slug: /incident-ios-files
---

# Users lost access to their files on iOS

## Summary

On release of v1.1.0 of Tella iOS (build 43), we introduced a bug that rewrote the local root, which contains all the file information and file structure. All users who updated from v1.0(28) or earlier to v1.1 lost the file names and folder structures inside Tella. To users, it looked like files had been erased. While they were invisible, the files were still present inside Tella and were not lost.

8 days after the release of v1.1.0, we published Tella iOS v1.1.1 with a fix that prevented this issue for all users who had not yet upgraded to v1.1. On June 20, we published a fix that restores all files to full visibility. However, we were not able to restore the original file names and file structure.

The severity of this incident is high because there is no way to restore the file names and the folder structure within Tella.

## Timeline

| Date and time | Event                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------|
| May 17, 2023  | Published version 1.1.0, introducing the bug                                                          |
| May 20, 2023  | First user reported the problem                                                                       |
| May 25, 2023  | Published version 1.1.1, fixing the bug                                                               |
| June 20, 2023 | Published version 1.1.2 with a restore functionality for affected users to be able to restore their lost files |
| July 6, 2023  | Published this incident report                                                                       |

## Root cause

On version 1.0, the vault file ID is missing. On version 1.1, we added a non-optional identifier to the Vault file with an initialization in the init function. On application launch, when the system is unable to decode the root file, it creates a new root. This bug has been fixed in this [commit](https://github.com/Horizontal-org/Tella-iOS/commit/c687074cb544a1b6d9c89eb7bacc007a4a0bb5e8).

## Resolution and recovery

As soon as the issue was identified, we published a fix to prevent more users from being affected and started working on the recovery strategy. The fix was made available in v1.1.1.

For the recovery, we attached a process to the OK key on the unlock screen. After a successful login attempt, we iterate through the list of encrypted files, decrypt them, infer the file type from the decrypted data, and add the restored files to the current root with auto-generated names.

The information we cannot restore is: File name and file location.

## Corrective and preventive measures

- We added a step in our internal testing (both on the development side and on the product management side) to ensure that files are maintained after an upgrade.
- As a longer-term step, we are planning to dedicate time to migrate from saving file information in a file to saving it in a database. This way, the information will be stored securely, with built-in recovery mechanisms.
