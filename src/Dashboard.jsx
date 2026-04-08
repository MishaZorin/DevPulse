import { useWidget } from './Context';
import { useNavigate } from "react-router-dom";
import './App.css'

function Dashboard() {
  const { addedWidgets,deleteWidgetFromDashboard } = useWidget();
  const {activeWidgets, setActiveWidgets} = useWidget()
  const navigate = useNavigate();
  function deleteWidget(widget){
    deleteWidgetFromDashboard(widget)

  }

  return (
    <div className="dashboard-page" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{color: 'white'}}>Dashboard</h1>
        <h5>{activeWidgets}</h5>
        <button onClick={() => navigate("/")} className='addButton'> Вернуться к выбору</button>
      </header>

      <main className="widgets-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {addedWidgets && addedWidgets.length > 0 ? (
          addedWidgets.map((widget, index) => {
            const WidgetComponent = widget.currentWidget;

            return (
              <div key={index} className="widget-card" >
                <h4 >{widget.currentName}</h4>
                <div className="widget-content">
                  <button onClick={()=> deleteWidget(widget)} className='addButton'>Delete widget</button>
                  <WidgetComponent />
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            <p>Вы еще не добавили ни одного виджета.</p>
            <button onClick={() => navigate("/")}>Выбрать виджеты</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;