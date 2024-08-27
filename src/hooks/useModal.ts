import { useCallback, useState } from "react";

const useModal = () => {
  const [opened, toggleModal] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  const openModal = useCallback(() => {
    toggleModal(true);
  }, []);

  const closeModal = useCallback(() => {
    if (isAnimating) return;
    setAnimating(true);
    setTimeout(() => {
      toggleModal(false);
      setAnimating(false);
    }, 300);
  }, []);

  return { opened, openModal, closeModal, isAnimating };
};

export default useModal;
