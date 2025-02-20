```javascript
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyComponent() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsReady(true);
    };
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  const handleClick = () => {
    router.push('/another-page');
  };

  useEffect(() => {
    if (isReady) {
      // Access DOM elements after navigation is complete
      console.log(document.getElementById('some-element'));
    }
  }, [isReady]);

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```