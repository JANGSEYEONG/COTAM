'use client';

import { createContext, isValidElement, useContext, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import useIsCSR from '@/hooks/useIsCSR';

import { cn } from '@/lib/utils';

import CloseX from '../../public/assets/icons/CloseX.svg';

interface DrawerContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

interface DrawerProps {
  children: React.ReactNode;
  className?: string;
}

interface DrawerContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DrawerTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface DrawerCloseProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const Drawer = ({ children, className }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn('relative', className)}>{children}</div>
    </DrawerContext.Provider>
  );
};

const DrawerTrigger = ({ children, className }: DrawerTriggerProps) => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error('DrawerTrigger는 Drawer 안에서만 사용해주세요.');
  return (
    <div className={className} onClick={() => context.setIsOpen(true)}>
      {children}
    </div>
  );
};

const DrawerContent = ({ children, className }: DrawerContentProps) => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error('DrawerContent는 Drawer 안에서만 사용해주세요.');
  const { isOpen, setIsOpen } = context;

  // 서버사이드에서는 아무것도 렌더링하지 않음 (document가 존재하지 않기 때문)
  const { isCSR } = useIsCSR();

  // 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isCSR) return null;

  return createPortal(
    <div
      className={cn(
        'fixed inset-y-0 right-0 z-50 h-full w-full',
        'transform transition-transform duration-300',
        isOpen ? 'translate-x-0' : 'translate-x-full',
        className,
      )}>
      <div className="mr-10 mt-4 flex justify-end">
        <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
          <CloseX />
        </button>
      </div>
      {children}
    </div>,
    document?.body,
  );
};

const DrawerClose = ({ children, className }: DrawerCloseProps) => {
  const context = useContext(DrawerContext);
  if (!context) throw new Error('DrawerClose는 Drawer 안에서만 사용해주세요.');

  const { setIsOpen } = context;

  const handleClick = (e: React.MouseEvent) => {
    // 기존 onClick 실행 후

    if (isValidElement(children) && children.props.onClick) {
      children.props.onClick(e);
    }
    // Drawer 닫기
    setIsOpen(false);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

Drawer.Trigger = DrawerTrigger;
Drawer.Content = DrawerContent;
Drawer.Close = DrawerClose;

export default Drawer;
