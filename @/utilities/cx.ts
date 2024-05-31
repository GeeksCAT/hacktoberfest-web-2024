const cx = (...classNames: (string | boolean)[]) => classNames.filter(Boolean).join(" ");

export default cx;