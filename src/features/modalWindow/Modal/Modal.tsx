import React, { useEffect } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { closeModal } from '../modalWindow-slice';
import { useAppDispatch } from '../../../app/hooks';
import styles from './Modal.module.scss';
import { ReactComponent as DefaultCloseIcon } from '../../../img/closeImg/times.svg';
import { selectIsModalVisible } from '../modalWindowSelector';

interface ModalProps {
  children?: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const isVisible = useAppSelector(selectIsModalVisible);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <div
      className={isVisible ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => dispatch(closeModal())}
    >
      <div
        className={isVisible ? `${styles.modal_window} ${styles.active}` : styles.modal_window}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.modal_close} onClick={() => dispatch(closeModal())}>
          <DefaultCloseIcon />
        </span>
        {children}
      </div>
    </div>
  );
};
