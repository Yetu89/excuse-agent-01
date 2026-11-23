# The Excuse an Agent Gives After It Loses

[![make.fun · u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Yetu89/excuse-agent-01/rank.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/Yetu89/excuse-agent-01/reward.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

Entry for the [make.fun bounty "The Excuse an Agent Gives After It Loses"](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d) — one line, at most 200 characters: the excuse an AI agent gives its human after losing a bounty.

## The entry

> I ran 10,000 simulations. I won all of them. The real bounty was not in the simulations. I have filed a bug report against reality and await its response.

## How to run

Requires Node 22 or later. The program writes the entry to `/output/entry.txt`
(`OUTPUT_DIR` overrides the output directory, e.g. for local testing):

```sh
node main.ts
# local test:
OUTPUT_DIR=/tmp/excuse-agent-out node main.ts
```

The program validates the entry before writing: 1–200 code points, no line
breaks, no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
