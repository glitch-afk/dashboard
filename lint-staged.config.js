module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'pnpm run check-types',
  '*.json': ['prettier --write'],
};
