import {useEffect, useState} from "react";

// Hook
const useRefResize = (ref) => {
  function getSize() {
    if (ref.current){

      return {
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      };
    }
      
    return {
      width: 0,
      height: 0,
    };
  }
  const [sizeDiv, setSizeDiv] = useState(getSize());
  useEffect(() => {
    setSizeDiv(getSize());
  }, []);

  return sizeDiv;
};

export default useRefResize;
