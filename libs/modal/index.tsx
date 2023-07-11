import { useTranslate } from "@/hooks";
import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
export interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: ReactNode;
  title: ReactNode;
  okText?: string;
  cancelText?: string;
  footer?: Array<ReactNode> | null;
  className?: string;
}

export default function Modal({
  closeModal,
  isOpen,
  title,
  okText,
  cancelText,
  footer,
  children,
  className,
}: ModalProps) {
  const { messages } = useTranslate();
  let footerElement: Array<ReactNode>;
  if (footer === undefined) {
    footerElement = [
      <Button key={"cancel"} onClick={closeModal}>
        {okText || messages("common.cancel")}
      </Button>,
      <Button key={"ok"} primary onClick={closeModal}>
        {cancelText || messages("common.submit")}
      </Button>,
    ];
  } else if (footer === null) {
    footerElement = [];
  } else {
    footerElement = footer;
  }
  return (
    <Dialog open={isOpen} className="relative z-50" onClose={closeModal}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel
            className={twMerge(
              "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all",
              className
            )}
          >
            <div className="flex items-center gap-3">
              <Dialog.Title
                as="h3"
                className="grow text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </Dialog.Title>
              <button
                onClick={closeModal}
                className="flex-none rounded-full p-2 text-lg hover:bg-zinc-100"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="mt-2">{children}</div>

            <div className="mt-4 flex justify-end gap-3">
              {footerElement.map((item) => item)}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
