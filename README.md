# About the Tella website and documentation 

This repository is the home of all Tella documentation: including videos, step-by-step guides, turorials and detailed description of Tella's features. This website is built using [Docusaurus](https://docusaurus.io/).

You can access the Tella website here: https://tella.app/

# About Tella

## What's Tella - Document & protect {#whats-tella---document--protect}

In challenging environments, with limited or no internet connectivity or in the face of repression, Tella makes it easier and safer to document human rights violations and collect data.

## Why Tella {#why-tella}

If you are an activist, journalist, human rights defender, or anyone who engages in documentation of injustice, you can use Tella to:

* Protect yourself from physical and digital repression while collecting and storing sensitive information.

* Protect the data you collect from censorship, tampering, interception, and destruction.

* Easily produce high quality documentation that can be used for research, advocacy, or transitional justice.

## Get Tella {#get-tella}

1. Tella is available for **Android** and can be downloaded directly [from the Google Play Store ](https://play.google.com/store/apps/details?id=org.hzontal.tella&gl=US) or [from this folder](https://web.tresorit.com/l/JgMjK#FV9IoIZdDxwAUPqtupJzsQ), as an APK, to be installed manually. More guidance on our [FAQs](https://tella.app/faq#is-tella-available-on-android).
2. We also have a version of Tella Android available on the [F-droid store](https://f-droid.org/packages/org.hzontal.tellaFOSS/).
3. Tella is available for **iOS** and can be downloaded [from the App Store](https://apps.apple.com/us/app/tella-document-protect/id1598152580).



# Join us in building Tella!

Whether you're a developer, a designer, a security expert, or just someone who wants to help, there are many ways you can get involved. Here are a few ways you can contribute to Tella:

- **Code contribution:** If you're a developer, you can contribute code to Tella. Check out our GitHub repositories for [Android](https://github.com/Horizontal-org/Tella-Android), [iOS](https://github.com/Horizontal-org/Tella-iOS) and [Tella Web](https://github.com/Horizontal-org/tellaweb) to see what we're working on and how you can help.
- **Bug reports and feature requests:** If you use Tella and find a bug, or if you have an idea for a new feature, you can let us [here](https://tella.app/contact-us).
- **Translations:** Tella is available in many languages, but we're always looking for help translating the app into more languages. If you're fluent in a language other than English, we'd love your help! You can also contribute in translating this documentation. More guidance on how to do it [here](https://tella.app/translating-tella).
- **Translate this documentation:** All Tella translations, including this site, are managed on Weblate, hosted by Localization Lab. To contribute, [create an account](https://localizationlab.weblate.cloud/accounts/register/) on Localization Lab's Weblate and join the [Tella project](https://localizationlab.weblate.cloud/projects/tella-new/). The translated files live under `i18n/` and come from Weblate through pull requests, so they should not be edited by hand in this repository.

## This repository {#this-repository}

### Installation {#installation}

```
$ yarn
```

### Local Development {#local-development}

```
$ PRODUCTION_URL='http://localhost' yarn start --locale en
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build {#build}

```
$ PRODUCTION_URL='http://localhost' yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

`PRODUCTION_URL` is required: it sets the site `url` (and the `og:url` meta tag), and the build fails config validation if it is empty. Use the real domain when producing a deployable build (`PRODUCTION_URL='https://tella.app/'`). The deploy workflows in `.github/workflows/` set it themselves, so this only matters when building by hand.

### Translation files {#translation-files}

```
$ NODE_ENV=production PRODUCTION_URL='http://localhost' yarn write-translations --locale <locale>
```

This regenerates the JSON translation files under `i18n/<locale>/`. `NODE_ENV=production` matters: some strings (for example the PWA reload popup) only exist in production builds and are skipped otherwise.
