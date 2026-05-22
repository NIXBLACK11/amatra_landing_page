export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQGroup {
  category: string;
  questions: FAQItem[];
}

export const faqs: FAQGroup[] = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Amatra?',
        a: 'Amatra is a fashion-focused social app where you build a virtual wardrobe from your real clothes, compose AI-generated outfit images, and share looks with a community of fashion lovers. Think of it as Instagram built specifically for outfit creation and styling.',
      },
      {
        q: 'How do I get started?',
        a: 'Download the app, sign up with your email, and complete a quick profile setup. Then start uploading photos of your clothing to build your wardrobe — tops, bottoms, outerwear, headwear, footwear. Once you have pieces in your wardrobe, you can start composing outfits.',
      },
      {
        q: 'Is Amatra free to use?',
        a: 'Yes. Amatra is free to download and use with a limited number of AI outfit generations per month. Premium subscribers unlock unlimited creations, an ad-free experience, and priority AI generation.',
      },
      {
        q: 'What platforms is Amatra available on?',
        a: 'Amatra is available on both iOS (App Store) and Android (Google Play). It is built with React Native and supports both platforms natively.',
      },
    ],
  },
  {
    category: 'Wardrobe & Outfits',
    questions: [
      {
        q: 'What categories can I add to my wardrobe?',
        a: 'Amatra supports six clothing categories: Headwear, Tops, Outerwear, Bottoms, Footwear, and Model (full-body reference photos). You can add as many items as you like within each category.',
      },
      {
        q: 'How does AI outfit generation work?',
        a: 'Select pieces from your wardrobe — a top, bottoms, shoes, and optionally outerwear — and tap Create. The AI composes a realistic full-body outfit image using those exact pieces. The output is a photo-quality image of how that combination looks together.',
      },
      {
        q: 'Can I add product links to my wardrobe items?',
        a: 'Yes. When you upload a wardrobe item, you can add a product name and product URL. These links appear when others view your outfit posts, allowing them to shop any piece directly.',
      },
      {
        q: 'What is the Copy Outfit feature?',
        a: 'When you see another user\'s post, you can tap Copy Outfit. This copies all the outfit components into your wardrobe. You can then swap any piece for something you own, rename the outfit, and generate your own version — all from within the app.',
      },
    ],
  },
  {
    category: 'Community & Sharing',
    questions: [
      {
        q: 'How does the social feed work?',
        a: 'Your feed shows posts from people you follow. Each post is an outfit you can interact with — like, comment, share, or bookmark. You can also search posts by keyword to discover specific styles, occasions, or seasons.',
      },
      {
        q: 'Can I edit my post after publishing?',
        a: 'Yes, but only within 15 minutes of posting. After that, the editing window closes. This keeps the feed authentic and prevents retroactive changes to posts others may have already interacted with.',
      },
      {
        q: 'How do I find people to follow?',
        a: 'Use the Search tab to find posts and discover creators. You can also browse your Connections page for mutual follows and suggestions based on your fashion activity.',
      },
    ],
  },
  {
    category: 'Premium & Payments',
    questions: [
      {
        q: 'What does Premium include?',
        a: 'Premium gives you unlimited AI outfit generations (no monthly cap), a completely ad-free experience, and priority generation — your outfits process faster during high-demand periods.',
      },
      {
        q: 'How much does Premium cost?',
        a: 'Premium is billed monthly. The current price and billing details are available in the app under the Premium screen. Payments are processed securely through Razorpay.',
      },
      {
        q: 'Can I cancel Premium anytime?',
        a: 'Yes. You can cancel your Premium subscription at any time. Your access continues until the end of the current billing period.',
      },
    ],
  },
  {
    category: 'Account & Privacy',
    questions: [
      {
        q: 'How do I delete my account?',
        a: 'Go to Settings → Delete Account. You\'ll be asked for a reason and a confirmation. Once confirmed, your data will be removed from the database within 30 days and from backups within 60 days.',
      },
      {
        q: 'Is my data secure?',
        a: 'Yes. Amatra uses JWT-based authentication with secure token refresh handling. Your uploaded images are stored on Google Cloud infrastructure. We do not sell your data to third parties.',
      },
    ],
  },
];
