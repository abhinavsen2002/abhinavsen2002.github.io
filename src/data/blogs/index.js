import anOdeToAFriend from './an-ode-to-a-friend';
import facingFearOfBeingJudged from './facing-fear-of-being-judged';
import dearYashi from './dear-yashi';
import inequalityPart2 from './inequality-part-2';
import needsVsWants from './needs-vs-wants';
import stopCallingMistakesTechDebt from './stop-calling-all-your-mistakes-tech-debt';
import theCaseForRust from './the-case-for-rust-grows-stronger';
import theValueOfTime from './the-value-of-time';
import theBulletsInOurHearts from './the-bullets-in-our-hearts';

export const blogYears = [
  {
    year: '2026',
    tagline: 'in my public era',
    posts: [
      inequalityPart2,
      theValueOfTime,
      needsVsWants,
      facingFearOfBeingJudged
    ]
  },
  {
    year: '2025',
    tagline: 'cooking as an SWE',
    posts: [
      theCaseForRust,
      stopCallingMistakesTechDebt
    ]
  },
  {
    year: '2024',
    tagline: 'college ends',
    posts: [
      dearYashi,
      anOdeToAFriend,
      theBulletsInOurHearts
    ]
  }
];

// Export all blog posts as a flat array for route lookups
export const blogPosts = [
  inequalityPart2,
  theValueOfTime,
  needsVsWants,
  facingFearOfBeingJudged,
  theCaseForRust,
  stopCallingMistakesTechDebt,
  dearYashi,
  anOdeToAFriend,
  theBulletsInOurHearts
];
