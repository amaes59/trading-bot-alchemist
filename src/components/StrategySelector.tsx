
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function StrategySelector() {
  return (
    <Card className="p-6 animate-slideIn">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Configuration</h3>
        <p className="text-sm text-muted-foreground">
          Paramètres de la stratégie
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Stratégie</label>
          <Select defaultValue="trend">
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une stratégie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trend">Suivi de tendance</SelectItem>
              <SelectItem value="breakout">Breakout</SelectItem>
              <SelectItem value="mean">Retour à la moyenne</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Paire de trading</label>
          <Select defaultValue="btc">
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une paire" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="btc">BTC/USD</SelectItem>
              <SelectItem value="eth">ETH/USD</SelectItem>
              <SelectItem value="sol">SOL/USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full">Activer le robot</Button>
      </div>
    </Card>
  );
}
