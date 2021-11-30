import  React,{useState,useEffect,useCallback} from 'react';
import './App.css';
import './logo.svg';
import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoList from './components/TodoList';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';
import NodataTip from './components/NodataTip';

function App() {
  const [isInputShow,setisInputShow] = useState(false),
        [isShowCheckModal,setisShowCheckModal] = useState(false),
        [isShowEditModal,setisShowEditModal] = useState(false),
        [todoList,setTodoList] = useState([]),
        [currentData,setCurrentData] = useState({})


  useEffect(()=>{
   const todoData =JSON.parse(localStorage.getItem('todoData'));
   setTodoList(todoData) 
  },[])      

  useEffect(()=>{
    localStorage.setItem('todoData',JSON.stringify(todoList))
  },[todoList]);      

  const addItem = useCallback((val)=>{
    const dataItem = {
              id:new Date().getTime(),
              content:val,
              completed:false
    }
    setTodoList((todoList)=>[...todoList,dataItem]);
    setisInputShow(false);
    
  },[]);

  const openCheckModal = useCallback((id) =>{
        _setCurrentData(todoList,id);
        setisShowCheckModal(true);
  },[todoList])


  const openEditModal = useCallback((id) =>{
    _setCurrentData(todoList,id);
        setisShowEditModal(true);
  },[todoList])

  function _setCurrentData(todoList,id){
          setCurrentData(()=> todoList.filter(item=> item.id === id )[0]);
  }

  const submitData = useCallback((newData,id) =>{
        setTodoList((todoList)=>
          todoList.map((item,index)=>{
            if(item.id === id){
              item = newData;
            }
            return item;
          })
        )
        setisShowEditModal(false);

  },[todoList])

  const completedItem = useCallback((id)=>{
              setTodoList((todoList)=> todoList.map((item)=>{
                        if(item.id === id){
                            item.completed = !item.completed;
                        }
                        return item;
              }))
  },[]);

  const deleteItem = useCallback((id)=>{
    setTodoList((todoList)=> todoList.filter(item => item.id !== id));

},[]);
  return (
    <div className="App">
    <CheckModal
       isShowCheckModal={isShowCheckModal}
       closeModal={()=>setisShowCheckModal(false)}
       data={currentData}
    />
      <EditModal
       isShowEditModal={isShowEditModal}
       data={currentData}
       submitData={submitData}
    />
    <MyHeader openInput={()=>setisInputShow(!isInputShow)}/>  
    <AddInput 
              isInputShow={isInputShow}
              addItem={addItem}
    /> 
    {
      !todoList || todoList.length === 0
      ?
      <NodataTip />
      :
      (
        <ul>
                {
                  todoList.map((item,index)=>{
                    return (
                      <TodoList
                          key={index}
                          data={item}
                          openCheckModal={openCheckModal}
                          openEditModal={openEditModal}
                          completedItem={completedItem}
                          deleteItem={deleteItem}

                      />
                    )
                  
                  })
                }
                
        </ul>
      )
    }   
      
    
    </div>
  );
}

export default App;
