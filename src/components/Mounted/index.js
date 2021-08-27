import { useEffect, useState } from 'react';

export default function Mounted() {
  const [isMounted, setIsMounted] = useState(true);

  if (! isMounted) {
    return null;
  }
  return (
    <div
      className="mounted-indicator"
    />
  );
}
