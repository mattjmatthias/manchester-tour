import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, label, href, onClick }) => {
  if (href) {
    return (
      <Link
        className={`bg-black h-fit min-w-[100px] text-center text-white py-2 px-6 md:px-8 flex-1 hover:bg-gray-800 ${className}`}
        href={href}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      className={`bg-black h-fit min-w-[100px] text-center text-white py-2 px-6 md:px-8 flex-1 hover:bg-gray-800 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
