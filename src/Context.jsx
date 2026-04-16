import React, { createContext, useState, useContext } from 'react';
const WidgetContext = createContext();
export const WidgetProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [addedWidgets, setAddedWidgets] = useState([]);
  const [activeWidgets, setActiveWidgets] = useState(0)
  const [isSignedUp, setIsSignedUp] = useState(false)

  function signUpCheck(){}
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
    <WidgetContext.Provider value={{ addedWidgets, addWidgetToDashboard,deleteWidgetFromDashboard, setActiveWidgets, activeWidgets, setAddedWidgets }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = () => useContext(WidgetContext);