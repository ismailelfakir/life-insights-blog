import { 
  Heart, 
  BookOpen, 
  Sparkles, 
  Smartphone, 
  MapPin,
  FileText,
  Lightbulb,
  Globe,
  Shield
} from 'lucide-react';

const categoryColors = {
  health: 'emerald',
  education: 'blue',
  lifestyle: 'purple',
  technology: 'orange',
  insurance: 'indigo',
  travel: 'cyan',
  default: 'gray'
};

const categoryIcons = {
  Heart,
  BookOpen,
  Sparkles,
  Smartphone,
  MapPin,
  FileText,
  Lightbulb,
  Globe,
  Shield
};

export const getCategoryColor = (category: string): string => {
  return categoryColors[category as keyof typeof categoryColors] || categoryColors.default;
};

export const getCategoryIcon = (iconName: string) => {
  return categoryIcons[iconName as keyof typeof categoryIcons] || categoryIcons.FileText;
};

export const getCategoryDisplayName = (slug: string): string => {
  const displayNames: Record<string, string> = {
    health: 'Health & Wellness',
    education: 'Education',
    lifestyle: 'Lifestyle',
    technology: 'Technology',
    insurance: 'Insurance',
    travel: 'Travel'
  };
  
  return displayNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};