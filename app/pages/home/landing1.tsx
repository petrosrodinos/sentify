import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TrendingUp, Zap, Shield, Brain, Bell, Twitter, MessageCircle, Globe, ArrowRight, CheckCircle, Star, Users, Clock, Mail } from "lucide-react";
import { LiveMarketIntelligence } from "@/app/pages/home/components/live-market-alerts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white dark:text-slate-900" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">Sentify</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              Sign In
            </Button>
            <Button size="sm" className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
              Get Started
            </Button>
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
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed">Real-time monitoring of Twitter, Reddit, and news sites. AI-powered sentiment analysis delivers instant alerts about your portfolio assets.</p>
              <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 max-w-3xl mx-auto">Whether Elon Musk tweets about Tesla or breaking news drops about Bitcoin regulation, get personalized alerts instantly. Never miss market-moving events again.</p>
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

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Join the Waitlist
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Get notified when we launch and receive exclusive early access.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent" />
                    <Button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 whitespace-nowrap">Join Waitlist</Button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">No spam, ever. Unsubscribe at any time.</p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-8 border border-slate-200/50 dark:border-slate-600/50">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-slate-900 dark:text-white">Live Market Intelligence</span>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Twitter className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">@elonmusk • 2m ago</span>
                        <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 ml-auto">
                          Bullish
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-900 dark:text-white mb-2">Tesla Q4 results exceeded expectations. Production ramping up significantly.</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                          TSLA
                        </Badge>
                        <span className="text-xs text-green-600 dark:text-green-400">+5.2%</span>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <Globe className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">Reuters • 5m ago</span>
                        <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 ml-auto">
                          Positive
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-900 dark:text-white mb-2">Bitcoin ETF approval expected this week, sources say</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                          BTC
                        </Badge>
                        <span className="text-xs text-green-600 dark:text-green-400">+3.8%</span>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <MessageCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-xs text-slate-500 dark:text-slate-400">r/wallstreetbets • 8m ago</span>
                        <Badge variant="secondary" className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 ml-auto">
                          Bearish
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-900 dark:text-white mb-2">Market sentiment shifting negative on tech stocks</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                          NASDAQ
                        </Badge>
                        <span className="text-xs text-red-600 dark:text-red-400">-1.2%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-900 dark:text-white">Real-time</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">Join 2,500+ investors already on the waitlist</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Your Personal Financial Analyst</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Whether Elon Musk tweets about Tesla or breaking news drops about Bitcoin regulation, get personalized alerts instantly.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">AI Sentiment Analysis</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Advanced AI analyzes tone, sentiment, and potential market impact of every post, tweet, and news article.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Instant Alerts</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Get real-time notifications when relevant content affects your specific portfolio assets.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Portfolio Protection</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Stay informed about market-moving events before they impact your investments.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <LiveMarketIntelligence title="Live Monitoring" />
          </div>
        </section>

        <section className="bg-white/50 dark:bg-slate-900/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Why Choose Sentify?</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Join thousands of investors who stay ahead of the curve with AI-powered market intelligence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">24/7 Monitoring</h3>
                <p className="text-slate-600 dark:text-slate-400">Never miss important market events</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">95% Accuracy</h3>
                <p className="text-slate-600 dark:text-slate-400">AI-powered sentiment analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">10K+ Users</h3>
                <p className="text-slate-600 dark:text-slate-400">Trusted by investors worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">4.9/5 Rating</h3>
                <p className="text-slate-600 dark:text-slate-400">Exceptional user satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">Ready to Stay Ahead?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">Start your free trial today and experience the power of AI-driven market intelligence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white dark:text-slate-900" />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">Sentify</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">AI-powered financial intelligence for modern investors.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    API
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
                <li>
                  <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Careers
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
          <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">© 2024 Sentify. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
