import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { colors } from "../../constants";

interface ModalProps {
  opened: boolean;
  hideOnClickOutside?: boolean;
  hide: () => void;
  children: ReactNode;
}

const Modal = ({
  opened,
  hideOnClickOutside = true,
  hide,
  children,
}: ModalProps) => {
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "auto";
  }, [opened]);

  return opened
    ? createPortal(
        <Styled.Modal onClick={hideOnClickOutside ? hide : undefined}>
          <Styled.ModalInner onClick={stopPropagation}>
            {children}
          </Styled.ModalInner>
        </Styled.Modal>,
        document.querySelector("#modalRoot")!
      )
    : null;
};

interface ModalHeaderProps {
  children: ReactNode;
  title?: string | ReactNode;
  hide?: () => void;
}

const ModalHeader = ({ children, title, hide }: ModalHeaderProps) => {
  return (
    <Styled.ModalHeader>
      <Styled.ModalHideButton onClick={hide} aria-label="Close Modal" />
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

const Styled = {
  Modal: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,

  ModalHideButton: styled.button`
    position: absolute;
    top: 6px;
    right: 6px;
    /* bottom: 10%; */
    /* right: 50%; */
    /* transform: translateX(50%); */
    width: 15px;
    height: 15px;
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

  ModalInner: styled.div`
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
