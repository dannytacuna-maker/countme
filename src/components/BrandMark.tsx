import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  height?: number;
  tone?: "onDark" | "onLight";
};

const WORDMARK_W = 380;
const WORDMARK_H = 56;

/** Official Countme wordmark (COUNT charcoal/white + ME green). */
export function BrandMark({
  className = "",
  priority = false,
  height = 48,
  tone = "onDark",
}: Props) {
  const ratio = WORDMARK_W / WORDMARK_H;
  const src =
    tone === "onLight" ? "/logo-countme-on-light.png" : "/logo-countme.png";
  return (
    <Image
      src={src}
      alt="Countme"
      width={WORDMARK_W}
      height={WORDMARK_H}
      priority={priority}
      quality={100}
      sizes={`${Math.round(height * ratio * 2)}px`}
      className={`block h-auto w-auto object-contain object-left ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}
