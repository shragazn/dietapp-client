import { cn } from "@/lib/utils";
import { BaseHTMLAttributes, HTMLProps, forwardRef } from "react";

interface TypographyProps extends HTMLProps<HTMLHeadingElement> {
  type: keyof typeof Types;
  className?: string;
}

const TypographyH1 = forwardRef<
  HTMLHeadingElement,
  BaseHTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </h1>
));

const TypographyH2 = forwardRef<
  HTMLHeadingElement,
  BaseHTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h2
    className={cn(
      "scroll-m-20 text-3xl font-semibold tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </h2>
));

const TypographyH3 = forwardRef<
  HTMLHeadingElement,
  BaseHTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </h3>
));

const TypographyH4 = forwardRef<
  HTMLHeadingElement,
  BaseHTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <h4
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </h4>
));

const TypographyP = forwardRef<
  HTMLParagraphElement,
  BaseHTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <p
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

const TypographyMuted = forwardRef<
  HTMLParagraphElement,
  BaseHTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

const TypographySmall = forwardRef<
  HTMLParagraphElement,
  BaseHTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => (
  <small
    className={cn("text-sm font-medium leading-none", className)}
    ref={ref}
    {...props}
  >
    {children}
  </small>
));

const Types = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  small: TypographySmall,
  muted: TypographyMuted,
};

export const Typography = forwardRef<
  HTMLParagraphElement,
  TypographyProps & { children: React.ReactNode }
>(({ type, children, ...props }, ref) => {
  const Component = Types[type];
  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  );
});
