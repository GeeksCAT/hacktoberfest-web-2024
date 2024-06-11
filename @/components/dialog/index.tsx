import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Dialog(
  props: React.PropsWithChildren<{
    title?: string;
    isDisabled?: boolean;
    onDismiss: () => void;
  }>
) {
  const { onDismiss, isDisabled } = props;

  function handleDismissClick() {
    onDismiss();
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onDismiss();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onDismiss]);

  return (
    <>
      <div className="fixed inset-0 z-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 bg-zinc-700"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-40 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="z-50 w-full overflow-hidden rounded bg-white text-zinc-900 shadow-md dark:bg-zinc-800 dark:text-zinc-200 sm:max-w-lg">
          <div className="flex items-center border-b px-5 py-4 dark:border-zinc-700">
            <h3
              className="flex-1 text-lg font-bold leading-6 tracking-tight"
              id="modal-title"
            >
              {props.title}
            </h3>
            {!isDisabled && (
              <button
                onClick={handleDismissClick}
                className="text-zinc-500 outline-purple-500 hover:text-purple-500"
              >
                close
              </button>
            )}
          </div>

          <div>{props.children}</div>
        </div>
      </motion.div>
    </>
  );
}
