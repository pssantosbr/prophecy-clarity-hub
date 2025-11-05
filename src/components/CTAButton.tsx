import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  href?: string;
  large?: boolean;
  className?: string;
}

const CHECKOUT_URL = "https://pay.hotmart.com/O101159756R?off=icojpw5g&hotfeature=51&_hi=eyJjaWQiOiIxNzYxNTc5OTkzMzI4MTA0NDQwMDAyMDEzMTIxNjUwIiwiYmlkIjoiMTc2MTU3OTk5MzMyODEwNDQ0MDAwMjAxMzEyMTY1MCIsInNpZCI6IjJkMzY5MjFlYzQ5NTQwMDU4Mzg4ZmNjZTFjYzcxMWNjIn0=.1762357458823";

const CTAButton = ({ text, href, large = false, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    window.open(href || CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      className={`
        bg-primary hover:bg-primary/90 text-primary-foreground
        font-heading font-bold tracking-wide
        shimmer pulse-glow
        transition-all duration-300
        hover:scale-105
        ${large ? 'text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8' : 'text-lg md:text-xl px-6 md:px-10 py-4 md:py-6'}
        ${className}
      `}
    >
      {text}
      <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
    </Button>
  );
};

export default CTAButton;
