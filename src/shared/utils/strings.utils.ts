import { pipe } from "@/shared/utils/data.utils";

const toLowerCase = (value: string) => value.toLowerCase();

const removeWhitespace = (value: string) => value.replace(/\s/g, "").trim();

const removeSpecialCharacters = (value: string) => value.replace(/[-_.]/g, "");

const normalizeString = pipe(
  toLowerCase,
  removeWhitespace,
  removeSpecialCharacters
);

export { normalizeString };
