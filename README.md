# harbor-pine-orders

Order totals for Harbor & Pine Supply (a fictional company; all data is made up).

## Run the checks
```
npm run check
```
This runs the same lint and tests locally and in CI.

## Layout
- `src/` service code
- `test/` tests (Node's built-in test runner)
- `scripts/check.mjs` the one command that checks everything
- `docs/` plans, decisions and handoff notes

## Rules
- Money is integer cents. Never floating point.
- Work on a branch; changes reach `main` only through a pull request.
