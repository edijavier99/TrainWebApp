import ProgressChart from "../charts/ProgressChart";
import AddWeightRecord from "../forms/AddWeightRecord";
import { Card } from "../ui/card";

const ProgressAnalytics = () => {
    return (
        <section className="space-y-6">
            <div className="flex flex-col items-start space-y-3">
                <h2 className="text-lg font-semibold text-gray-600">Analytics Overview</h2>
                <p className="text-gray-500 text-md">
                    Track your weight progress over time and add new weight records easily. 
                    Visualize your journey with detailed charts and data.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProgressChart />
                    <Card className="p-4 ">
                        <h3 className="text-md font-semibold text-gray-800 mb-4">Add New Weight Record</h3>
                        <AddWeightRecord client_id={1} />
                    </Card>
            </div>
        </section>
    );
};

export default ProgressAnalytics;
