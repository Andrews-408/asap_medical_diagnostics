interface BrandLogoProps {
  variant?: "nav" | "footer";
}

const LOGO_SRC = "/logo.jpeg";

export function BrandLogo({ variant = "nav" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div
      className={
        isFooter ? "inline-flex rounded-md bg-white p-2" : "flex items-center"
      }
    >
      <img
        src={LOGO_SRC}
        alt="Azap Medical Diagnostics"
        className={
          isFooter
            ? "h-20 w-44 object-contain"
            : "h-20 w-75 object-contain sm:w-56"
        }
      />
    </div>
  );
}
