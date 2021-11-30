import React,{} from 'react'
import Css from './index.module.css';
export default function TodoList(props) {
  const {data,openCheckModal,openEditModal,completedItem,deleteItem} = props;
    return (
            <li className={Css.todo_item}>
                <div className={Css.check_box}>
                  <input type="checkbox" checked={data.completed} 
                      onChange={()=> completedItem(data.id)}
                  />
                        
                </div>
                <span className={Css.content}>
                      {data.content}
                </span>
                <div className={Css.btn}>
                    <button className={Css.one}
                            onClick={()=>openCheckModal(data.id)}
                    >查看</button>
                    <button className={Css.two}
                            onClick={()=>openEditModal(data.id)}
                    >编辑</button>
                    <button className={Css.three}
                            onClick={()=>deleteItem(data.id)}
                    >删除</button>
                </div>
            </li>
  
    )
}
