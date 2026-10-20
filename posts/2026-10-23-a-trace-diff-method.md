# The four-step trace-diff method, adapted for legacy integrations

**FRI 2026-10-23 · 8:30am IST · Slot A · TEACH · Hook #21 The Direct Value · Status: DRAFTED**

**Format:** text
**Anchor:** [Christian Schaller: AI and reverse engineering hardware (Oct 15)](https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/)
**People named:** Christian Schaller  |  **Tag:** no (already tagged on Wednesday's post)
**Strategy stack:** namejack: Christian Schaller (method credited by name) + trend-ride: reverse engineering got cheap + teach: legacy integration, your lane + newsjack: Oct 15 write-up, so post as a how-to

---

## Post body (copy from here)

Here's the method I'd steal for any undocumented legacy integration. It comes from a hardware driver.

Christian Schaller's write-up describes how Claude Code got a scanner and a laptop webcam working on Linux. The core is four steps. Record a reference session with the vendor's own Windows driver. Capture the traffic beneath it. Run the same operations with your Linux version and capture that. Diff the two traces, and you get a concrete list of what your driver does differently.

Schaller's own conclusion is that reference captures are the key input. The AI did the tedious parts: decoding captures, writing probes, cross-checking constants. A human supplied the hardware and decided what to build. And "real hardware is the only judge": every claim was checked on the actual device.

My adaptation, not Schaller's: swap the USB bus for the network. When a client's old ERP has no usable docs, proxy the working vendor client, record a reference session, replay it from your integration, and diff the traffic. Ask the agent for the differences, then verify each one against the real system.

Source (Schaller's write-up):
https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/

---

## First comment (paste right after posting)

_none planned_

## Strategy notes (never part of the post)

Your lane: legacy integration. Steps and conclusions are Schaller's, from the original write-up. The ERP/network adaptation is labeled as the author's own, not Schaller's.
