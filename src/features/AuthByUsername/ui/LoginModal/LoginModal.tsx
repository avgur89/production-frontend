import { clsx } from 'clsx';

import { LoginForm } from '../LoginForm/LoginForm';

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
    <LoginForm />
  </Modal>
);
