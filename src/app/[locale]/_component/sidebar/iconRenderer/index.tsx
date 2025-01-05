import * as Icons from "lucide-react";

interface IconRendererProps {
  iconName: string;
  size: number;
}

const IconRenderer = ({ iconName, size }: IconRendererProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[iconName];
  if (!Icon) {
    console.warn(`Icon "${iconName}" does not exist in Lucide icons.`);
    return null; // Return null if the icon doesn't exist
  }

  // Dynamically access the icon component from the imported icons
  return <Icon size={size} />;
};

export default IconRenderer;
