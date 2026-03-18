export const withBasePath = (path = "") => {
  const basePath = import.meta.env.BASE_URL;

  if (!path) {
    return basePath;
  }

  const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
};