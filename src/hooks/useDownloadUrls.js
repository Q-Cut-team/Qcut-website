import { useState, useEffect } from 'react';

const UPDATES_API = 'https://qcut-updates-production.up.railway.app/updates';

const PRODUCT_MAP = {
  'qcut-dj':      'qcut-dj',
  'qcut-creator': 'qcut-creator',
  'qcut-studio':  'qcut-studio',
};

function extractUrls(versionData) {
  return {
    macSilicon: versionData['macos-arm64']?.download_url || null,
    macIntel:   versionData['macos-x64']?.download_url || null,
    windows:    versionData['windows']?.download_url || null,
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
        const latest = versions[latestVersion]
          ? extractUrls(versions[latestVersion])
          : null;

        const olderVersions = Object.entries(versions)
          .filter(([v]) => v !== latestVersion)
          .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true }))
          .map(([version, versionData]) => ({
            version,
            urls: extractUrls(versionData),
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