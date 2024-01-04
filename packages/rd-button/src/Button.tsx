import { FC } from "react";

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => <button {...props}>This is a Button 123</button>;
