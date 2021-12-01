// components/ClientOnly.js

import { useEffect, useState } from "react";

export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  console.log('ClientOnly')

  useEffect(() => {
  console.log('useEffect')
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
