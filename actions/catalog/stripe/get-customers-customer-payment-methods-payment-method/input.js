const nodeInput = ({ $body, $headers, $env, $actions }) => {
  return {
    BUILDABLE_STRIPE_API_KEY: $env.BUILDABLE_STRIPE_API_KEY, // Required
    customer: "string", // Required
    payment_method: "string", // Required

    // expand: ["string"],
  };
};