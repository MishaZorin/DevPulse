import React, { createContext, useState, useContext } from 'react';
const WidgetContext = createContext();
export const WidgetProvider = ({ children }) => {
  const [addedWidgets, setAddedWidgets] = useState([]);
  const [activeWidgets, setActiveWidgets] = useState(0)
  const addWidgetToDashboard = (widget) => {
    setAddedWidgets((prev) => [...prev, widget]);
      setActiveWidgets((w)=> w + 1)
  };
  const deleteWidgetFromDashboard = (widget) =>{
    setActiveWidgets((w)=> w - 1)
     setAddedWidgets((prev) =>
    prev.filter(w => w.currentName !== widget.currentName)
  );
  }

  return (
    <WidgetContext.Provider value={{ addedWidgets, addWidgetToDashboard,deleteWidgetFromDashboard, setActiveWidgets, activeWidgets }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = () => useContext(WidgetContext);