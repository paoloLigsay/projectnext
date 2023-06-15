import { ChangeEvent } from "react";

export interface WidthVariants {
  full: string;
  half: string;
  auto: string;
}

export interface FilterVairant {
  search: string;
  dropdown: string;
}

export interface FilterProps {
  id?: string;
  variant: keyof FilterVairant; //TODO: Dropdown filter.
  width: keyof WidthVariants;
  placheholder: string;
  onFilterChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
