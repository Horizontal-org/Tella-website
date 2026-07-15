import React from 'react';
import Translate from '@docusaurus/Translate';
import { DESKTOP_RELEASE } from '@site/src/config/desktop-release';

const DownloadButtons = () => (
  <div className="download-buttons">
    <a className="button button--primary" href={DESKTOP_RELEASE.windows}>
      <Translate id="downloadButtons.windows">Windows</Translate>
    </a>
    <a className="button button--primary" href={DESKTOP_RELEASE.macos}>
      <Translate id="downloadButtons.macos">macOS</Translate>
    </a>
    <a className="button button--primary" href={DESKTOP_RELEASE.linux}>
      <Translate id="downloadButtons.linux">Linux</Translate>
    </a>
  </div>
);

export default DownloadButtons;
