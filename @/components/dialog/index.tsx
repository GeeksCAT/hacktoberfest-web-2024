import { motion } from "framer-motion";
import { useEffect } from "react";

const CrossIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

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
        <div className="z-50 w-full relative overflow-hidden rounded bg-white text-zinc-900 shadow-md sm:max-w-lg">
          <div
            aria-hidden="true"
            className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-teal-500 to-white blur-2xl opacity-25"
          />
          <div className="z-10 relative">
            <div className="flex items-center border-b px-5 py-4">
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
                  <CrossIcon />
                </button>
              )}
            </div>

            {props.children}
          </div>
        </div>
      </motion.div>
    </>
  );
}
