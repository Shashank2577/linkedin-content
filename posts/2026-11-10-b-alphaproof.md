# Six million lines of proof. Four weeks. Signal's crypto, verified.

**TUE 2026-11-10 · 1:30pm IST · Slot B · NEWS ANALYSIS · Hook #2 Number Reveal · Status: DRAFTED**

**Format:** text
**Anchor:** [Google DeepMind: Introducing AlphaProof Code (Nov 10)](https://deepmind.google/blog/introducing-alphaproof-code/)
**Also:** https://google-deepmind.github.io/code-verification
**People named:** Google DeepMind, Signal  |  **Tag:** no
**Strategy stack:** newsjack: Nov 10 verification result + trend-ride: AI for security assurance + hot take: verification moves from design to compiled code

---

## Post body (copy from here)

Six million lines of Lean. Four weeks. The actual code behind Signal's protocol, mathematically verified.

Google DeepMind's AlphaProof Code is a multi-LLM framework that splits formal verification the way a research team would. Human experts decide what to prove and review the specifications. Agents powered by Gemini 4 Carbon write the proofs, then audit their own work and flag the roughly 1% that needs a human second look. Lean checks the rest.

The result is the first time AI has formally verified a widely deployed cryptographic protocol at this depth, and DeepMind says it's the first time the implementation of such a protocol has been verified by any method, with or without AI. Most protocol verification stops at the design. This goes down to the compiled code running on devices, where real vulnerabilities hide in the gap between design and implementation.

To check the system can tell correct code from buggy code, the team reintroduced two real, previously fixed bugs into an isolated copy. In both cases, AlphaProof Code produced a machine-checked proof that the buggy version was insecure.

Caveats: this is Signal's core cryptographic code, not the whole app, and the security goals were translated with human experts. But four weeks versus years is the number to sit with.

Source:
https://deepmind.google/blog/introducing-alphaproof-code/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

AlphaProof Code, Nov 10: first AI formal verification of a widely deployed cryptographic protocol at this depth, and first formal verification of the implementation by any method. Human experts wrote specs; Carbon agents wrote 6M+ lines of Lean; 1% flagged for human review; two real bugs reintroduced and caught. Caveat: core crypto code, not the whole app.
