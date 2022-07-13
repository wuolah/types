export const stringToNumber = (defaultValue: number | null) => (val: unknown) =>
  parseInt(String(val), 10) || defaultValue;

export const stringToBoolean =
  (defaultValue: boolean | null) => (val: unknown) =>
    val != undefined
      ? String(val) === "true" || String(val) === "1"
        ? true
        : String(val) === "false" || String(val) === "0"
        ? false
        : defaultValue
      : defaultValue;

export const stringToLowerCase =
  (defaultValue: string | null) => (val: unknown) =>
    String(val).toLowerCase() || defaultValue;
