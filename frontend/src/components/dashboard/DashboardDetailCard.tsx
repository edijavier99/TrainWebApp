import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FormatCurrency } from "@/components/currencyConverter";

interface Props {
    title: string,
    value: number | JSX.Element, // Cambiar a número o JSX.Element
    isCurrency?: boolean,  // Propiedad opcional para determinar si es un valor en dinero
}

export const DashboardDetailCard = ({ title, value, isCurrency = false }: Props) => {
    return (
        <Card className="callout-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {value}
                    {/* {isCurrency ? <FormatCurrency amount={value as number} /> : value} */}
                </div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
        </Card>
    );
};