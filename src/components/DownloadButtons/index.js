import React from 'react';
import Button from '@site/src/components/Button';
import { DESKTOP_RELEASE } from '@site/src/config/desktop-release';

const DownloadButtons = () => (
  <div className="download-buttons">
    <Button label="Windows" link={DESKTOP_RELEASE.windows} />
    <Button label="macOS" link={DESKTOP_RELEASE.macos} />
    <Button label="Linux" link={DESKTOP_RELEASE.linux} />
  </div>
);

export default DownloadButtons;
