/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  open: boolean;
  onClose: () => void;
  onCloseModal: () => void;
  title: string;
  desktopChildren: ReactNode;
  mobileChildren: ReactNode;
  closeActionText: string;
};

export const ModalChequeMessage = ({ onClose, onCloseModal, open, title, closeActionText, desktopChildren, mobileChildren }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onCloseChange = (open: boolean) => {
    if (!open) {
      onCloseModal();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onCloseChange}>
      <DialogContent className="top-0 bottom-0 translate-y-0 sm:max-w-screen-lg overflow-y-scroll max-h-screen px-2">
        <DialogHeader className="">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col">{isDesktop ? desktopChildren : mobileChildren}</div>

        <Button type="button" className="w-full" onClick={onClose}>
          {closeActionText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
