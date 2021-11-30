import React,{useState,useRef} from 'react'
import Css from './index.module.css';
export default function AddInput(props) {
    // console.log(props);
    const {isInputShow,addItem} = props;
    const [changeColor,setchangeColor] = useState(false);
    const inputRef = useRef();

    const submitValue = ()=>{
     const inputValue = inputRef.current.value.trim();
     if(inputValue.length === 0){
            return ''
     }
     addItem(inputValue)
     inputRef.current.value = '';
    }

    return (
        isInputShow ? (
                  <div className={Css.input }>
                    <input type="text" 
                     placeholder="请输入需要保存的事情!!"
                     onFocus={()=> setchangeColor(true)}
                     onBlur={()=> setchangeColor(false)}
                     className={changeColor ? Css.inputChage : ''}
                     ref={inputRef}
                    />
                    <button 
                     onClick={submitValue}
                    >确定</button>
                </div>
        ) : ''
  
    )
}
