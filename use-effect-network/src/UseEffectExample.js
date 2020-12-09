import { useEffect, useState } from 'react';

export default function UseEffectExample({ resourceType, counter }) {
  console.log("render");
  const [ response, setResponse ] = useState({});

  useEffect(() => {
    console.log("useEffect", resourceType);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setResponse(json));
  }, [resourceType]);

  return (
    <div>
      UseEffectExample ({resourceType})

      <div>
        {JSON.stringify(response)}
      </div>
      Counter: {counter}
    </div>
  );
}
