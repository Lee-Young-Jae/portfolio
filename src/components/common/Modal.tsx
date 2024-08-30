import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { colors } from "../../constants";

interface ModalProps {
  opened: boolean;
  hideOnClickOutside?: boolean;
  hide: () => void;
  children: ReactNode;
  isAnimating?: boolean;
}

const Modal = ({
  opened,
  hideOnClickOutside = true,
  hide,
  children,
  isAnimating = false,
}: ModalProps) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "auto";
  }, [opened]);

  return opened
    ? createPortal(
        <Styled.Modal
          onClick={hideOnClickOutside ? hide : undefined}
          $isAnimating={isAnimating}
          $opened={opened}
        >
          <Styled.ModalInner
            onClick={stopPropagation}
            $isAnimating={isAnimating}
            $opened={opened}
          >
            <Styled.ModalHideButton onClick={hide} aria-label="모달 닫기" />
            {children}
          </Styled.ModalInner>
        </Styled.Modal>,
        document.querySelector("#modalRoot")!
      )
    : null;
};

interface ModalHeaderProps {
  children?: ReactNode;
  title?: string | ReactNode;
  hide?: () => void;
}

const ModalHeader = ({ children, title }: ModalHeaderProps) => {
  return (
    <Styled.ModalHeader>
      <div>{title}</div>
      {children}
    </Styled.ModalHeader>
  );
};

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return <div>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;

const ModalAnimation = {
  fadeInAndSlideUp: keyframes`
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `,

  fadeOutAndSlideDown: keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  `,

  backdropFadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,

  backdropFadeOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
};

const Styled = {
  Modal: styled.div<{ $isAnimating?: boolean; $opened?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${({ $isAnimating, $opened }) => {
      if ($isAnimating) {
        return $opened ? ModalAnimation.backdropFadeOut : "none";
      }
      return ModalAnimation.backdropFadeIn;
    }};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    z-index: 1000;
  `,

  modalFadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,

  ModalInner: styled.div<{ $isAnimating?: boolean; $opened?: boolean }>`
    position: relative;
    -webket-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(30, 41, 73, 0.5);
    border-radius: 10px;
    padding: 26px 40px;
    margin: 0 20px;
    border: 0.6px solid rgba(12, 120, 120, 0.7);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
    color: ${colors.WHITE};
    max-width: 972px;
    max-height: 80vh;
    overflow-y: scroll;
    scrollbar-width: none;
    animation: ${({ $isAnimating, $opened }) => {
      if ($isAnimating) {
        return $opened ? ModalAnimation.fadeOutAndSlideDown : "none";
      }
      return ModalAnimation.fadeInAndSlideUp;
    }};
    animation-duration: 0.3s;
  `,

  ModalHideButton: styled.button`
    position: fixed;
    top: 8px;
    right: 8px;
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: none;

    cursor: pointer;
    z-index: 1001;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;

      background-color: ${colors.MINT_300};
      top: 50%;
      left: 0;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  `,

  ModalHeader: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  `,
};

export default Modal;
