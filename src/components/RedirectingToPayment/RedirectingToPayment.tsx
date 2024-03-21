/* eslint-disable react/no-unescaped-entities */
"use client";

// import { cn } from "@/lib/utils";
import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../AppContextWrapper/AppContextWrapper";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
// import { DialogClose } from "@radix-ui/react-dialog";
import { useMediaQuery } from "usehooks-ts";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "../ui/drawer";

type Props = {
  onRedirect: () => void;
};

const RedirectingToPayment = ({ onRedirect }: Props) => {
  const timerRef = useRef<number | null>(null);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (state.paymentLink) {
      timerRef.current = window.setTimeout(() => {
        onRedirect();
        window.location.href = state.paymentLink;
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.paymentLink]);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const cancelRedirect = (open: boolean) => {
    if (!open && timerRef.current) {
      window.clearTimeout(timerRef.current);
      dispatch({ type: "change_payment_link", payload: "" });
    }
  };

  const activateRedirect = () => {
    onRedirect();
    window.location.href = state.paymentLink;
  };

  if (isDesktop) {
    return (
      <Dialog open={state.paymentLink !== ""} onOpenChange={cancelRedirect}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Перенаправляем на страницу оплаты</DialogTitle>
            <DialogDescription>
              Инструкция по активации будет отправлена на почту указанную при оплате <br />
              <br /> Нажмите "Далее", если не происходит переход на страницу оплаты{" "}
            </DialogDescription>
          </DialogHeader>

          <Button type="button" className="w-full" onClick={activateRedirect}>
            ДАЛЕЕ
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={state.paymentLink !== ""} onOpenChange={cancelRedirect}>
      <DrawerContent className="focus:outline-none">
        <div className="mx-auto w-full max-w-sm focus:border-2 border-blue-500">
          <DrawerHeader className="text-left !pointer-events-none">
            <DrawerTitle>Перенаправляем на страницу оплаты</DrawerTitle>
            <DrawerDescription>
              Инструкция по активации будет отправлена на почту указанную при оплате <br />
              <br /> Нажмите "Далее", если не происходит переход на страницу оплаты{" "}
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className="pt-2">
            <Button type="button" className="w-full" onClick={activateRedirect}>
              ДАЛЕЕ
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default RedirectingToPayment;
