import { useState } from 'react';
import UseEffectExample from './UseEffectExample';

function App() {
  const [ counter, setCounter ] = useState(0);
  const [ resourceType, setResourceType ] = useState('posts');

  return (
    <div>
      <button onClick={() => { setCounter(counter + 1) }}>
        inc
      </button>

      <div>
        <button onClick={() => { setResourceType('posts')}}>Posts</button>
        <button onClick={() => { setResourceType('users')}}>Users</button>
        <button onClick={() => { setResourceType('comments')}}>Comments</button>
      </div>

      <UseEffectExample resourceType={resourceType} counter={counter}  />
    </div>
  );
}

export default App;
