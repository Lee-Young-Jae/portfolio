import { useEffect, useRef } from "react";
import { isIOSUser } from "../../utils";

const mutationObserverOption: MutationObserverInit = {
  childList: true,
  subtree: false,
};

const ModalRoot = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: MutationObserver;
    if (ref.current) {
      observer = new MutationObserver(() => {
        const size = ref.current?.childNodes.length || 0;
        document.body.style.overflow = size > 0 ? "hidden" : "auto";
        if (!isIOSUser()) {
          document.body.style.paddingRight = size > 0 ? "11px" : "0";
        }
      });
      observer.observe(ref.current, mutationObserverOption);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return <div id="modalRoot" ref={ref} />;
};

export default ModalRoot;
