import { Button } from "@/components/ui/enhanced-button";
import { BrainCircuit, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-full bg-gradient-primary shadow-glow">
            <BrainCircuit className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          AI Training <span className="text-primary">Admin Panel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Powerful interface to train, monitor, and deploy your AI models with
          advanced analytics and real-time monitoring.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => navigate('/login')}
            className="min-w-[200px]"
          >
            <BrainCircuit className="w-5 h-5" />
            Access Admin Panel
          </Button>
          
          <Button 
            variant="outline-primary" 
            size="xl"
            className="min-w-[200px]"
          >
            <Zap className="w-5 h-5" />
            Start Training
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-4">
              <BrainCircuit className="w-8 h-8 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">AI Training</h3>
            <p className="text-muted-foreground">
              Upload datasets and train custom AI models with advanced configuration options.
            </p>
            <Button variant="glass" className="mt-4 w-full">
              Explore Training
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Analytics Dashboard</h3>
            <p className="text-muted-foreground">
              Monitor model performance, training metrics, and system health in real-time.
            </p>
            <Button variant="glass" className="mt-4 w-full">
              View Dashboard
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-4">
              <Zap className="w-8 h-8 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Model Management</h3>
            <p className="text-muted-foreground">
              Deploy, version, and manage your AI models with enterprise-grade controls.
            </p>
            <Button variant="glass" className="mt-4 w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;