```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some code that might cause an error if the page is not ready.
    console.log(document.getElementById('some-element')); 
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```