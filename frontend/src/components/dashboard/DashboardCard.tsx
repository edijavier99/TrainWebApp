import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FormatCurrency } from "@/components/currencyConverter";  // Asegúrate de importar el formato correctamente

interface Props {
    title: string;
    children?: React.ReactNode; // Propiedad para aceptar children en el cuerpo
}

const DashboardCard = ({ title, children }: Props) => {
    return (
        <Card className="callout-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children && <div>{children}</div>}
                {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
