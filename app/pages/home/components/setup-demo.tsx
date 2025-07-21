import { Badge } from "@/components/ui/badge";

interface SetupStep {
  step: number;
  title: string;
  color: string;
  items: string[];
  type: "accounts" | "assets" | "channels";
}

interface SetupDemoProps {
  title?: string;
  showRealTimeBadge?: boolean;
}

const defaultSteps: SetupStep[] = [
  {
    step: 1,
    title: "Select Accounts",
    color: "bg-green-500",
    type: "accounts",
    items: ["@elonmusk", "@cathiewood", "r/wallstreetbets"],
  },
  {
    step: 2,
    title: "Choose Assets",
    color: "bg-blue-500",
    type: "assets",
    items: ["TSLA", "BTC", "ETH", "AI"],
  },
  {
    step: 3,
    title: "Select Channels",
    color: "bg-purple-500",
    type: "channels",
    items: ["Telegram", "Email", "SMS"],
  },
];

const getChannelBadgeColor = (channel: string) => {
  switch (channel.toLowerCase()) {
    case "telegram":
      return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
    case "email":
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300";
    case "sms":
      return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300";
    default:
      return "bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300";
  }
};

export function SetupDemo({ title = "Live Setup Demo", showRealTimeBadge = true }: SetupDemoProps) {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-600/50">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-900 dark:text-white">{title}</span>
          </div>

          {defaultSteps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-2 mb-3">
                <div className={`w-2 h-2 ${step.color} rounded-full`}></div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Step {step.step}: {step.title}
                </span>
              </div>

              {step.type === "accounts" && (
                <div className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded"></div>
                      <span className="text-xs text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {step.type === "assets" && (
                <div className="flex flex-wrap gap-2">
                  {step.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                      {item}
                    </Badge>
                  ))}
                </div>
              )}

              {step.type === "channels" && (
                <div className="flex flex-wrap gap-2">
                  {step.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className={`text-xs ${getChannelBadgeColor(item)}`}>
                      {item}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showRealTimeBadge && (
        <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-slate-900 dark:text-white">Real-time</span>
          </div>
        </div>
      )}
    </div>
  );
}
