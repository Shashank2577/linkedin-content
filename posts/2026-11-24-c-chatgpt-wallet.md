# ChatGPT Wallet: agent payments without the card details

**TUE 2026-11-24 · 7:00pm IST · Slot C · NEWS ANALYSIS · Hook #7 The Callout · Status: DRAFTED**

**Format:** text
**Anchor:** [OpenAI: Introducing ChatGPT Wallet (Nov 13)](https://openai.com/index/introducing-chatgpt-wallet/)
**People named:** OpenAI, American Express, Chase, Mastercard, Visa, dots  |  **Tag:** no
**Strategy stack:** newsjack: ChatGPT Wallet + callout: if your checkout blocks agents + direct value: Web Bot Auth and product feeds

---

## Post body (copy from here)

If your checkout still blocks agents, you're about to lose the sale.

ChatGPT Wallet started rolling out this month, and it treats agent purchases as a first-class payment flow. That's the shift.

The mechanics are the interesting part. A user adds a card once. Before each purchase they review the item, total and card, then approve with Face ID or a fingerprint. The payment network issues a token with its own card number, security code and expiry. The merchant never sees the real card, and the agent never holds it. That's the right design.

OpenAI built this with American Express, Chase, Mastercard and Visa. It starts inside dots for ChatGPT Pro subscribers in the US, 18 and older, with eligible US-issued cards. OpenAI says 1.2 billion people use ChatGPT weekly.

For engineering teams, the work is unglamorous. Let signed ChatGPT requests through your CDN or firewall using Web Bot Auth. Publish accurate product feeds. Make sure your risk provider doesn't auto-decline agent traffic. OpenAI names Forter, Riskified, Sardine, Signifyd, Adyen, Checkout.com and Stripe as partners. I'd ask each one what they actually recognize today.

The catch: this is a limited US pilot. Full delegation with spending limits is still a future step. But the direction is clear. Agent traffic is becoming a channel you either support or block. I'd rather support it now than debug it later.

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

ChatGPT Wallet uses network tokens and per-purchase biometric approval, built with Amex, Chase, Mastercard and Visa, starting in dots for US Pro users. The engineering work is Web Bot Auth, product feeds and risk-provider recognition. The caveat is a limited US pilot; full delegation is still a future step.
