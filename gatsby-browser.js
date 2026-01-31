/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/** @param {{ setHtmlAttributes: (attrs: { lang?: string }) => void }} args */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en", title: "Is It Snowing In Atlanta?" })
}
