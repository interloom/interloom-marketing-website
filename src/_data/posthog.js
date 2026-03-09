const defaultApiHost = "https://eu.i.posthog.com";

const projectToken = (process.env.POSTHOG_PROJECT_TOKEN || "").trim();
const apiHost = (process.env.POSTHOG_API_HOST || defaultApiHost).trim() || defaultApiHost;

module.exports = {
  POSTHOG_PROJECT_TOKEN: projectToken,
  POSTHOG_API_HOST: apiHost,
  POSTHOG_ENABLED: Boolean(projectToken)
};
