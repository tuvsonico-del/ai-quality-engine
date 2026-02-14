import { cn } from "@/lib/utils";

interface AiBotProps {
  size?: number;
  thinking?: boolean;
  className?: string;
}

const AiBot = ({ size = 40, thinking = false, className }: AiBotProps) => (
  <div className={cn("relative inline-flex items-center justify-center", thinking && "animate-pulse-glow", className)}>
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head outline */}
      <rect x="6" y="8" width="28" height="24" rx="6" stroke="url(#botGrad)" strokeWidth="1.5" fill="hsl(228 40% 10% / 0.8)" />
      {/* Antenna */}
      <line x1="20" y1="8" x2="20" y2="3" stroke="url(#botGrad)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="2" r="2" fill="hsl(187 85% 53%)" className="animate-pulse-glow" />
      {/* Eyes */}
      <circle cx="14" cy="20" r="3" fill="hsl(187 85% 53%)" opacity={thinking ? "0.6" : "1"}>
        {thinking && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />}
      </circle>
      <circle cx="26" cy="20" r="3" fill="hsl(187 85% 53%)" opacity={thinking ? "0.6" : "1"}>
        {thinking && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" begin="0.2s" />}
      </circle>
      {/* Eye glow */}
      <circle cx="14" cy="20" r="5" fill="hsl(187 85% 53% / 0.15)" />
      <circle cx="26" cy="20" r="5" fill="hsl(187 85% 53% / 0.15)" />
      {/* Mouth */}
      <rect x="15" y="26" width="10" height="1.5" rx="0.75" fill="hsl(239 84% 67% / 0.6)" />
      <defs>
        <linearGradient id="botGrad" x1="6" y1="8" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(187, 85%, 53%)" />
          <stop offset="1" stopColor="hsl(263, 70%, 76%)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default AiBot;
