"use client";

import { Badge } from "@/components/ui/badge";
import { Twitter, Globe, MessageCircle, Youtube } from "lucide-react";
import { useAlerts } from "@/features/alerts/hooks/use-alerts";
import { Alert, MediaSubscriptionPlatformTypes } from "@/features/alerts/interfaces/alert.interface";

interface LiveMarketIntelligenceProps {
  title?: string;
  showRealTimeBadge?: boolean;
}

const getSourceIcon = (platformType: string) => {
  switch (platformType) {
    case MediaSubscriptionPlatformTypes.twitter:
      return <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
    case MediaSubscriptionPlatformTypes.news:
      return <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
    case MediaSubscriptionPlatformTypes.reddit:
      return <MessageCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
    case MediaSubscriptionPlatformTypes.youtube:
      return <Youtube className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
    default:
      return <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
  }
};

const getSentimentBadge = (sentiment: string) => {
  const isPositive = sentiment === "positive";
  const isNegative = sentiment === "negative";

  let className = "text-xs ml-auto";

  if (isPositive) {
    className += " bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
  } else if (isNegative) {
    className += " bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300";
  } else {
    className += " bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300";
  }

  return (
    <Badge variant="secondary" className={className}>
      {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
    </Badge>
  );
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "text-red-600 dark:text-red-400";
    case "medium":
      return "text-yellow-600 dark:text-yellow-400";
    case "low":
      return "text-green-600 dark:text-green-400";
    default:
      return "text-gray-600 dark:text-gray-400";
  }
};

const formatTimeAgo = (createdAt: string) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const diffInSeconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }
};

export function LiveMarketIntelligence({ title = "Live Market Intelligence", showRealTimeBadge = true }: LiveMarketIntelligenceProps) {
  const { data: alertsResponse, isLoading, error } = useAlerts();

  if (isLoading) {
    return (
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-600/50">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-900 dark:text-white">{title}</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !alertsResponse?.data) {
    return (
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-600/50">
          <div className="text-center text-slate-500 dark:text-slate-400">Unable to load market alerts at this time.</div>
        </div>
      </div>
    );
  }

  const alerts = alertsResponse.data;

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-600/50">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-900 dark:text-white">{title}</span>
          </div>

          {alerts.map((alert: Alert) => (
            <div key={alert.id} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-2 mb-2">
                {getSourceIcon(alert.platform_type)}
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {alert.account_name || alert.screen_name} • {formatTimeAgo(alert.created_at)}
                </span>
                {getSentimentBadge(alert.sentiment)}
              </div>
              <p className="text-sm text-slate-900 dark:text-white mb-2">{alert.description}</p>
              <div className="flex items-center space-x-2 flex-wrap">
                {alert.tickers.map((ticker, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                    {ticker.ticker}
                  </Badge>
                ))}
                <span className={`text-xs ${getSeverityColor(alert.severity)}`}>{alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)} Impact</span>
              </div>
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
