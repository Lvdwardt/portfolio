export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  console.log("resolveHref", documentType, slug);
  switch (documentType) {
    case "home":
      return "/";
    case "page":
      return slug ? `/${slug}` : undefined;
    case "projects":
      return slug ? `/projects/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
