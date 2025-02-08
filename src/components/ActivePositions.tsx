
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const positions = [
  {
    pair: "BTC/USD",
    type: "LONG",
    entryPrice: 42000,
    currentPrice: 43500,
    profit: 3.57,
  },
  {
    pair: "ETH/USD",
    type: "SHORT",
    entryPrice: 2800,
    currentPrice: 2750,
    profit: 1.79,
  },
];

export function ActivePositions() {
  return (
    <Card className="p-6 animate-slideIn">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Positions Actives</h3>
        <p className="text-sm text-muted-foreground">
          Positions de trading en cours
        </p>
      </div>
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{position.pair}</span>
                <Badge
                  variant={position.type === "LONG" ? "default" : "destructive"}
                >
                  {position.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Entrée: ${position.entryPrice}
              </p>
            </div>
            <div className="text-right">
              <div className="font-medium">${position.currentPrice}</div>
              <div
                className={`text-sm ${
                  position.profit >= 0 ? "text-success" : "text-danger"
                }`}
              >
                {position.profit >= 0 ? "+" : ""}
                {position.profit}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
