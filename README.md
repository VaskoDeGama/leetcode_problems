# LeetCode Problems

Solutions to [LeetCode](https://leetcode.com/) problems in JavaScript (ESM). Each problem lives in its own folder under `src/`, with an implementation file and optional tests using Node.js built-in test runner.

## Structure

```
src/
├── 1. Two Sum/
│   ├── twoSum.js        # solution
│   └── twoSum.spec.js   # tests
├── 7. Reverse Integer/
│   ├── reverse.js
│   └── reverse.spec.js
...
```

Folder names follow the LeetCode problem number and title. Solutions use ES modules (`import`/`export`).

## Requirements

- [Node.js](https://nodejs.org/) (v18+ for `node --test`)

## Setup

```bash
npm install
```

## Scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm test`      | Run all tests (`node --test`)                 |
| `npm run check` | Lint and check formatting (Prettier + ESLint) |
| `npm run fix`   | Auto-fix formatting and lint issues           |

## Running Tests

```bash
npm test
```

Tests are in `*.spec.js` files and use Node’s native test runner (`node:test`) and assertions (`node:assert`).

## License

MIT
