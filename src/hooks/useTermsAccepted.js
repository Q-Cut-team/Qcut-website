import { useState } from 'react';

export function useTermsAccepted() {
  const [accepted, setAccepted] = useState(false);
  return { accepted, setAccepted };
}
