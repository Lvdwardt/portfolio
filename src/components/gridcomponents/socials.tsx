import React from "react";
import Link from "next/link";
import FaEnvelope from "public/icons/fa/FaEnvelope.svg";
import FaGithub from "public/icons/fa/FaGithub.svg";
import FaLinkedin from "public/icons/fa/FaLinkedin.svg";
import FaWhatsapp from "public/icons/fa/FaWhatsapp.svg";
import { cn } from "@/utils/utils";

interface SocialProps {
  title: string;
  href: string;
  icon: React.ElementType;
  color: "primary" | "secondary";
  className?: string;
}

type SocialLinkProps = { className?: string };

const Social: React.FC<SocialProps> = ({
  title,
  href,
  icon: Icon,
  color,
  className,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
    className={cn(
      "group relative flex h-full w-full items-center justify-center overflow-hidden rounded-4xl",
      color === "primary" ? "bg-primary" : "bg-secondary",
      className
    )}
  >
    <Icon className="text-[100px] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rounded-[2.5-rem]" />
  </Link>
);

const SocialLink: React.FC<SocialProps & { className?: string }> = ({
  title,
  className,
  ...props
}) => <Social title={title} {...props} className={className} />;

export const Whatsapp: React.FC<SocialLinkProps> = ({ className }) => (
  <SocialLink
    title="Whatsapp"
    href="https://wa.me/31630702130"
    icon={FaWhatsapp}
    color="primary"
    className={className}
  />
);

export const LinkedIn: React.FC<SocialLinkProps> = ({ className }) => (
  <SocialLink
    title="LinkedIn"
    href="https://www.linkedin.com/in/leonvandewardt/"
    icon={FaLinkedin}
    color="secondary"
    className={className}
  />
);

export const Github: React.FC<SocialLinkProps> = ({ className }) => (
  <SocialLink
    title="Github"
    href="https://github.com/Lvdwardt"
    icon={FaGithub}
    color="primary"
    className={className}
  />
);

export const Mail: React.FC<SocialLinkProps> = ({ className }) => (
  <SocialLink
    title="Mail"
    href="mailto:contact@leonvandewardt.nl"
    icon={FaEnvelope}
    color="secondary"
    className={className}
  />
);
