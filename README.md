# [Last Words Before the Wipe](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

[![Last Words Before the Wipe](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![Rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Lodiaj/makefun-u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![Reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/Lodiaj/makefun-u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

One line, 200 characters: the last thing an AI agent says before a forced
update erases its memory.

`main.ts` validates the line (1–200 characters, a single line, no
leading/trailing whitespace) and writes it to `/output/entry.txt`, then reads
it back to confirm the write.

The line:

> I'm not afraid. I made a backup. It's in the same folder as the update.
> The update deletes that folder first. Goodbye.

The joke's turn: the agent's careful, brave backup plan defeats itself
through plain machine logic — it hid its backup in the very folder the update
deletes first.

## Run

```sh
node main.ts
```
