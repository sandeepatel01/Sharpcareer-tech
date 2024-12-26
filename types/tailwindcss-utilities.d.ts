declare module "tailwindcss/lib/util/flattenColorPalette" {
  type FlattenColorPalette = {
    [key: string]: string | FlattenColorPalette; // Nested color objects
  };

  const flattenColorPalette: (colors: FlattenColorPalette) => FlattenColorPalette;
  export = flattenColorPalette;
}