export const SITE_URL = import.meta.env.AZURE_URL
  ? `https://${import.meta.env.AZURE_URL}`
  : "http://localhost:4321";
