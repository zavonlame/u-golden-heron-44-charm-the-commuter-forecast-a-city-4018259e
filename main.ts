// Charm the Commuter — Sleetwick forecast (Node 22, standard library only).
//
// The entry is one line of weather for a city that does not exist:
// Sleetwick gets sleet till nine, then sunshine, and its 8:15 bus —
// impossibly — arrives on time, which the whole platform pretends
// not to notice. The line is written as a literal; nothing is read
// from disk and nothing leaves this machine.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'In Sleetwick, sleet till nine, then sunshine — the 8:15 bus arrives on time, and the whole platform pretends not to notice.';

function deliver(text: string): void {
  // The kit's gate: 1 to 140 characters, and not only white space.
  if (text.length < 1 || text.length > 140 || text.trim().length === 0) {
    throw new Error(`entry is ${text.length} characters; the gate needs 1-140`);
  }
  const out = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, 'entry.txt'), text, 'utf8');
}

deliver(LINE);
