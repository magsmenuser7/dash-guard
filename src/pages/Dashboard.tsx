import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  BrainCircuit, 
  BarChart3, 
  Upload, 
  Settings, 
  Play, 
  Pause, 
  Square, 
  TestTube2,
  TrendingUp,
  Database,
  Activity,
  FileText,
  Zap
} from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  const handleStartTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
    
    // Simulate training progress
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          toast({
            title: "Training Complete",
            description: "Your AI agent has been successfully trained!",
          });
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const handleTestModel = () => {
    setShowResponse(true);
    setTimeout(() => setShowResponse(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <BrainCircuit className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">AI Agent Training Studio</h1>
              <p className="text-muted-foreground">Train and customize your intelligent AI agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-6 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card border border-border">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="training-data" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Training Data
            </TabsTrigger>
            <TabsTrigger value="model-config" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Model Config
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Training
            </TabsTrigger>
            <TabsTrigger value="testing" className="flex items-center gap-2">
              <TestTube2 className="w-4 h-4" />
              Testing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-border shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Models</CardTitle>
                  <TrendingUp className="w-4 h-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">3</div>
                  <p className="text-xs text-success">+1 from last week</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Training Sessions</CardTitle>
                  <Activity className="w-4 h-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">12</div>
                  <p className="text-xs text-primary">+3 this month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Data Records</CardTitle>
                  <FileText className="w-4 h-4 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">5,650</div>
                  <p className="text-xs text-muted-foreground">Across all datasets</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Training Activity */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Activity className="w-5 h-5" />
                  Recent Training Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-foreground">Customer Support Agent</h4>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-success text-white">Completed</Badge>
                    <span className="text-sm font-medium text-success">94.2%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-foreground">Product Assistant</h4>
                    <p className="text-sm text-muted-foreground">In progress</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-warning text-white">Training</Badge>
                    <span className="text-sm font-medium text-warning">89.1%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-foreground">FAQ Bot</h4>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-success text-white">Completed</Badge>
                    <span className="text-sm font-medium text-success">91.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Training Data Tab */}
          <TabsContent value="training-data" className="space-y-6">
            {/* Upload Section */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Upload className="w-5 h-5" />
                  Upload Training Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">Drop your training files here</h3>
                  <p className="text-muted-foreground mb-4">Supports JSON, CSV, TXT formats</p>
                  <Button variant="outline">Browse Files</Button>
                </div>
              </CardContent>
            </Card>

            {/* Existing Datasets */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Existing Datasets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">Customer Support</h4>
                      <p className="text-sm text-muted-foreground">1500 records • 2.5MB</p>
                    </div>
                  </div>
                  <Badge className="bg-success text-white">ready</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">Product Knowledge</h4>
                      <p className="text-sm text-muted-foreground">3200 records • 5.1MB</p>
                    </div>
                  </div>
                  <Badge className="bg-warning text-white">processing</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">FAQ Responses</h4>
                      <p className="text-sm text-muted-foreground">950 records • 1.8MB</p>
                    </div>
                  </div>
                  <Badge className="bg-success text-white">ready</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Model Config Tab */}
          <TabsContent value="model-config" className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Settings className="w-5 h-5" />
                  Base Model Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="base-model" className="text-foreground">Choose Base Model</Label>
                  <Select defaultValue="custom">
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom Model</SelectItem>
                      <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="claude-3">Claude 3 Sonnet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Training Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="learning-rate" className="text-foreground">Learning Rate</Label>
                    <Input id="learning-rate" defaultValue="0.001" className="bg-input border-border" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batch-size" className="text-foreground">Batch Size</Label>
                    <Input id="batch-size" defaultValue="32" className="bg-input border-border" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="epochs" className="text-foreground">Epochs</Label>
                    <Input id="epochs" defaultValue="10" className="bg-input border-border" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="text-foreground">Temperature</Label>
                    <Input id="temperature" defaultValue="0.7" className="bg-input border-border" disabled />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="system-prompt" className="text-foreground">System Prompt</Label>
                  <Textarea 
                    id="system-prompt" 
                    defaultValue="You are a helpful AI assistant that..."
                    className="bg-input border-border min-h-[100px]"
                    disabled
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Training Tab */}
          <TabsContent value="training" className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Play className="w-5 h-5" />
                  Training Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button 
                      variant="gradient" 
                      className="flex items-center gap-2"
                      onClick={handleStartTraining}
                      disabled={isTraining}
                    >
                      <Play className="w-4 h-4" />
                      {isTraining ? "Training..." : "Start Training"}
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" disabled={!isTraining}>
                      <Pause className="w-4 h-4" />
                      Pause
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" disabled={!isTraining}>
                      <Square className="w-4 h-4" />
                      Stop
                    </Button>
                  </div>
                  {isTraining && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Training Progress</span>
                        <span className="text-foreground font-medium">{trainingProgress}%</span>
                      </div>
                      <Progress value={trainingProgress} className="w-full" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Training Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-1">
                  <div className="text-blue-400">[2024-01-15 10:30:22] Initializing training session...</div>
                  <div className="text-green-400">[2024-01-15 10:30:23] Loading dataset: Customer Support (1500 records)</div>
                  <div className="text-blue-400">[2024-01-15 10:30:24] Base model: GPT-3.5 Turbo loaded</div>
                  <div className="text-yellow-400">[2024-01-15 10:30:25] Starting fine-tuning process...</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testing Tab */}
          <TabsContent value="testing" className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <TestTube2 className="w-5 h-5" />
                  Test Your AI Agent
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="test-message" className="text-foreground">Test Message</Label>
                  <Textarea 
                    id="test-message" 
                    placeholder="Enter a message to test your AI agent..."
                    className="bg-input border-border min-h-[100px]"
                  />
                </div>
                <Button variant="gradient" className="w-full" onClick={handleTestModel}>
                  Test Model Response
                </Button>
                {showResponse && (
                  <div className="mt-4 p-4 bg-muted/20 rounded-lg border border-border">
                    <h4 className="font-medium text-foreground mb-2">Model Response</h4>
                    <p className="text-muted-foreground text-sm">
                      This is a simulated response from your trained AI agent.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">Model Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Accuracy</span>
                      <span className="text-2xl font-bold text-success">94.2%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <span className="text-2xl font-bold text-primary">1.2s</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Confidence Score</span>
                      <span className="text-2xl font-bold text-accent">87.5%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Error Rate</span>
                      <span className="text-2xl font-bold text-error">5.8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
