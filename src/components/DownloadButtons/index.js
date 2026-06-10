import React from 'react';
import { DESKTOP_RELEASE } from '@site/src/config/desktop-release';

const DownloadButtons = () => (
  <div className="download-buttons">
    <a className="button button--primary" href={DESKTOP_RELEASE.windows}>Windows</a>
    <a className="button button--primary" href={DESKTOP_RELEASE.macos}>macOS</a>
    <a className="button button--primary" href={DESKTOP_RELEASE.linux}>Linux</a>
  </div>
);

export default DownloadButtons;
