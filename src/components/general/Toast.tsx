import { ReactNode } from 'react';
import { Notification } from '@mantine/core';

interface ToastProps {
    title: string;
    message: string;
    onclose: () => void;
    icon: ReactNode;
    color: string;
    loading: boolean;
  }

export default function Toast({ title, message, onclose, icon, color, loading }: ToastProps) {
  return (
    <Notification
      title={title}
      onClose={onclose}
      icon={icon}
      color={color}
      variant="solid"
      loading={loading}
    >
        {message}
    </Notification>
  );
}