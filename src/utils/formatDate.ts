export const formatDate = (value: string, month: "short" | "long" = "long") =>
  new Date(value).toLocaleDateString("en-US", { year: "numeric", month, day: "numeric" });
