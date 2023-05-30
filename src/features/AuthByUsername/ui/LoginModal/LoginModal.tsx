import { Suspense } from 'react';
import { clsx } from 'clsx';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';

import classes from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={clsx(classes.loginModal, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
