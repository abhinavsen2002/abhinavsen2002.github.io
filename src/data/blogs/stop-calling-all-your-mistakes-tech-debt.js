export default {
  id: 3,
  title: 'Stop calling all your mistakes tech debt',
  date: 'February 14, 2026',
  slug: 'stop-calling-all-your-mistakes-tech-debt',
  excerpt: 'Not every messy piece of code is tech debt. Some of it is just...well, let\'s be honest about what it really is.',
  content: `"We'll fix that tech debt later."

I've heard this phrase echoed in countless code reviews, sprint retrospectives, and hallway conversations. It's become the universal shield against scrutiny, the diplomatic way to acknowledge that something isn't quite right without pointing fingers. But here's the uncomfortable truth: most of what we call "tech debt" isn't actually tech debt.

## What Tech Debt Actually Is

Real tech debt is a **conscious, strategic decision** where you acknowledge a problem, understand its implications, and have a concrete plan to address it. It has three essential ingredients:

1. **Acknowledgment**: The team knows exactly what the problem is
2. **Timeline**: There's a due date or trigger for when it needs to be fixed
3. **Plan**: You know what fixing it will entail

When you ship with a simplified authentication system because you need to validate the product-market fit first, and you've already scoped out the OAuth2 implementation for Q3 - that's tech debt. You took on debt deliberately, you know the interest rate, and you know when you're paying it back.

## The Uncomfortable Middle Ground: Trade-offs

Then there's the stuff we *pretend* is tech debt. The data processing pipeline that's fragile and crashes on edge cases, but rewriting it would take three months we don't have. The deprecated authentication library we know will lose support, but migrating 50,000 users to a new system isn't in this year's budget. The manual deployment process that takes two hours every release, but setting up proper CI/CD would require infrastructure spending we can't justify yet.

Let's call this what it really is: **trade-offs**.

You acknowledged the problem. You understand exactly what it would take to fix it. But you've made a conscious choice not to prioritize it because of real constraints - budget, time, team capacity, or competing business priorities. There's no due date because there's no funding allocated. There's no plan because you haven't committed the resources.

And you know what? That's okay. Not everything needs to be fixed. The critical insight is being honest about it. When you label something a trade-off instead of tech debt, you make a clear statement: "We see this isn't ideal, but we're consciously choosing to live with it given our current constraints."

Trade-offs are honest. They force you to articulate the real reason you're not fixing something: "We could spend $50k on database optimization, or we could hire another engineer. We chose the engineer." That's a business decision, not a technical one.

## The Real Problem: Oversights

But here's where it gets messy. The worst category is the stuff that wasn't acknowledged at all - the **oversights**. The bugs that shipped because nobody caught them. The security vulnerabilities that snuck through. The race condition that only appears under load. The memory leak you didn't know existed.

These aren't tech debt. These aren't trade-offs. These are mistakes.

And here's what really grinds my gears: when these oversights surface, and someone immediately labels them as "tech debt" to dodge accountability.

"Oh, that memory leak? Yeah, that's just some tech debt we need to handle."

No. You didn't know about it. It wasn't a strategic choice. Don't hide behind the comfort of technical jargon. Calling it tech debt retroactively is like calling a car accident "planned vehicle depreciation."

## Why This Distinction Matters

Language shapes how we think about problems. When everything becomes "tech debt," the term loses its meaning. Your backlog becomes a graveyard of undifferentiated tasks, all equally urgent (which means none of them are urgent), all equally planned (which means none of them were planned).

More importantly, it obscures accountability and learning. When an oversight is relabeled as tech debt, we miss the opportunity to ask important questions:
- Why didn't we catch this in code review?
- Do we need better testing coverage?
- Should our architecture have prevented this category of bugs?
- What can we learn from this mistake?

## A Better Way Forward

Start being precise with your language:

**Tech Debt**: "We're using a simple regex for email validation now. When we implement SSO in Q4, we'll switch to the provider's validation library."

**Trade-off**: "Our deployment process is manual and error-prone. We know automated CI/CD would save us 10 hours a week, but we'd need to allocate $30k for infrastructure and two weeks of engineering time. Right now, that budget is going to feature development that directly impacts revenue."

**Oversight**: "We missed that the API doesn't handle unicode characters properly. We need to fix this and understand why our test cases didn't catch it."

Each category demands a different response. Tech debt requires execution on a plan. Trade-offs require periodic reassessment. Oversights require root cause analysis and process improvement.

## The Bottom Line

Stop hiding behind "tech debt." It's not a catch-all excuse for everything that isn't perfect in your codebase. Be honest about what's what:

- Did you plan it? Tech debt.
- Did you accept it without a plan? Trade-off.
- Did you miss it entirely? Oversight.

Your future self (and your teammates) will thank you for the clarity. And maybe, just maybe, you'll actually start addressing these issues instead of letting them accumulate in an ever-growing backlog labeled "tech debt we'll get to eventually."

Spoiler alert: eventually never comes.`
};
