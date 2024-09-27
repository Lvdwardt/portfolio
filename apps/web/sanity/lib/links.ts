export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "home":
    case "skills":
    case "currentLocation":
      return "/";
    case "experiences":
      return "/about";
    case "page":
    case "about":
      return slug ? `/${slug}` : undefined;
    case "projects":
      return slug ? `/projects2/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
