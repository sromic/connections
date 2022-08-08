const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_SPOTIFY_CLIENT_ID: $env.BUILDABLE_SPOTIFY_CLIENT_ID, // Required
    BUILDABLE_SPOTIFY_CLIENT_SECRET: $env.BUILDABLE_SPOTIFY_CLIENT_SECRET, // Required
    BUILDABLE_SPOTIFY_BASE_URI: $env.BUILDABLE_SPOTIFY_BASE_URI, // Required
    q: "string", // Required
    type: "string", // Required

    // market: "string",
    // limit: 0,
    // offset: 0,
    // include_external: "string",
  };
};