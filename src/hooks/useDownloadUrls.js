import { useState, useEffect } from 'react';

const UPDATES_API = 'https://qcut-updates-production.up.railway.app/updates';
const DOWNLOAD_BASE = 'https://qcut-updates-production.up.railway.app/download';

const PRODUCT_MAP = {
  'qcut-dj':      'qcut-dj',
  'qcut-creator': 'qcut-creator',
  'qcut-studio':  'qcut-studio',
};

// Build download URLs using the /download/{product}/{version}/{platform} endpoint
function buildUrls(product, version) {
  return {
    macSilicon: `${DOWNLOAD_BASE}/${product}/${version}/macos-arm64`,
    macIntel:   `${DOWNLOAD_BASE}/${product}/${version}/macos-x64`,
    windows:    `${DOWNLOAD_BASE}/${product}/${version}/windows`,
  };
}

export function useDownloadUrls(product) {
  const [state, setState] = useState({
    latest: null,
    latestVersion: null,
    olderVersions: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(UPDATES_API)
      .then(res => res.json())
      .then(data => {
        const productData = data[PRODUCT_MAP[product]];
        if (!productData) {
          setState(s => ({ ...s, loading: false, error: 'Product not found' }));
          return;
        }

        const latestVersion = productData.latest_version;
        const versions = productData.versions;

        // Build latest version download URLs
        const latest = latestVersion && versions[latestVersion]
          ? buildUrls(PRODUCT_MAP[product], latestVersion)
          : null;

        // Build older versions download URLs sorted descending
        const olderVersions = Object.keys(versions)
          .filter(v => v !== latestVersion)
          .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
          .map(version => ({
            version,
            urls: buildUrls(PRODUCT_MAP[product], version),
          }));

        setState({
          latest,
          latestVersion,
          olderVersions,
          loading: false,
          error: null,
        });
      })
      .catch(err => {
        setState(s => ({ ...s, loading: false, error: err.message }));
      });
  }, [product]);

  return state;
}