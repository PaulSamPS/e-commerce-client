import webpack, { RuleSetRule } from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
