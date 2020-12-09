import { useState } from 'react';

import UseEffectResize from './UseEffectResize';

function App() {
  const [showResizeEffect, setShowResizeEffect] = useState(true);

  return (
    <div>
      {showResizeEffect && <UseEffectResize />}
      <button onClick={() => { setShowResizeEffect(!showResizeEffect)} }>Toggle</button>
    </div>
  );
}

export default App;
