import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import contactImageUrl from '@site/static/img/contact.png';

export default function ContactUs() {
  const pageTitle = translate({
    id: 'contactUs.title',
    message: "Let's talk",
  });

  return (
    <Layout title={pageTitle} description={pageTitle}>
      <main className="container container--fluid margin-vert--lg">
        <div className="row page-row-centered">
          <div className="col col--8">
            <article>
              <div className="section" id="get-in-touch">
                <h1>{pageTitle}</h1>
                <div className="columns">
                  <div className="column">
                    <img
                      className="home-illustrations"
                      src={contactImageUrl}
                      alt={translate({
                        id: 'contactUs.imageAlt',
                        message: 'Image with a hand clicking on some',
                      })}
                    />
                  </div>
                  <div className="column">
                    <p>
                      <Translate id="contactUs.intro.line1">
                        Do you have questions about Tella?
                      </Translate>
                      <br />
                      <Translate id="contactUs.intro.line2">
                        Do you need support or training to deploy it in your community?
                      </Translate>
                      <br />
                      <Translate id="contactUs.intro.line3">
                        Do you have ideas to improve the app?
                      </Translate>
                    </p>
                    <h2>
                      <Translate id="contactUs.getInTouch.title">
                        Get in touch
                      </Translate>
                    </h2>
                    <ul>
                      <li>
                        <Translate id="contactUs.getInTouch.email">
                          Write to us to
                        </Translate>{' '}
                        <a href="mailto:contact@tella-app.org">contact@tella-app.org</a>{' '}
                        {translate({
                          id: 'contactUs.getInTouch.email.after',
                          message: '',
                        })}
                      </li>
                      <li>
                        <Translate id="contactUs.getInTouch.call">
                          Schedule a call directly
                        </Translate>{' '}
                        <a href="https://calendly.com/d/grp-5v7-rjf/tella-meeting">
                          <Translate id="contactUs.getInTouch.call.linkText">
                            here
                          </Translate>
                        </a>
                        .
                      </li>
                      <li>
                        <Translate id="contactUs.getInTouch.meeting">
                          Join our next
                        </Translate>{' '}
                        <Link to="/community-meetings">
                          <Translate id="contactUs.getInTouch.meeting.linkText">
                            Community Meeting
                          </Translate>
                        </Link>
                        .
                      </li>
                      <li>
                        <Translate id="contactUs.getInTouch.feedback">
                          Use the anonymous feedback form in the Tella Settings.
                        </Translate>
                      </li>
                    </ul>
                    <p>
                      <Translate id="contactUs.newsletter">
                        Or subscribe to our newsletter:
                      </Translate>{' '}
                      <a href="https://blog.wearehorizontal.org/tag/tella/">
                        <Translate id="contactUs.newsletter.linkText">
                          here
                        </Translate>
                      </a>
                      .
                    </p>
                    <p>
                      <Translate id="contactUs.closing">
                        We are looking forward to hearing from you!
                      </Translate>
                    </p>
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
