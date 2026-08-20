// ============================================================
// Time to Build Funnel Kit - site config
// Students edit these values (or run /brand-setup).
// ============================================================

export const site = {
  name: "Barebones Strength",
  description:
    "Helping people at the gym lose body fat, build muscle, and feel more confident in their clothes.",

  // Your Kit (ConvertKit) form ID. The lead form subscribes people to this form,
  // which triggers whatever sequence/automation you connect to it in Kit.
  // Find it in your form's embed URL: app.kit.com/forms/XXXXXXX/...  -> XXXXXXX is the ID.
  kitFormId: "YOUR_KIT_FORM_ID",

  // Where your offer-page CTAs send people. This is a book-a-call funnel,
  // so every CTA on the offer page points at the Calendly link.
  checkoutUrl: "https://calendly.com/barebonesstrength/discoverycall",

  // Default colour theme for your site: "light" or "dark".
  // (Drop in <ThemeToggle /> if you want visitors to switch.)
  theme: "dark" as "light" | "dark",

  // Quick accent preset (just the brand hue).
  // "custom" = the exact Barebones green/cream set directly in global.css
  // below, so it isn't overridden by one of the built-in quick presets.
  preset: "custom" as "custom" | "teal" | "blue" | "violet" | "orange" | "sage",

  // Full theme - a complete palette (surfaces + text + accent), light & dark.
  // "default" is the baseline; others are defined in global.css and previewed
  // in the Customise Theme panel.
  themePreset: "default" as
    | "default"
    | "sage"
    | "nature"
    | "brutalist"
    | "linen"
    | "amber"
    | "retro"
    | "ocean",
};
