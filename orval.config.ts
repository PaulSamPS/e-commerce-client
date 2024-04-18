module.exports = {
  main: {
    input: "./src/shared/api/schema.yaml",
    output: {
      target: "./src/shared/api/generate.ts",
      prettier: true,
      override: {
        mutator: {
          path: "./src/shared/api/api-instance.ts",
          name: "createInstance",
        },
      },
    },
  },
};
