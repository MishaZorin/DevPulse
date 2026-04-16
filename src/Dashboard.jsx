import { useWidget } from './Context';
import { useNavigate } from "react-router-dom";
import './App.css'

function Dashboard() {
  const { addedWidgets, deleteWidgetFromDashboard, setAddedWidgets } = useWidget();
  const { activeWidgets, setActiveWidgets } = useWidget()
  const navigate = useNavigate();
  function cleanAll(){
    setAddedWidgets([])
    setActiveWidgets(0)
  }
  

  return (
    <div className="dashboard-page" style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: 'white' }}>Dashboard</h1>
        <h5 style={{color:'white', fontSize:'30px'}}>{activeWidgets}</h5>
        <button onClick={()=> cleanAll() }>Clean all</button>
        <button onClick={() => navigate("/")} className='addButton'> Вернуться к выбору</button>
      </header>
      <div className="centerMobile">
          {addedWidgets && addedWidgets.length > 0 ? (
            addedWidgets.map((widget, index) => {
              const WidgetComponent = widget.currentWidget;

              return (
                <div key={index} style={{marginTop:'10px'}}>
                  <div  className="widget-card" >
                    <div className="margin">
                      {/* <h4 >{widget.currentName}</h4> */}
                      <div className="widget-content">
                        
                        <WidgetComponent />
                      </div>
                    </div>
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
      
      </div>
    </div>
  );
}

export default Dashboard;