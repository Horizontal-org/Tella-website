import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

import googlePlayBadge from '@site/static/img/google-play-badge.png';
import fdroidBadge from '@site/static/img/fdroid-badge.png';
import whyTellaImg from '@site/static/img/why-tella.png';
import vaultImg from '@site/static/img/vault.png';
import dataImg from '@site/static/img/data.png';
import openSourceImg from '@site/static/img/open-source.png';

export default function Home() {
  // .svg assets are transformed into React components on import in Docusaurus,
  // so we use useBaseUrl() here to get plain URL strings instead (needed for
  // plain <img src> / ThemedImage sources).
  const appStoreBadge = useBaseUrl('/img/app-store-badge.svg');
  const homeBlack = useBaseUrl('/img/home-black.svg');
  const homeWhite = useBaseUrl('/img/home-white.svg');

  return (
    <Layout>
      <main className="container container--fluid margin-vert--lg">
        <div className="row page-row-centered">
          <div className="col col--8">
            <article>
              <div id="intro">
                <div className="intro-column" id="intro-column1">
                  <h1>Tella</h1>
                  <h2>
                    <Translate id="homepage.tagline">
                      Document &amp; protect
                    </Translate>
                  </h2>
                  <p>
                    <Translate id="homepage.intro">
                      In challenging environments, with limited or no internet connectivity or in the face of repression, Tella makes it easier and safer to collect, protect and hide sensitive data.
                    </Translate>
                  </p>
                  <div className="download">
                    <a
                      href="https://play.google.com/store/apps/details?id=org.hzontal.tella"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        className="badge"
                        src={googlePlayBadge}
                        alt={translate({
                          id: 'homepage.googlePlayAlt',
                          message: 'Get Tella on Google Play',
                        })}
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/tella-document-protect/id1598152580"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        className="badge"
                        src={appStoreBadge}
                        id="apple-store-badge"
                        alt={translate({
                          id: 'homepage.appStoreAlt',
                          message: 'Get Tella on App Store',
                        })}
                      />
                    </a>
                    <a href="https://f-droid.org/packages/org.hzontal.tellaFOSS">
                      <img
                        className="badge"
                        src={fdroidBadge}
                        alt={translate({
                          id: 'homepage.fdroidAlt',
                          message: 'Get Tella on F-Droid',
                        })}
                      />
                    </a>
                  </div>
                </div>
                <div className="intro-column" id="intro-column2">
                  <ThemedImage
                    alt={translate({
                      id: 'homepage.screenshotAlt',
                      message: 'Screenshot of the Tella app on Android. Showing Connections to Tella Web Uwazi and the folder structure showing that within Tella users can record and save Images, Videos and Audios securely and encripted.',
                    })}
                    className="screen"
                    sources={{
                      light: homeBlack,
                      dark: homeWhite,
                    }}
                  />
                </div>
              </div>

              <hr />

              <div className="section">
                <h2>
                  <Translate id="homepage.whyTella.title">
                    Why Tella?
                  </Translate>
                </h2>
                <div className="columns">
                  <div className="column" id="section-column1">
                    <img
                      className="home-illustrations"
                      src={whyTellaImg}
                      alt={translate({
                        id: 'homepage.whyTella.imageAlt',
                        message: 'Why Tella illustration',
                      })}
                    />
                  </div>
                  <div className="column" id="section-column2">
                    <p>
                      <Translate id="homepage.whyTella.intro">
                        If you are an activist, journalist, human rights defender, or anyone who documents injustice, you can use Tella to:
                      </Translate>
                    </p>
                    <ul>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.whyTella.item1.emphasis">
                            Protect yourself
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.whyTella.item1.rest">
                          from physical and digital repression while collecting and storing sensitive information.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.whyTella.item2.emphasis">
                            Protect the data you collect
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.whyTella.item2.rest">
                          from censorship, tampering, interception, and destruction.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.whyTella.item3.emphasis">
                            Easily produce high quality documentation
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.whyTella.item3.rest">
                          that can be used for research, advocacy, or transitional justice.
                        </Translate>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>
                  <Translate
                    id="homepage.protectData.title"
                    description="The leading '1.' is part of the translatable text.">
                    1. Protect your data
                  </Translate>
                </h3>
                <div className="columns">
                  <div className="column" id="section-column1">
                    <ul>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.protectData.item1.emphasis">
                            Encrypt your files:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.protectData.item1.rest">
                          Tella automatically encrypts your photos, videos, and audio recordings as soon as they are captured.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.protectData.item2.emphasis">
                            Hide your files in the device:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.protectData.item2.rest">
                          your files are inaccessible from the phone's regular gallery or file explorer. You can only access them in the app.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.protectData.item3.emphasis">
                            Lock your files:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.protectData.item3.rest">
                          set a PIN or password to protect your files. Entering the correct lock is the only way to decrypt the files stored in Tella.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.protectData.item4.emphasis">
                            Mask the app:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.protectData.item4.rest">
                          change the look of Tella to hide it from people searching your phone.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate
                            id="homepage.protectData.item5.emphasis"
                            description="Newest bullet, not yet translated in most locales.">
                            Share your files:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.protectData.item5.rest">
                          choose one of the secure methods to share your files with other Tella vault or to a server.
                        </Translate>
                      </li>
                    </ul>
                  </div>
                  <div className="column" id="section-column2">
                    <img
                      className="home-illustrations"
                      src={vaultImg}
                      alt={translate({
                        id: 'homepage.protectData.imageAlt',
                        message: 'Vault illustration',
                      })}
                    />
                  </div>
                </div>
                <Link
                  to="/features"
                  className="clean-btn center button button--primary">
                  <Translate id="homepage.protectData.cta">
                    Learn about Tella features
                  </Translate>
                </Link>
              </div>

              <div className="section">
                <h3>
                  <Translate
                    id="homepage.collectEvidence.title"
                    description="The leading '2.' is part of the translatable text.">
                    2. Collect evidence of human rights violations
                  </Translate>
                </h3>
                <div className="columns">
                  <div className="column" id="section-column1">
                    <img
                      className="home-illustrations"
                      src={dataImg}
                      alt={translate({
                        id: 'homepage.collectEvidence.imageAlt',
                        message: 'Notepad illustration',
                      })}
                    />
                  </div>
                  <div className="column" id="section-column2">
                    <ul>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.collectEvidence.item1.emphasis">
                            Camera and recorder inside Tella:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.collectEvidence.item1.rest">
                          take photos, record videos and audio directly in Tella so that your files are immediately encrypted and hidden in the app.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.collectEvidence.item2a.emphasis">
                            Tella integrates
                          </Translate>
                        </span>{' '}
                        <Translate
                          id="homepage.collectEvidence.item2a.with"
                          description="Platform names below (Uwazi, Open Data Kit, Tella Web, Google Drive, Dropbox, Nextcloud) are proper nouns and are not translated.">
                          with
                        </Translate>{' '}
                        <Link to="/uwazi">Uwazi</Link>,{' '}
                        <Link to="/odk">Open Data Kit</Link>,{' '}
                        <Link to="/tella-web">Tella Web</Link>,{' '}
                        <Link to="/g-drive">Google Drive</Link>,{' '}
                        <Link to="/dropbox">Dropbox</Link>{' '}
                        <Translate id="homepage.collectEvidence.item2a.and">
                          and
                        </Translate>{' '}
                        <Link to="/nextcloud">Nextcloud</Link>.{' '}
                        <Link to="/connections">
                          <Translate id="homepage.collectEvidence.item2b.linkText">
                            Pick the platform
                          </Translate>
                        </Link>{' '}
                        <Translate id="homepage.collectEvidence.item2b.after">
                          that best suits your needs and share data directly from Tella.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.collectEvidence.item3a.emphasis">
                            Offline-first:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.collectEvidence.item3a.rest">
                          in areas with limited or no internet connection, you can save your data and submit it when you reach a reliable internet connection.
                        </Translate>{' '}
                        <Translate id="homepage.collectEvidence.item3b.before">
                          Tella also offers a
                        </Translate>{' '}
                        <Link to="/nearby-sharing">
                          <Translate id="homepage.collectEvidence.item3b.linkText">
                            fully offline feature to transfer files to nearby devices
                          </Translate>
                        </Link>{' '}
                        <Translate id="homepage.collectEvidence.item3b.after">
                          using Tella.
                        </Translate>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="/user-stories"
                  className="clean-btn center button button--primary">
                  <Translate id="homepage.collectEvidence.cta">
                    Read how organizations are using Tella
                  </Translate>
                </Link>
              </div>

              <div className="section">
                <h3>
                  <Translate
                    id="homepage.openSource.title"
                    description="The leading '3.' is part of the translatable text.">
                    3. Tella is free, multilingual, and open-source
                  </Translate>
                </h3>
                <div className="columns">
                  <div className="column" id="section-column1">
                    <ul>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.openSource.item1.emphasis">
                            Free forever:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.openSource.item1.rest">
                          Tella is designed for those whose safety is at risk. It is free to download and use, and will remain free forever.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.openSource.item2.emphasis">
                            Choose your language:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.openSource.item2.before">
                          Tella is currently
                        </Translate>{' '}
                        <Link to="/faq#what-languages-is-tella-available-in">
                          <Translate
                            id="homepage.openSource.item2.linkText"
                            description="Refers to language availability, not stock/inventory availability.">
                            available
                          </Translate>
                        </Link>{' '}
                        <Translate id="homepage.openSource.item2.after">
                          in 25 languages.
                        </Translate>
                      </li>
                      <li>
                        <span className="emphasis">
                          <Translate id="homepage.openSource.item3a.emphasis">
                            Trust the code:
                          </Translate>
                        </span>{' '}
                        <Translate id="homepage.openSource.item3a.before">
                          The code for Tella is open-source and
                        </Translate>{' '}
                        <Link to="/open-source">
                          <Translate id="homepage.openSource.item3a.linkText">
                            publicly available
                          </Translate>
                        </Link>{' '}
                        <Translate id="homepage.openSource.item3a.after">
                          so that researchers, security analysts, and developers can freely audit and reuse it.
                        </Translate>{' '}
                        <Translate
                          id="homepage.openSource.item3b.before"
                          description="Newest content, not yet translated in most locales.">
                          We publish the
                        </Translate>{' '}
                        <Link to="/security-and-privacy#security-audits">
                          <Translate id="homepage.openSource.item3b.linkText">
                            security audits
                          </Translate>
                        </Link>{' '}
                        <Translate id="homepage.openSource.item3b.after">
                          that independent firms have performed on Tella.
                        </Translate>
                      </li>
                    </ul>
                  </div>
                  <div className="column" id="section-column2">
                    <img
                      className="home-illustrations"
                      src={openSourceImg}
                      alt={translate({
                        id: 'homepage.openSource.imageAlt',
                        message: 'Open source illustration',
                      })}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}
