
import { TradingChart } from "@/components/TradingChart";
import { ActivePositions } from "@/components/ActivePositions";
import { StrategySelector } from "@/components/StrategySelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Trading Bot</h1>
          <p className="text-muted-foreground">
            Suivez et configurez votre robot de trading automatisé
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <TradingChart />
          <ActivePositions />
        </div>
        
        <div className="md:max-w-lg">
          <StrategySelector />
        </div>
      </div>
    </div>
  );
};

export default Index;
