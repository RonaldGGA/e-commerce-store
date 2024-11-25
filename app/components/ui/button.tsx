import { cn } from "@/lib/utils";
import { forwardRef } from "react";

//This is like our own components library for button

//THis will be a button with all the properties of a normal button in a html page and will accept all the props of it as well
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
//makes a reference...
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className={cn(
          `
      w-auto
      rounded-full
      bg-black
      border-transparent
      px-5
      py-3
      disabled:cursor-not-allowed
      disabled:opacity-50
      text-white
      font-semibold
      hover:opacity-75
      transition
      `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
