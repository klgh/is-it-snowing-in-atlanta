/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

/** @param {{ setHtmlAttributes: (attrs: { lang?: string }) => void }} args */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en", title: "Is It Snowing In Atlanta?" })
}
