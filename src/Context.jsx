import React, { createContext, useState, useContext } from 'react';
const WidgetContext = createContext();
export const WidgetProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [addedWidgets, setAddedWidgets] = useState([]);
  const [activeWidgets, setActiveWidgets] = useState(0)
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [taskDone, setTaskDone] = useState(3)
  const addWidgetToDashboard = (widget) => {
    setAddedWidgets((prev) => [...prev, widget]);
    setActiveWidgets((w) => w + 1)
  };
  const deleteWidgetFromDashboard = (widget) => {
    setActiveWidgets((w) => w - 1)
    setAddedWidgets((prev) => prev.filter((el) => {
      console.log(el, widget);
      return el !== widget

    }))


  }

  return (
    <WidgetContext.Provider value={{ taskDone, setTaskDone,email,setEmail,addedWidgets,setIsSignedUp,isSignedUp, addWidgetToDashboard, deleteWidgetFromDashboard, setActiveWidgets, activeWidgets, setAddedWidgets }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidget = () => useContext(WidgetContext);