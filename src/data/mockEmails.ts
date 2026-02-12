export interface Email {
  id: string;
  from: { name: string; email: string; avatar?: string };
  to: { name: string; email: string }[];
  subject: string;
  preview: string;
  body: string;
  date: Date;
  read: boolean;
  starred: boolean;
  folder: 'inbox' | 'sent' | 'drafts' | 'starred' | 'trash';
  labels?: string[];
}

const now = new Date();
const hoursAgo = (h: number) => new Date(now.getTime() - h * 3600000);
const daysAgo = (d: number) => new Date(now.getTime() - d * 86400000);

export const mockEmails: Email[] = [
  {
    id: '1',
    from: { name: 'Sarah Chen', email: 'sarah@designco.com' },
    to: [{ name: 'You', email: 'me@febmail.com' }],
    subject: 'Q1 Design Review — Final Assets Ready',
    preview: 'Hey! The final design assets for the Q1 review are ready. I\'ve uploaded everything to the shared drive...',
    body: `Hey!\n\nThe final design assets for the Q1 review are ready. I've uploaded everything to the shared drive and tagged the relevant files.\n\nKey highlights:\n• Updated brand guidelines with the new color palette\n• Revised hero illustrations for the landing page\n• Mobile-first wireframes for the dashboard\n\nLet me know if you need any revisions before the presentation on Thursday.\n\nBest,\nSarah`,
    date: hoursAgo(1),
    read: false,
    starred: true,
    folder: 'inbox',
    labels: ['design'],
  },
  {
    id: '2',
    from: { name: 'Alex Rivera', email: 'alex@techstart.io' },
    to: [{ name: 'You', email: 'me@febmail.com' }],
    subject: 'Re: API Integration Timeline',
    preview: 'Thanks for the update. I\'ve reviewed the integration docs and have a few questions about the auth flow...',
    body: `Thanks for the update. I've reviewed the integration docs and have a few questions about the auth flow.\n\nSpecifically:\n1. Are we using OAuth 2.0 or API keys for the initial handshake?\n2. What's the rate limit on the production endpoints?\n3. Do we need to handle token refresh on our end?\n\nI can hop on a quick call tomorrow morning if that's easier.\n\nCheers,\nAlex`,
    date: hoursAgo(3),
    read: false,
    starred: false,
    folder: 'inbox',
    labels: ['engineering'],
  },
  {
    id: '3',
    from: { name: 'Marketing Team', email: 'marketing@company.com' },
    to: [{ name: 'You', email: 'me@febmail.com' }],
    subject: 'February Newsletter Draft — Review Needed',
    preview: 'Hi team, the February newsletter draft is ready for review. We\'ve included the product updates...',
    body: `Hi team,\n\nThe February newsletter draft is ready for review. We've included the product updates, customer spotlight, and the upcoming events section.\n\nDeadline for feedback: Wednesday EOD\n\nPlease check:\n- Product feature descriptions for accuracy\n- Customer quote approvals\n- Event dates and registration links\n\nThanks!\nMarketing Team`,
    date: hoursAgo(5),
    read: true,
    starred: false,
    folder: 'inbox',
    labels: ['marketing'],
  },
  {
    id: '4',
    from: { name: 'Jordan Park', email: 'jordan@freelance.dev' },
    to: [{ name: 'You', email: 'me@febmail.com' }],
    subject: 'Invoice #2024-089 — February Services',
    preview: 'Please find attached the invoice for February consulting services. Payment terms are net 30...',
    body: `Hi,\n\nPlease find attached the invoice for February consulting services.\n\nInvoice Details:\n- Invoice #: 2024-089\n- Amount: $4,500.00\n- Services: Frontend development & code review\n- Period: Feb 1-28, 2024\n- Payment terms: Net 30\n\nLet me know if you have any questions.\n\nBest regards,\nJordan Park`,
    date: daysAgo(1),
    read: true,
    starred: false,
    folder: 'inbox',
  },
  {
    id: '5',
    from: { name: 'Emily Watson', email: 'emily@venture.capital' },
    to: [{ name: 'You', email: 'me@febmail.com' }],
    subject: 'Intro: Potential Partnership Opportunity',
    preview: 'I came across your work and would love to discuss a potential collaboration between our teams...',
    body: `Hi there,\n\nI came across your work and was really impressed with what you've been building. I'd love to discuss a potential collaboration between our teams.\n\nWe're currently looking for partners in the developer tools space, and I think there could be great synergy.\n\nWould you be open to a 30-minute call next week? I'm flexible on timing.\n\nLooking forward to hearing from you.\n\nWarm regards,\nEmily Watson\nPartner, Venture Capital Inc.`,
    date: daysAgo(1),
    read: false,
    starred: true,
    folder: 'inbox',
  },
  {
    id: '6',
    from: { name: 'You', email: 'me@febmail.com' },
    to: [{ name: 'Sarah Chen', email: 'sarah@designco.com' }],
    subject: 'Re: Project Timeline Update',
    preview: 'Thanks Sarah, the new timeline works for us. I\'ll sync with the engineering team...',
    body: `Thanks Sarah, the new timeline works for us. I'll sync with the engineering team and get back to you by Friday with our capacity estimates.\n\nLooking forward to kicking this off!\n\nBest`,
    date: daysAgo(2),
    read: true,
    starred: false,
    folder: 'sent',
  },
  {
    id: '7',
    from: { name: 'You', email: 'me@febmail.com' },
    to: [{ name: 'Team', email: 'team@company.com' }],
    subject: 'Weekly Standup Notes — Feb 10',
    preview: 'Here are the notes from today\'s standup. Key action items below...',
    body: `Team,\n\nHere are the notes from today's standup.\n\nKey action items:\n• @alex — Finalize API docs by Wednesday\n• @sarah — Share design mockups for review\n• @jordan — Deploy staging environment\n\nNext standup: Thursday 10am\n\nThanks everyone!`,
    date: daysAgo(2),
    read: true,
    starred: false,
    folder: 'sent',
  },
  {
    id: '8',
    from: { name: 'You', email: 'me@febmail.com' },
    to: [{ name: 'Emily Watson', email: 'emily@venture.capital' }],
    subject: 'Draft: Partnership Proposal',
    preview: 'Here\'s the draft proposal for the partnership discussion...',
    body: `Draft — not yet sent\n\nHi Emily,\n\nThank you for reaching out. I've put together a brief proposal outlining how we could collaborate.\n\n[TODO: Add partnership details]\n[TODO: Include timeline]\n[TODO: Attach deck]`,
    date: hoursAgo(2),
    read: true,
    starred: false,
    folder: 'drafts',
  },
];
