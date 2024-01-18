import { Resvg } from "@resvg/resvg-js";
import { type APIRoute } from "astro";
import satori from "satori";

import OpenGraph from "../components/openGraph";
import { SITE } from "../config";
import { getFont } from "../utils/ogFont";

const removeEndingSlash = (str: string) => str.replace(/\/$/, "");

export const GET: APIRoute = async (request) => {
  const params = request.url.searchParams;
  const title = params.get("title") ?? SITE.title;
  const description = params.get("description") ?? SITE.description;
  const pagePath = params.get("pagePath") ?? "";

  // Used for most languages
  const inter = await getFont({
    family: "Inter",
    weights: [400, 700] as const,
  });

  const hostname = request.site?.hostname.replace(/^https?:\/\//, "");

  const svg = await satori(
    OpenGraph({
      title,
      description,
      pageUrl: `${hostname}${removeEndingSlash(pagePath)}`,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: inter[400], weight: 400 },
        { name: "Inter", data: inter[700], weight: 700 },
      ],
      debug: import.meta.env.DEBUG_OG === "true",
    },
  );

  const resvg = new Resvg(svg, {});
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, immutable, no-transform, max-age=31536000",
    },
  });
};
