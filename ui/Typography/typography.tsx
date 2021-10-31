import cn from "classnames";
import { forwardRef, Fragment } from "react";
import { getTypography } from "utils";
import { TypographyProps, TypographyRef } from "./typography.t";
import Link from "next/link";

const Typography = forwardRef<TypographyRef, TypographyProps>(
  function Typography(
    {
      variant = "span",
      color,
      state,
      element,
      weight,
      className,
      href,
      ...props
    },
    ref,
  ) {
    const ComponentRoot = href ? Link : Fragment;
    const ComponentElementType = href ? "a" : element || variant;
    const typographyClasses = getTypography({
      variant,
      color,
      state,
      weight,
      element: href ? "a" : null,
    });

    return (
      <ComponentRoot {...(href && { href, passHref: true })}>
        <ComponentElementType
          ref={ref}
          className={cn(typographyClasses, className)}
          {...props}
        />
      </ComponentRoot>
    );
  },
);

Typography.displayName = "Typography";
export default Typography;
