import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Shield, Brain, Bell, Twitter, MessageCircle, Globe, CheckCircle, Clock, Mail, AlertTriangle, BarChart3, Target, Sparkles, Smartphone, MessageSquare } from "lucide-react";
import Image from "next/image";
import WaitlistForm from "./components/waitlist-form";
import { LiveMarketIntelligence } from "@/app/pages/home/components/live-market-alerts";
import { SetupDemo } from "@/app/pages/home/components/setup-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-blue-50/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center space-x-2">
            <div className="rounded-lg flex items-center justify-center">
              <Image src="/sentify.png" alt="Sentify Logo" width={25} height={25} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">Sentify</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#roadmap" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Roadmap
            </a>
            <a href="#get-started" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Get Started
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#top">
              <Button size="sm" className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Financial Intelligence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">Stay Ahead of the Market</h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed">Real-time monitoring of Twitter, Reddit, and news sites. AI-powered sentiment analysis delivers instant alerts about your portfolio assets via Telegram, SMS, email, push notifications, Discord, and phone calls.</p>
              <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-3xl mx-auto">Whether Elon Musk tweets about Tesla or breaking news drops about Bitcoin regulation, get personalized alerts instantly across all your preferred channels. Never miss market-moving events again.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get Early Access</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">Be among the first to experience the future of financial intelligence. Sign up for early access and get exclusive updates.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Early Bird Pricing</h3>
                      <p className="text-slate-600 dark:text-slate-400">Get 50% off for the first 3 months</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Priority Support</h3>
                      <p className="text-slate-600 dark:text-slate-400">Direct access to our development team</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Feature Requests</h3>
                      <p className="text-slate-600 dark:text-slate-400">Help shape the future of the platform</p>
                    </div>
                  </div>
                </div>

                <WaitlistForm />
              </div>

              <LiveMarketIntelligence />
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Your Personal Financial Analyst</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Whether Elon Musk tweets about Tesla or breaking news drops about Bitcoin regulation, get personalized alerts instantly across all your preferred channels.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-blue-50/90 dark:bg-slate-800/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">AI Sentiment Analysis</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Advanced AI analyzes tone, sentiment, and potential market impact of every post, tweet, and news article.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-blue-50/90 dark:bg-slate-800/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Multi-Channel Alerts</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Get instant notifications via Telegram, SMS, email, push notifications, Discord, and phone calls.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-blue-50/90 dark:bg-slate-800/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Portfolio Protection</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Stay informed about market-moving events before they impact your investments.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start px-3">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Monitor Multiple Sources</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700 dark:bg-slate-300 rounded-lg flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-white dark:text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Twitter</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Real-time tweets from influencers and companies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700 dark:bg-slate-300 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white dark:text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Reddit</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Community discussions and sentiment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700 dark:bg-slate-300 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white dark:text-slate-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">News Sites</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Breaking financial news and analysis</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Track What Matters</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Stocks</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Monitor individual stocks, ETFs, and market indices</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Cryptocurrencies</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Track Bitcoin, Ethereum, and altcoin movements</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Keywords</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Set custom alerts for specific terms and phrases</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Get Alerts Your Way</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Telegram</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">SMS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Email</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Push</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Discord</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Phone Calls</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <LiveMarketIntelligence title="Live Monitoring" />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-blue-50/50 dark:bg-slate-900/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">How It Works</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">Get started in minutes with our simple 4-step process. Set up your monitoring preferences and start receiving intelligent alerts across all your preferred channels.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Select Accounts</h3>
                <p className="text-slate-600 dark:text-slate-400">Choose the social media accounts you want to track</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Choose Assets</h3>
                <p className="text-slate-600 dark:text-slate-400">Select stock/crypto tickers or keywords to monitor</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">AI Analysis</h3>
                <p className="text-slate-600 dark:text-slate-400">Our AI analyzes the newest posts in real-time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Get Notified</h3>
                <p className="text-slate-600 dark:text-slate-400">Receive alerts on your selected channels</p>
              </div>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Simple Setup, Powerful Results</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-slate-700 dark:bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Twitter className="w-4 h-4 text-white dark:text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Track Influential Accounts</h4>
                      <p className="text-slate-600 dark:text-slate-400">Follow Elon Musk, Cathie Wood, and other market movers. Add any Twitter, Reddit, or news source that matters to your portfolio.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-slate-700 dark:bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4 text-white dark:text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Monitor Your Assets</h4>
                      <p className="text-slate-600 dark:text-slate-400">Add TSLA, BTC, ETH, or any custom keywords. Get alerts only when your specific assets are mentioned.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-slate-700 dark:bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bell className="w-4 h-4 text-white dark:text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Choose Your Channels</h4>
                      <p className="text-slate-600 dark:text-slate-400">Get notified via Telegram, SMS, email, push notifications, Discord, or phone calls. Mix and match as you prefer.</p>
                    </div>
                  </div>
                </div>
              </div>
              <SetupDemo />
            </div>
          </div>
        </section>

        <section id="roadmap" className="bg-slate-50/50 dark:bg-slate-800/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Product Roadmap</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">We&apos;re constantly innovating to provide you with the most comprehensive financial intelligence platform. Here&apos;s what&apos;s coming next.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">Smart Stock Recommendations</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">AI-powered buy/sell signals based on social sentiment, news analysis, and market trends. Get actionable recommendations for your portfolio.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">Earnings & News Integration</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">Comprehensive earnings calendar, financial news aggregation, and real-time updates on company events that impact stock prices.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">Content Summarization</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">AI-powered summaries of YouTube videos, Reddit discussions, and news articles. Get the key insights without reading everything.</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Coming Soon</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Portfolio Analytics Dashboard</h4>
                      <p className="text-slate-600 dark:text-slate-400">Advanced portfolio tracking with performance metrics, risk analysis, and correlation insights based on social sentiment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Market Timing Alerts</h4>
                      <p className="text-slate-600 dark:text-slate-400">Get notified about optimal entry and exit points based on sentiment shifts and market momentum indicators.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Predictive Analytics</h4>
                      <p className="text-slate-600 dark:text-slate-400">Machine learning models that predict short-term price movements based on social sentiment patterns and news cycles.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Future Vision</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Automated Trading Signals</h4>
                      <p className="text-slate-600 dark:text-slate-400">Integration with broker APIs for automated trading based on AI-generated signals and risk management rules.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Global Market Coverage</h4>
                      <p className="text-slate-600 dark:text-slate-400">Expand beyond US markets to include European, Asian, and emerging market stocks and cryptocurrencies.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Community Features</h4>
                      <p className="text-slate-600 dark:text-slate-400">User-generated insights, discussion forums, and collaborative investment strategies with sentiment analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="get-started" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Ready to Stay Ahead?</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">Don&apos;t wait for the market to move without you. Start making smarter decisions with AI-powered insights delivered across all your preferred channels.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <WaitlistForm description="Be among the first to experience the future of financial intelligence." />

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Early Bird Pricing</h3>
                    <p className="text-slate-600 dark:text-slate-400">Get 50% off for the first 3 months</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Priority Support</h3>
                    <p className="text-slate-600 dark:text-slate-400">Direct access to our development team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Feature Requests</h3>
                    <p className="text-slate-600 dark:text-slate-400">Help shape the future of the platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-blue-50/90 dark:bg-slate-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="#top" className="flex items-center space-x-2 mb-4">
                <div className="rounded-lg flex items-center justify-center">
                  <Image src="/sentify.png" alt="Sentify Logo" width={25} height={25} />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">Sentify</span>
              </a>
              <p className="text-slate-600 dark:text-slate-400 mb-4">AI-powered financial intelligence for modern investors. Stay ahead of the market with real-time insights.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Support</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 md:mb-0">© 2025 Sentify. All rights reserved.</div>
            <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
              <span>Made with ❤️ for investors</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
