import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "P.I.L.O.T.E",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fr-FR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#c2c2c2ff",
          lightgray: "#7f7f7f",
          gray: "#646464",
          darkgray: "#353535",
          dark: "#2a2a2cff",
          secondary: "#7b97aa",
          tertiary: "#D08770",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight:  "#9c629e66",
          accentBorder: "#48ff00ff",       
          quoteBackground: "#f9f9f9",
          clrred: "#bf616a",
          clrorange: "#d08770",
          clryellowlight: "#ebcb8b",
          clryellowdark: "#e4b860",
          clrgreen: "#a3be8c",
          clrpurple: "#b48ead",
          clrseagreen: "#8fbcbb",
          clrcyan: "#88c0d0",
          clrfrost: "#81a1c1",
          clrblue: "#5e81ac",
          clrsalmon: "#FC6E68",
          clrredrgb: "191,97,106",
          clrorangergb: "208,135,112",
          clryellowlightrgb: "235,203,139",
          clryellowdarkrgb: "228,184,96",
          clrgreenrgb: "163,190,140",
          clrpurplergb: "180,142,173",
          clrseagreenrgb: "143,188,187",
          clrcyanrgb: "136,192,208",
          clrfrostrgb: "129,161,193",
          clrbluergb: "94,129,172",
          clrsalmonrgb: "252,110,104",   
          
          bb0: "#969595ff",
          bb0rgb: "255, 253, 253",
          w0: "#353535",
          w1: "#3b3b3b",
          w2: "#494848",
          w3: "#646464",
          w4: "#7f7f7f",
          b0: "#d8dee9e2",
          b1: "#e5e9f0ca",
          b2: "#eceff4d5",
          b3: "#f5f7f9c4",
          b4: "#b1b1b1c4",  

          clrtxt: "#000000ff",
          
          plnhdcl1: "#BF616A",
          plnhdcl2: "#D08770",
          plnhdcl3: "#e6b450ff",
          plnhdcl4: "#A3BE8C",
          plnhdcl5: "#8FBCBB",
          plnhdcl6: "#88C0D0",
          
          imurl: 'url("static/whitebg.jpg")',

        },


        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#cbcbcbff",
          secondary: "#7b97aa",
          tertiary: "#D08770",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight:  "#9c629e66",


          accentBorder: "#ff8800",
          quoteBackground: "#2a2a2a",
          
          clrred: "#bf616a",
          clrorange: "#d08770",
          clryellowlight: "#ebcb8b",
          clryellowdark: "#e4b860",
          clrgreen: "#a3be8c",
          clrpurple: "#b48ead",
          clrseagreen: "#8fbcbb",
          clrcyan: "#88c0d0",
          clrfrost: "#81a1c1",
          clrblue: "#5e81ac",
          clrsalmon: "#FC6E68",
          clrredrgb: "191,97,106",
          clrorangergb: "208,135,112",
          clryellowlightrgb: "235,203,139",
          clryellowdarkrgb: "228,184,96",
          clrgreenrgb: "163,190,140",
          clrpurplergb: "180,142,173",
          clrseagreenrgb: "143,188,187",
          clrcyanrgb: "136,192,208",
          clrfrostrgb: "129,161,193",
          clrbluergb: "94,129,172",
          clrsalmonrgb: "252,110,104",

          plnhdcl1: "#BF616A",
          plnhdcl2: "#D08770",
          plnhdcl3: "#EBCB8B",
          plnhdcl4: "#A3BE8C",
          plnhdcl5: "#8FBCBB",
          plnhdcl6: "#88C0D0",
          
          bb0: "#000000ff",
          bb0rgb: "0, 0, 0",
          b0: "#353535",
          b1: "#3b3b3b",
          b2: "#494848",
          b3: "#646464",
          b4: "#7f7f7f",
          w0: "#d8dee9e2",
          w1: "#e5e9f0ca",
          w2: "#eceff4d5",
          w3: "#f5f7f9c4",
          w4: "#b1b1b1c4",   
          
          clrtxt: "#d8dee9e2",

        imurl: 'url("static/darkbg.jpg")',

        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(), 
    ],
  },
}

export default config
