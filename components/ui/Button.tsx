import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, label, href }) => {
  return (
    <Link
      className={`bg-black h-fit min-w-[100px] text-center text-white py-2 md:px-8 flex-1 hover:bg-gray-800 ${className}`}
      href={href}
    >
      {label}
    </Link>
  );
};

export default Button;
