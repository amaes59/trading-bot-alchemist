
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { toast } from "./ui/use-toast";
import { StockData } from "@/types/stockData";

export function DataImporter() {
  const [data, setData] = useState<StockData[]>([]);

  const parseCSV = (text: string): StockData[] => {
    return text.split('\n')
      .filter(line => line.trim() !== '')
      .map(line => {
        const [isin, dateStr, openStr, highStr, lowStr, closeStr, volumeStr] = line.split(';');
        
        // Convertir la date du format DD/MM/YYYY
        const [day, month, year] = dateStr.split('/');
        const date = new Date(Number(year), Number(month) - 1, Number(day));

        return {
          isin,
          date,
          open: parseFloat(openStr.replace(',', '.')),
          high: parseFloat(highStr.replace(',', '.')),
          low: parseFloat(lowStr.replace(',', '.')),
          close: parseFloat(closeStr.replace(',', '.')),
          volume: parseInt(volumeStr, 10)
        };
      });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsedData = parseCSV(text);
        setData(parsedData);
        toast({
          title: "Import réussi",
          description: `${parsedData.length} lignes importées`
        });
      } catch (error) {
        toast({
          title: "Erreur d'import",
          description: "Le format du fichier n'est pas valide",
          variant: "destructive"
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Import des données</h3>
            <p className="text-sm text-muted-foreground">
              Format: ISIN;Date;Open;High;Low;Close;Volume
            </p>
          </div>
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              id="csv-upload"
            />
            <label htmlFor="csv-upload">
              <Button variant="outline" asChild>
                <span>Importer CSV</span>
              </Button>
            </label>
          </div>
        </div>

        {data.length > 0 && (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ISIN</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Open</TableHead>
                  <TableHead className="text-right">High</TableHead>
                  <TableHead className="text-right">Low</TableHead>
                  <TableHead className="text-right">Close</TableHead>
                  <TableHead className="text-right">Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.slice(0, 10).map((row, index) => (
                  <TableRow key={`${row.isin}-${index}`}>
                    <TableCell>{row.isin}</TableCell>
                    <TableCell>{row.date.toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">{row.open.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{row.high.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{row.low.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{row.close.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{row.volume.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </Card>
  );
}
