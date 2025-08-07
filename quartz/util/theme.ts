export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
  textHighlight: string


  accentBorder: string
  quoteBackground: string

  clrred: string
  clrorange: string
  clryellowlight: string
  clryellowdark: string
  clrgreen: string
  clrpurple: string
  clrseagreen: string
  clrcyan: string
  clrfrost: string
  clrblue: string
  clrsalmon: string
  clrredrgb: string
  clrorangergb: string
  clryellowlightrgb: string
  clryellowdarkrgb: string
  clrgreenrgb: string
  clrpurplergb: string
  clrseagreenrgb: string
  clrcyanrgb: string
  clrfrostrgb: string
  clrbluergb: string
  clrsalmonrgb: string

  bb0:string
  bb0rgb:string
  b0: string
  b1: string
  b2: string
  b3: string
  b4: string
  w0: string
  w1: string
  w2: string
  w3: string
  w4: string

  plnhdcl1: string
  plnhdcl2: string
  plnhdcl3: string
  plnhdcl4: string
  plnhdcl5: string
  plnhdcl6: string

  clrtxt: string

  imurl: string

}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

export type FontSpecification =
  | string
  | {
      name: string
      weights?: number[]
      includeItalic?: boolean
    }

export interface Theme {
  typography: {
    title?: FontSpecification
    header: FontSpecification
    body: FontSpecification
    code: FontSpecification
  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function getFontSpecificationName(spec: FontSpecification): string {
  if (typeof spec === "string") {
    return spec
  }

  return spec.name
}

function formatFontSpecification(
  type: "title" | "header" | "body" | "code",
  spec: FontSpecification,
) {
  if (typeof spec === "string") {
    spec = { name: spec }
  }

  const defaultIncludeWeights = type === "header" ? [400, 700] : [400, 600]
  const defaultIncludeItalic = type === "body"
  const weights = spec.weights ?? defaultIncludeWeights
  const italic = spec.includeItalic ?? defaultIncludeItalic

  const features: string[] = []
  if (italic) {
    features.push("ital")
  }

  if (weights.length > 1) {
    const weightSpec = italic
      ? weights
          .flatMap((w) => [`0,${w}`, `1,${w}`])
          .sort()
          .join(";")
      : weights.join(";")

    features.push(`wght@${weightSpec}`)
  }

  if (features.length > 0) {
    return `${spec.name}:${features.join(",")}`
  }

  return spec.name
}

export function googleFontHref(theme: Theme) {
  const { header, body, code } = theme.typography
  const headerFont = formatFontSpecification("header", header)
  const bodyFont = formatFontSpecification("body", body)
  const codeFont = formatFontSpecification("code", code)

  return `https://fonts.googleapis.com/css2?family=${headerFont}&family=${bodyFont}&family=${codeFont}&display=swap`
}

export function googleFontSubsetHref(theme: Theme, text: string) {
  const title = theme.typography.title || theme.typography.header
  const titleFont = formatFontSpecification("title", title)

  return `https://fonts.googleapis.com/css2?family=${titleFont}&text=${encodeURIComponent(text)}&display=swap`
}

export interface GoogleFontFile {
  url: string
  filename: string
  extension: string
}

const fontMimeMap: Record<string, string> = {
  truetype: "ttf",
  woff: "woff",
  woff2: "woff2",
  opentype: "otf",
}

export async function processGoogleFonts(
  stylesheet: string,
  baseUrl: string,
): Promise<{
  processedStylesheet: string
  fontFiles: GoogleFontFile[]
}> {
  const fontSourceRegex =
    /url\((https:\/\/fonts.gstatic.com\/.+(?:\/|(?:kit=))(.+?)[.&].+?)\)\sformat\('(\w+?)'\);/g
  const fontFiles: GoogleFontFile[] = []
  let processedStylesheet = stylesheet

  let match
  while ((match = fontSourceRegex.exec(stylesheet)) !== null) {
    const url = match[1]
    const filename = match[2]
    const extension = fontMimeMap[match[3].toLowerCase()]
    const staticUrl = `https://${baseUrl}/static/fonts/${filename}.${extension}`

    processedStylesheet = processedStylesheet.replace(url, staticUrl)
    fontFiles.push({ url, filename, extension })
  }

  return { processedStylesheet, fontFiles }
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};
  --textHighlight: ${theme.colors.lightMode.textHighlight};

  --accentBorder: ${theme.colors.lightMode.accentBorder};
  --quoteBackground: ${theme.colors.lightMode.quoteBackground};
  --clrred: ${theme.colors.lightMode.clrred};
  --clrorange: ${theme.colors.lightMode.clrorange};
  --clryellowlight: ${theme.colors.lightMode.clryellowlight};
  --clryellowdark: ${theme.colors.lightMode.clryellowdark};
  --clrgreen: ${theme.colors.lightMode.clrgreen};
  --clrpurple: ${theme.colors.lightMode.clrpurple};
  --clrseagreen: ${theme.colors.lightMode.clrseagreen};
  --clrcyan: ${theme.colors.lightMode.clrcyan};
  --clrfrost: ${theme.colors.lightMode.clrfrost};
  --clrblue: ${theme.colors.lightMode.clrblue};
  --clrsalmon: ${theme.colors.lightMode.clrsalmon};
  --clrredrgb: ${theme.colors.lightMode.clrredrgb};
  --clrorangergb: ${theme.colors.lightMode.clrorangergb};
  --clryellowlightrgb: ${theme.colors.lightMode.clryellowlightrgb};
  --clryellowdarkrgb: ${theme.colors.lightMode.clryellowdarkrgb};
  --clrgreenrgb: ${theme.colors.lightMode.clrgreenrgb};
  --clrpurplergb: ${theme.colors.lightMode.clrpurplergb};
  --clrseagreenrgb: ${theme.colors.lightMode.clrseagreenrgb};
  --clrcyanrgb: ${theme.colors.lightMode.clrcyanrgb};
  --clrfrostrgb: ${theme.colors.lightMode.clrfrostrgb};
  --clrbluergb: ${theme.colors.lightMode.clrbluergb};
  --clrsalmonrgb: ${theme.colors.lightMode.clrsalmonrgb};

  --bb0:${theme.colors.lightMode.bb0};
  --bb0rgb: ${theme.colors.lightMode.bb0rgb};
  --b0: ${theme.colors.lightMode.b0};
  --b1: ${theme.colors.lightMode.b1};
  --b2: ${theme.colors.lightMode.b2};
  --b3: ${theme.colors.lightMode.b3};
  --b4: ${theme.colors.lightMode.b4};
  --w0: ${theme.colors.lightMode.w0};
  --w1: ${theme.colors.lightMode.w1};
  --w2: ${theme.colors.lightMode.w2};
  --w3: ${theme.colors.lightMode.w3};
  --w4: ${theme.colors.lightMode.w4};

  --plnhdcl1:${theme.colors.lightMode.plnhdcl1};
  --plnhdcl2:${theme.colors.lightMode.plnhdcl2};
  --plnhdcl3:${theme.colors.lightMode.plnhdcl3};
  --plnhdcl4:${theme.colors.lightMode.plnhdcl4};
  --plnhdcl5:${theme.colors.lightMode.plnhdcl5};
  --plnhdcl6:${theme.colors.lightMode.plnhdcl6};

  --clrtxt:${theme.colors.lightMode.clrtxt};

  --titleFont: "${getFontSpecificationName(theme.typography.title || theme.typography.header)}", ${DEFAULT_SANS_SERIF};
  --headerFont: "${getFontSpecificationName(theme.typography.header)}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${getFontSpecificationName(theme.typography.body)}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${getFontSpecificationName(theme.typography.code)}", ${DEFAULT_MONO};

  --imurl: ${theme.colors.lightMode.imurl};

}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --highlight: ${theme.colors.darkMode.highlight};
  --textHighlight: ${theme.colors.darkMode.textHighlight};
  --accentBorder: ${theme.colors.darkMode.accentBorder};
  --quoteBackground: ${theme.colors.darkMode.quoteBackground};
  --clrred: ${theme.colors.lightMode.clrred};
  --clrorange: ${theme.colors.lightMode.clrorange};
  --clryellowlight: ${theme.colors.lightMode.clryellowlight};
  --clryellowdark: ${theme.colors.lightMode.clryellowdark};
  --clrgreen: ${theme.colors.lightMode.clrgreen};
  --clrpurple: ${theme.colors.lightMode.clrpurple};
  --clrseagreen: ${theme.colors.lightMode.clrseagreen};
  --clrcyan: ${theme.colors.lightMode.clrcyan};
  --clrfrost: ${theme.colors.lightMode.clrfrost};
  --clrblue: ${theme.colors.lightMode.clrblue};
  --clrsalmon: ${theme.colors.lightMode.clrsalmon};
  --clrredrgb: ${theme.colors.lightMode.clrredrgb};
  --clrorangergb: ${theme.colors.lightMode.clrorangergb};
  --clryellowlightrgb: ${theme.colors.lightMode.clryellowlightrgb};
  --clryellowdarkrgb: ${theme.colors.lightMode.clryellowdarkrgb};
  --clrgreenrgb: ${theme.colors.lightMode.clrgreenrgb};
  --clrpurplergb: ${theme.colors.lightMode.clrpurplergb};
  --clrseagreenrgb: ${theme.colors.lightMode.clrseagreenrgb};
  --clrcyanrgb: ${theme.colors.lightMode.clrcyanrgb};
  --clrfrostrgb: ${theme.colors.lightMode.clrfrostrgb};
  --clrbluergb: ${theme.colors.lightMode.clrbluergb};
  --clrsalmonrgb: ${theme.colors.lightMode.clrsalmonrgb};

  --clrtxt:${theme.colors.darkMode.clrtxt};
  
  --bb0:${theme.colors.lightMode.bb0};
  --bb0rgb: ${theme.colors.darkMode.bb0rgb};
  --b0: ${theme.colors.darkMode.b0};
  --b1: ${theme.colors.darkMode.b1};
  --b2: ${theme.colors.darkMode.b2};
  --b3: ${theme.colors.darkMode.b3};
  --b4: ${theme.colors.darkMode.b4};
  --w0: ${theme.colors.darkMode.w0};
  --w1: ${theme.colors.darkMode.w1};
  --w2: ${theme.colors.darkMode.w2};
  --w3: ${theme.colors.darkMode.w3};
  --w4: ${theme.colors.darkMode.w4};

  --imurl: ${theme.colors.darkMode.imurl};
}
`
}
