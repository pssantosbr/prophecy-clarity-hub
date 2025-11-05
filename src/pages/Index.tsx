import CTAButton from '@/components/CTAButton';
import CountdownTimer from '@/components/CountdownTimer';
import FAQSection from '@/components/FAQSection';
import ModuleItem from '@/components/ModuleItem';
import TestimonialCard from '@/components/TestimonialCard';
import { 
  Scroll, 
  Compass, 
  Mail, 
  Crown, 
  Swords, 
  Building2, 
  Sparkles, 
  Globe, 
  BookOpen, 
  Bell,
  Flame,
  Shield,
  Eye,
  HelpCircle,
  Cloud
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-8 mb-8">
              <Scroll className="w-12 h-12 md:w-16 md:h-16 text-primary float" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground text-shadow-gold leading-tight">
                The Seals Are Breaking.<br />
                The Trumpets Are Sounding.
              </h1>
              <Bell className="w-12 h-12 md:w-16 md:h-16 text-primary float" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h3 className="text-2xl md:text-4xl font-heading text-primary mb-6">
              Do You Understand What Is Coming?
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              The Book of Revelation isn't a fairy tale... But ignoring prophecy doesn't stop it from unfolding.
            </p>

            {/* Video Container */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl glow-gold aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/zc-t0LWLrlo?si=cl3MtRu7mUNQcBxI"
                  title="Revelation Made Simple"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <h4 className="text-xl md:text-2xl font-heading text-foreground mb-8">
              This November, trade fear for <span className="text-primary">FAITH</span>.
            </h4>

            <CTAButton text="YES! I WANT TO UNDERSTAND REVELATION NOW!" large />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-center mb-6 text-foreground glitch" style={{ animationDuration: '0.5s' }}>
            666. The Beast. The Lake of Fire. The Antichrist.
          </h2>
          
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's be honest. These words are terrifying... This confusion creates a dangerous spiritual gap.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 animate-fade-in">
              <Eye className="w-16 h-16 text-destructive mb-4 float" />
              <p className="text-foreground font-body text-lg leading-relaxed">
                You <strong>avoid</strong> reading the final chapters of God's Word.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <HelpCircle className="w-16 h-16 text-destructive mb-4 float" style={{ animationDelay: '0.5s' }} />
              <p className="text-foreground font-body text-lg leading-relaxed">
                You <strong>doubt</strong> if you are truly prepared for what is to come.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Cloud className="w-16 h-16 text-destructive mb-4 float" style={{ animationDelay: '1s' }} />
              <p className="text-foreground font-body text-lg leading-relaxed">
                You <strong>feel</strong> a sense of dread instead of the "blessed hope" the Bible promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 particles-bg">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            Stop Guessing. Stop Fearing. <span className="text-primary text-shadow-gold">Start Understanding.</span>
          </h2>
          
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-8">
            Introducing: REVELATION MADE SIMPLE
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            This is not another complicated theological lecture... <strong className="text-foreground">to remove the fear and replace it with unshakeable faith and clarity.</strong>
          </p>

          <CTAButton text="GET INSTANT ACCESS FOR JUST $10!" large />
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            A Complete 11-Module Journey Into The Heart of Prophecy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ModuleItem icon={Scroll} title="<strong>Module 1:</strong> Introduction & Keys to Revelation" delay={0} />
            <ModuleItem icon={Compass} title="<strong>Module 2:</strong> Who Was John" delay={100} />
            <ModuleItem icon={Mail} title="<strong>Module 3:</strong> The Seven Letters to the Church" delay={200} />
            <ModuleItem icon={Crown} title="<strong>Module 4:</strong> The Throne in Heaven and the Sealed" delay={300} />
            <ModuleItem icon={Swords} title="<strong>Module 5:</strong> The Beast, The Dragon, and 666 (Parts 1 & 2)" delay={400} />
            <ModuleItem icon={Swords} title="<strong>Module 6:</strong> The Final Battle" delay={500} />
            <ModuleItem icon={Building2} title="<strong>Module 7:</strong> The Fall of Babylon" delay={600} />
            <ModuleItem icon={Crown} title="<strong>Module 8:</strong> Jesus Returns as King" delay={700} />
            <ModuleItem icon={Globe} title="<strong>Module 9:</strong> New Heaven, New Earth" delay={800} />
            <ModuleItem icon={Bell} title="<strong>Module 10:</strong> The Seven Trumpets and the Two Witnesses" delay={900} />
            <ModuleItem icon={Flame} title="<strong>Module 11:</strong> The Four Horsemen" delay={1000} />
            <ModuleItem icon={BookOpen} title="<strong>Course Wrap-up:</strong> Summary of the Lessons" delay={1100} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16 text-foreground">
            They Stopped Fearing and Started Understanding
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Daniel M."
              location="Tanzania"
              text="This course opened my eyes to the beauty of God's plan. I no longer fear the end times—I understand them!"
            />
            <TestimonialCard
              name="Mercy K."
              location="Kenya"
              text="Pastor Rodrigo made Revelation so clear and simple. I feel prepared and blessed, not confused anymore."
            />
            <TestimonialCard
              name="Mari S."
              location="South Africa"
              text="Finally, a course that doesn't overwhelm me with theology. This is practical, powerful, and life-changing!"
            />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-8 text-foreground">
            THIS IS THE OPPORTUNITY THAT WILL CHANGE YOUR SPIRITUAL LIFE!
          </h2>
          
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            The regular price for this course will be <span className="line-through text-destructive">$39.99</span>. But for our "Prophetic Clarity" launch, this offer is available until <strong className="text-primary">November 30th</strong>.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-primary">
              This $10 offer disappears IN:
            </h3>
            <CountdownTimer />
          </div>

          <div className="bg-card border-2 border-primary rounded-lg p-8 md:p-12 text-center mb-12 glow-gold">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Price After Nov 30th: <span className="line-through text-destructive font-bold">$39.99</span>
            </p>
            <p className="text-5xl md:text-7xl font-heading font-bold text-primary mb-8 pulse-glow">
              $10.00
            </p>

            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground">
              And We're Even Boosting the Bonuses! <span className="text-primary">(FREE)</span>
            </h3>

            <div className="space-y-6 text-left mb-12">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                  🎁 Bonus #1: "10 Common Myths About The End Times" (PDF Guide)
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Debunk the most popular misconceptions and arm yourself with biblical truth.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                  🎁 Bonus #2: "The Prophecy Timeline" (Visual Infographic)
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  See the events of Revelation laid out in a beautiful, easy-to-understand chart.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                  🎁 Bonus #3: "Prayer Guide for the End Times" (Audio)
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  A guided prayer to help you prepare your heart spiritually for what is to come.
                </p>
              </div>
            </div>

            <CTAButton text="I WANT TO GRAB THIS $10 OFFER! (Before Nov 30th)" large />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Shield className="w-32 h-32 md:w-48 md:h-48 text-primary pulse-glow" />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                Your 7-Day "No-Questions-Asked" Guarantee
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                You have nothing to lose... except the fear. If, for any reason, you don't feel that "Revelation Made Simple" has brought you the clarity and peace you were seeking, simply email us within 7 days of your purchase, and we'll refund every penny—no questions, no hassle. You can even keep the bonuses as our gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Pastor Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            Who Is This Pastor Trusting God in the Trenches?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-secondary rounded-lg border-2 border-primary flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                "I'm Pastor Rodrigo Santos, a Brazilian with a heart for the nations. For over a decade, I've dedicated my life to preaching the uncompromised Word of God to communities across Africa, Asia, and Latin America. I've witnessed firsthand the hunger people have for biblical truth—especially when it comes to understanding the mysteries of Revelation.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                I created 'Revelation Made Simple' because I've seen too many believers paralyzed by fear or misled by false interpretations. My mission is simple: to equip you with the knowledge and faith to face the future with confidence, grounded in Scripture.
              </p>
              <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed">
                This course is my gift to you. Let's walk through Revelation together—not as scholars, but as believers ready to embrace God's ultimate plan."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary to-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground">
            The End is a New Beginning. Are You Ready for It?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't let another day pass in confusion. The clarity you've been praying for is one click away. This $10 offer, with all 3 bonuses, <strong className="text-primary">ends permanently on November 30th</strong>, when the price returns to $39.99. This is your moment.
          </p>

          <CTAButton text="YES! I WANT REVELATION MADE SIMPLE NOW!" large className="mb-8" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-body text-sm">
            COPYRIGHT © ALL RIGHTS RESERVED - DIVINE PURPOSE NETWORK
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
