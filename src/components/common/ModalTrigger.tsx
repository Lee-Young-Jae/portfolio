import { colors } from "../../constants";
import useModal from "../../hooks/useModal";
import Modal from "../common/Modal";
import styled from "styled-components";

interface ModalTriggerProps {
  title?: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
}

const ModalTrigger = ({ title, children, trigger }: ModalTriggerProps) => {
  const { openModal, opened, closeModal, isAnimating } = useModal();

  return (
    <div>
      {trigger ? (
        <div onClick={openModal}>{trigger}</div>
      ) : (
        <Styled.ModalTrigger onClick={openModal}>
          자세히 보기
        </Styled.ModalTrigger>
      )}
      <Modal opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title={title} hide={closeModal} />
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    </div>
  );
};

const Styled = {
  ModalTrigger: styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    background-color: initial;
    border: 1px solid ${colors.MINT_700};
    color: ${colors.MINT_700};
    font-size: 16px;
    cursor: pointer;
  `,
};

export default ModalTrigger;
