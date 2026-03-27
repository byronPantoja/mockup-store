export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  image: string;
  date: string;
  author: string;
}

export const articles: Article[] = [
  {
    slug: "terroir-of-mount-apo",
    title: "The Terroir of Mount Apo: Sourcing Our Signature Beans",
    excerpt: "Discover the high-altitude volcanic soils of Mindanao that give our coffee its distinct, vibrant flavor profile. A journey to the roots of That's G.",
    date: "March 15, 2026",
    author: "Gabriel Santos",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1600&auto=format&fit=crop",
    content: `
      <h2>The Highest Peak, The Finest Beans</h2>
      <p>Mount Apo isn't just the highest peak in the Philippines; it's a sacred terroir that produces some of the most dynamic and complex coffee beans in the world. Nestled within its volcanic slopes, our partner farms cultivate Arabica varieties that thrive in the microclimates created by the mountain's frequent mists and high altitude.</p>
      
      <p>When you taste our signature Mount Apo roast, you're experiencing the direct result of this environment. The volcanic soil imparts a unique mineral quality, while the slow maturation of the coffee cherries—dictated by the cool mountain air—allows sugars to develop fully. This results in the sweet, fruity notes that our customers have come to love.</p>
      
      <h2>A Partnership Built on Trust</h2>
      <p>Our relationship with the local farming communities goes beyond simple commerce. We practice direct trade, ensuring that the farmers who meticulously care for these crops receive well above market prices. By returning a genuine premium to the origin, we help sustain the families and the land itself.</p>
      
      <blockquote>"You can taste the mountain in every cup. It's wild, it's refined, and it's unmistakably Mindanao."</blockquote>
      
      <p>The next time you brew a cup of our Mount Apo signature roast, take a moment to appreciate the journey of those beans. From a mist-shrouded volcanic slope in Mindanao to your morning ritual, it's a testament to the magic of origin.</p>
    `
  },
  {
    slug: "art-of-the-light-roast",
    title: "The Art of the Light Roast: Respecting the Bean",
    excerpt: "Why do we favor lighter roast profiles? It's all about preserving the inherent characteristics of the coffee cherry. Read our roasting philosophy.",
    date: "February 28, 2026",
    author: "Maria de Leon",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1600&auto=format&fit=crop",
    content: `
      <h2>Why We Don't Burn Our Coffee</h2>
      <p>For decades, "strong" coffee was synonymous with dark, oily, heavily roasted beans. But at That's G, we view roasting differently. Think of coffee beans like high-quality steak: if you have a beautiful, marbled cut of wagyu, you wouldn't cook it well-done. The same principle applies to specialty coffee.</p>
      
      <p>We source incredible coffees with complex flavor profiles—notes of jasmine, wild berries, raw honey, and cacao. Over-roasting these beans effectively burns away these delicate organic compounds, replacing them with the uniform, ashy taste of carbon. Our goal in the roastery is to highlight, not hide, the bean's natural character.</p>
      
      <h2>The Maillard Reaction and Development</h2>
      <p>Our roasting process is a delicate dance of chemistry and sensory intuition. We carefully manage heat application to extend the development phase just enough to avoid grassy, vegetal flavors, while stopping the roast before the bean's cellular structure breaks down and releases its oils to the surface.</p>
      
      <p>This approach results in a lighter, matte-looking bean. When brewed, it yields a cup that is tea-like in body but explosive in flavor and aroma. The acidity is bright and pleasant—not sour—bringing a lively vibrancy to your morning ritual.</p>

      <h2>A Paradigm Shift in Taste</h2>
      <p>If you're used to traditional dark roasts, making the switch to light roasted specialty coffee can be a revelation. You begin to understand why coffee is a fruit. The subtleties of origin, varietal, and processing method become crystal clear. It's a cleaner, sweeter, and infinitely more interesting way to drink coffee.</p>
    `
  },
  {
    slug: "mastering-morning-pour-over",
    title: "Mastering the Morning Pour-Over: A Step-by-Step Ritual",
    excerpt: "Elevate your daily routine with our definitive guide to the perfect pour-over. Learn the ratios, water temperatures, and techniques we use in the lab.",
    date: "February 10, 2026",
    author: "Gabriel Santos",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop",
    content: `
      <h2>The Meditative Art of Brewing</h2>
      <p>In a world of automatic machines and instant gratification, the pour-over stands out as a meditative morning ritual. It requires patience, precision, and presence. But the reward is unparalleled clarity in the cup. Here is how we brew in the That's G lab.</p>
      
      <h2>What You'll Need</h2>
      <ul>
        <li>A pourover cone (like a V60 or Kalita Wave) and filters</li>
        <li>A gooseneck kettle (crucial for pouring control)</li>
        <li>A digital scale (volume measurements aren't accurate enough)</li>
        <li>Freshly roasted specialty coffee</li>
        <li>A quality burr grinder</li>
      </ul>

      <h2>The Golden Ratio</h2>
      <p>We recommend starting with a 1:15 ratio of coffee to water. For a standard mug, that's 20 grams of coffee to 300 grams of water. Grind the coffee to a medium-fine consistency—it should look somewhat like sea salt.</p>

      <h2>The Technique</h2>
      <p><strong>1. Rinse and Preheat:</strong> Place the filter in the cone and rinse it thoroughly with hot water. This removes any papery taste and preheats your brewing vessel.</p>
      <p><strong>2. The Bloom:</strong> Add your ground coffee to the filter and tare your scale. Start your timer and slowly pour 40-50 grams of water (just off the boil, around 200°F/93°C) over the grounds, ensuring they are evenly saturated. You'll see the coffee bubble and expand—this is the "bloom," as trapped CO2 escapes. Wait 30-45 seconds.</p>
      <p><strong>3. The Main Pour:</strong> In slow, concentric circles starting from the center and moving outward, pour the remaining water in pulses until you reach 300 grams. Keep the water level relatively consistent.</p>
      <p><strong>4. Drawdown:</strong> The water should finish draining through the bed of coffee by around the 2:30 to 3:00 minute mark. If it takes much longer, your grind is too fine; if it drains too quickly, your grind is too coarse.</p>

      <p>Remove the filter, give the carafe a swirl to mix the coffee, and pour. Take a moment to smell the aromas before your first sip. Your morning ritual has begun.</p>
    `
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}
