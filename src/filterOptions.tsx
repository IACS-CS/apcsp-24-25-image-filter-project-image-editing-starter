import type {
  FilterOptionBoolean,
  FilterOptionColor,
  FilterOptionNumber,
  FilterOptionInteger,
  FilterOptionPercentage,
} from "./types";

export const percentageOption = (
  name: string,
  defaultVal: number
): FilterOptionPercentage => ({
  name,
  default: defaultVal,
  type: "percentage",
});
export const booleanOption = (
  name: string,
  defaultVal: boolean
): FilterOptionBoolean => ({
  name,
  default: defaultVal,
  type: "boolean",
});

export const numberOption = (
  name: string,
  defaultVal: number,
  min?: number,
  max?: number
): FilterOptionNumber => ({
  name,
  default: defaultVal,
  type: "number",
  min,
  max,
});

export const colorOption = (
  name: string,
  defaultVal: string
): FilterOptionColor => ({
  name,
  default: defaultVal,
  type: "color",
});

export const integerOption = (
  name: string,
  defaultVal: number,
  min?: number,
  max?: number
): FilterOptionInteger => ({
  name,
  default: defaultVal,
  type: "integer",
  min,
  max,
});
