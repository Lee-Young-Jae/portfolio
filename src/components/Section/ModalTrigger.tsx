import { colors } from "../../constants";
import useModal from "../../hooks/useModal";
import Modal from "../common/Modal";
import styled from "styled-components";

interface ModalTriggerProps {
  title: string;
  children: React.ReactNode;
}

const ModalTrigger = ({ title, children }: ModalTriggerProps) => {
  const { openModal, opened, closeModal, isAnimating } = useModal();

  return (
    <div>
      <Styled.ModalTrigger onClick={openModal}>자세히 보기</Styled.ModalTrigger>
      <Modal opened={opened} hide={closeModal} isAnimating={isAnimating}>
        <Modal.Header title={title} hide={closeModal} />
        <Modal.Content>{children}</Modal.Content>
      </Modal>
    </div>
  );
};

const Styled = {
  ModalTrigger: styled.button`
    margin-top: 16px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: initial;
    border: 1px solid ${colors.MINT_700};
    color: ${colors.MINT_700};
    font-size: 18px;
    cursor: pointer;
  `,
};

export default ModalTrigger;
