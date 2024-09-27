export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "home" || "skills" || "currentLocation":
      return "/";
    case "experiences":
      return "/about";
    case "page" || "about":
      return slug ? `/${slug}` : undefined;
    case "projects":
      return slug ? `/projects2/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
