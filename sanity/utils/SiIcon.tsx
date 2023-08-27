import * as Icon from "react-icons/si";

export default function SiIcon(icon: string, className?: string) {
  const IconComponent = Icon[icon as keyof typeof Icon];
  return <IconComponent className={className} />;
}
