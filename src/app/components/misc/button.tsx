"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center cursor-pointer justify-center rounded-md px-6 py-3 text-base font-semibold ";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 ",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100 ",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;

// export default function MyPage() {
//   const handleButtonClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <div>
//       {/* Primary Button (Dark) */}
//       <Button onClick={handleButtonClick}>
//         Read More
//       </Button>

//       {/* Secondary Button (Light) */}
//       <Button variant="secondary" onClick={handleButtonClick} className="mt-4">
//         See More
//       </Button>

//       {/* Primary Button with different text */}
//       <Button onClick={handleButtonClick} className="mt-4">
//         Save 29%
//       </Button>

//        {/* Secondary Button with different text and custom margin */}
//       <Button variant="secondary" onClick={handleButtonClick} className="mt-4">
//         Save 29%
//       </Button>

//       {/* Button with custom width and disabled state */}
//        <Button onClick={() => console.log('Disabled button clicked')} className="mt-4 w-40" disabled>
//         Submit
//       </Button>
//     </div>
//   );
// }
