# ra4-test

## How was this project generated?

```sh
npx create-react-admin@latest ra4-test
npm i --save-dev vitest @testing-library/jest-dom @testing-library/react jsdom
```

Update vite.config.ts to setup vitest:

```typescript
  // ...
  test: {
    globals: true,
    environment: "jsdom",
    threads: false,
    setupFiles: "src/tests/setup-tests.ts",
    include: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.spec.js", "**/*.spec.jsx"],
  },
  // ...
```

Add test in script:

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

## The Issue

Running `npm test` will start vitest who will then fail because some tests are throwing errors:

`TypeError: Cannot read properties of null (reading 'control')TypeError: Cannot read properties of null (reading 'control')`

| Test                           | Pass               | Using RA Component | Note                                                  |
| ------------------------------ | ------------------ | ------------------ | ----------------------------------------------------- |
| button-with-state.spec.tsx     | :heavy_check_mark: | :x:                | Custom components                                     |
| ra-button-with-state.spec.tsx  | :x:                | :heavy_check_mark: |                                                       |
| ra-toolbar-with-save.spec.tsx  | :x:                | :heavy_check_mark: |                                                       |
| toolbar-with-save-cjs.spec.tsx | :x:                | :x:                | Files were taken from cjs folder in ra-ui-material-ui |
| toolbar-with-save.spec.tsx     | :heavy_check_mark: | :x:                | Files were taken from esm folder in ra-ui-material-ui |
