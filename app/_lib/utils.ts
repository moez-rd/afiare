import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tw = (strings: TemplateStringsArray, ...values: any[]) =>
  String.raw({ raw: strings }, ...values);
