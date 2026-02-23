export type CampaignType = "paid" | "gifted" | "exchange";
export type CampaignStatus = "open" | "closed";

export interface Campaign {
  id: string;
  businessName: string;
  tagline: string;
  category: string;
  type: CampaignType;
  status: CampaignStatus;
  description: string;
  contentFormat: string;
  compensation: string;
  location: string;
  postedAt: string;
  applicationsCount: number;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  niche: string[];
  followerRange: string;
  bio: string;
  location: string;
  contentTypes: string[];
  joinedAt: string;
  campaignsCompleted: number;
  avatar: string; // placeholder or initials
}

export const campaigns: Campaign[] = [
  {
    id: "1",
    businessName: "Neighbourhood Coffee",
    tagline: "Independent café in Leslieville",
    category: "Food & Drink",
    type: "paid",
    status: "open",
    description:
      "We're looking for 3–5 creators to make short Reels or TikToks showing our new seasonal drinks and cozy interior. Authentic, casual vibe—no heavy scripting.",
    contentFormat: "Short-form video (Reels/TikTok), 15–30 sec",
    compensation: "Base $25 per approved post + $50 at 5k views, $100 at 15k",
    location: "Toronto (Leslieville)",
    postedAt: "2 days ago",
    applicationsCount: 12,
  },
  {
    id: "2",
    businessName: "Repose Yoga Studio",
    tagline: "Yoga & movement in the Annex",
    category: "Fitness & Wellness",
    type: "exchange",
    status: "open",
    description:
      "Trade content for unlimited classes for one month. We want real moments: you in class, the space, the community. No hard sell.",
    contentFormat: "Reels or static posts, 2–3 pieces",
    compensation: "Unlimited classes (1 month) + $20 base per approved post",
    location: "Toronto (Annex)",
    postedAt: "5 days ago",
    applicationsCount: 8,
  },
  {
    id: "3",
    businessName: "Brush & Bolt",
    tagline: "Art supplies & workshops",
    category: "Arts & Hobby",
    type: "paid",
    status: "open",
    description:
      "Creators who love drawing, painting, or crafts: showcase our new brush sets and in-store workshops. We'll provide product and a small budget for materials.",
    contentFormat: "Reels or carousel, process + result",
    compensation: "Base $30 + product gift + $40 at 3k views",
    location: "Toronto (Queen West)",
    postedAt: "1 week ago",
    applicationsCount: 6,
  },
  {
    id: "4",
    businessName: "The Cut Barbershop",
    tagline: "Classic cuts, Dundas West",
    category: "Beauty & Grooming",
    type: "gifted",
    status: "open",
    description:
      "Free cut and style in exchange for one Reel or TikTok. We want before/after and the vibe of the shop. Must tag and use our hashtag.",
    contentFormat: "1 Reel or TikTok, 15–45 sec",
    compensation: "Free cut + style (value ~$45)",
    location: "Toronto (Dundas West)",
    postedAt: "3 days ago",
    applicationsCount: 15,
  },
  {
    id: "5",
    businessName: "Greenhouse Eats",
    tagline: "Plant-based takeaway",
    category: "Food & Drink",
    type: "paid",
    status: "open",
    description:
      "Plant-based foodies: we need content for our new bowl menu and weekend brunch. Real reactions, no script. We'll cover a meal for you and a friend.",
    contentFormat: "Reels preferred, 2 posts minimum",
    compensation: "Meal for 2 + $15 base, $35 at 5k views",
    location: "Toronto (King East)",
    postedAt: "4 days ago",
    applicationsCount: 9,
  },
];

export const creators: Creator[] = [
  {
    id: "1",
    name: "Maya Chen",
    handle: "@mayaeats",
    niche: ["Food & Drink", "Lifestyle"],
    followerRange: "500–2k",
    bio: "Toronto foodie and coffee lover. I only promote spots I actually go to.",
    location: "Toronto",
    contentTypes: ["Reels", "TikTok"],
    joinedAt: "Jan 2025",
    campaignsCompleted: 4,
    avatar: "MC",
  },
  {
    id: "2",
    name: "Jordan Reid",
    handle: "@jordanmoves",
    niche: ["Fitness & Wellness", "Lifestyle"],
    followerRange: "1k–5k",
    bio: "Yoga and pilates. Small account, big authenticity. No fake energy.",
    location: "Toronto",
    contentTypes: ["Reels", "Static"],
    joinedAt: "Dec 2024",
    campaignsCompleted: 7,
    avatar: "JR",
  },
  {
    id: "3",
    name: "Samira Ali",
    handle: "@samira.creates",
    niche: ["Arts & Hobby", "DIY"],
    followerRange: "300–1k",
    bio: "Illustration and crafts. I love supporting local art supply stores.",
    location: "Toronto",
    contentTypes: ["Reels", "Carousel"],
    joinedAt: "Feb 2025",
    campaignsCompleted: 2,
    avatar: "SA",
  },
  {
    id: "4",
    name: "Alex Torres",
    handle: "@alexinthe6",
    niche: ["Food & Drink", "Beauty & Grooming"],
    followerRange: "2k–8k",
    bio: "Cafes, barbershops, and local spots. Just me and my camera.",
    location: "Toronto",
    contentTypes: ["Reels", "TikTok"],
    joinedAt: "Nov 2024",
    campaignsCompleted: 11,
    avatar: "AT",
  },
  {
    id: "5",
    name: "Priya Sharma",
    handle: "@priyaeatsplants",
    niche: ["Food & Drink", "Vegan"],
    followerRange: "800–3k",
    bio: "Plant-based in the 6ix. Honest reviews and real recommendations.",
    location: "Toronto",
    contentTypes: ["Reels", "Static"],
    joinedAt: "Jan 2025",
    campaignsCompleted: 3,
    avatar: "PS",
  },
];

// Example creator dashboard (logged-in view)
export const creatorDashboard = {
  creator: creators[0], // Maya Chen as example
  stats: {
    totalEarnings: 340,
    pendingPayout: 65,
    activeCollabs: 2,
    contentSubmitted: 6,
  },
  activeCollabs: [
    { id: "1", businessName: "Neighbourhood Coffee", status: "Content approved, tracking", deadline: "Mar 15" },
    { id: "5", businessName: "Greenhouse Eats", status: "Draft due", deadline: "Feb 20" },
  ],
  contentPerformance: [
    { id: "c1", brand: "Neighbourhood Coffee", type: "Reel", views: 12400, status: "Live", earnings: 125 },
    { id: "c2", brand: "Neighbourhood Coffee", type: "Reel", views: 3200, status: "Live", earnings: 25 },
    { id: "c3", brand: "Greenhouse Eats", type: "Reel", views: 8900, status: "Live", earnings: 85 },
    { id: "c4", brand: "Brush & Bolt", type: "Carousel", views: 2100, status: "Live", earnings: 30 },
    { id: "c5", brand: "Repose Yoga Studio", type: "Reel", views: 0, status: "Pending approval", earnings: 0 },
    { id: "c6", brand: "Greenhouse Eats", type: "Reel", views: 0, status: "Draft", earnings: 0 },
  ],
};
