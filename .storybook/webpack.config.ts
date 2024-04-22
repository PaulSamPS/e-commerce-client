import webpack from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
  if (!config || !config.module || !config.module.rules) return config;

  const updatedRules = config.module.rules.map((rule) => {
    if (typeof rule !== 'object' || !('test' in rule!)) return rule;

    if (/svg/.test(String(rule.test))) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules = [
    ...updatedRules,
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
  ];

  return config;
};
