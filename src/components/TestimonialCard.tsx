import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

const TestimonialCard = ({ name, location, text }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground font-body text-base md:text-lg mb-6 leading-relaxed italic">
        "{text}"
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-heading font-semibold text-primary text-lg">{name}</p>
        <p className="text-muted-foreground font-body text-sm">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
