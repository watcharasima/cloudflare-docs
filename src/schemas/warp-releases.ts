import { z } from "astro:schema";

export const warpReleasesSchema = z.object({
	version: z.string(),
	date: z.coerce.date(),
	releaseNotes: z.string(),
	packageSize: z.number(),
	packagePath: z.string(),
});
