import { useEffect, useState } from 'react';

export default function Mounted() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setTimeout(
      () => setIsMounted(false),
      2000
    );
  }, []);

  if (! isMounted) {
    return null;
  }
  return (
    <div
      className="mounted-indicator"
    />
  );
}
