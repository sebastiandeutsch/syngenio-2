import { useEffect, useState } from "react"

export default function UseEffectResize() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      console.log('resize');
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
      <h1>
        UseEffectResize
      </h1>
      <div>
        width: {dimensions.width}
      </div>
      <div>
        height: {dimensions.height}
      </div>
    </div>
  )
}
