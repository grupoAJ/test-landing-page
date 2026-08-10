import {
  Calculator,
  Factory,
  Boxes,
  ShoppingCart,
  Users,
  Truck,
  LineChart,
  Clock,
  LayoutGrid,
  ShieldCheck,
  Building2,
  History,
  BarChart3,
  FileText,
  KanbanSquare,
  Wrench,
  HardHat,
  Sprout,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Calculator,
  Factory,
  Boxes,
  ShoppingCart,
  Users,
  Truck,
  LineChart,
  Clock,
  LayoutGrid,
  ShieldCheck,
  Building2,
  History,
  BarChart3,
  FileText,
  KanbanSquare,
  Wrench,
  HardHat,
  Sprout,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? LayoutGrid;
  return <Cmp className={className} aria-hidden="true" />;
}
