import { DashboardDetailCard } from "./DashboardDetailCard"


const AdminDashboard = () =>{
    return(
        <div>
            <div className="grid grid-cols-3 gap-5">
                <DashboardDetailCard title="Clients" value={5} />
                <DashboardDetailCard title="Articles" value={15} />
                <DashboardDetailCard title="Montly Income" value={1500} />
            </div>
            
        </div>
    )
}

export default AdminDashboard