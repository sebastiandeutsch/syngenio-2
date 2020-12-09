import { memo } from 'react';

const UseMemoExample = memo(({ increment }) => {
  console.log("render");

  return (
    <div>
      UseMemoExample

      <button onClick={() => { increment() }}>+</button>
    </div>
  );
});


export default UseMemoExample;
