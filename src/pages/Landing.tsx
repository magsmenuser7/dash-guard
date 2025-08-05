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
      
      <div className="relative z-10 text-center max-w-4xl px-8 mx-auto relative overflow-hidden py-8">
        {/* Logo/Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-3 rounded-full bg-gradient-primary shadow-glow">
            <BrainCircuit className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          AI Training <span className="text-primary">Admin Panel</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
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
          
          {/* <Button 
            variant="outline-primary" 
            size="xl"
            className="min-w-[200px]"
          >
            <Zap className="w-5 h-5" />
            Start Training
          </Button> */}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 px-4">
          <div className="p-5 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-3">
              <BrainCircuit className="w-6 h-6 text-primary mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">AI Training</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Upload datasets and train custom AI models with advanced configuration options.
            </p>
            <Button variant="glass" className="w-full" size="sm">
              Explore Training
            </Button>
          </div>

          <div className="p-5 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-3">
              <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-primary rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Analytics Dashboard</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Monitor model performance, training metrics, and system health in real-time.
            </p>
            <Button variant="glass" className="w-full" size="sm">
              View Dashboard
            </Button>
          </div>

          <div className="p-5 rounded-xl bg-gradient-card border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-3">
              <Zap className="w-6 h-6 text-primary mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Model Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Deploy, version, and manage your AI models with enterprise-grade controls.
            </p>
            <Button variant="glass" className="w-full" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;