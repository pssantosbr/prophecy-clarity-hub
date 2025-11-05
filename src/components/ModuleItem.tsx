import { LucideIcon } from 'lucide-react';

interface ModuleItemProps {
  icon: LucideIcon;
  title: string;
  delay?: number;
}

const ModuleItem = ({ icon: Icon, title, delay = 0 }: ModuleItemProps) => {
  return (
    <div 
      className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary float" />
      </div>
      <p className="font-body text-foreground text-base md:text-lg" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default ModuleItem;
