
import Css from './index.module.css';

export default function Header (props){
const {openInput} = props;

    return(
        <div className={Css.header}>
                 <h1>记事本</h1>
                 <div
                  className={Css.icon}
                  onClick={openInput}
                 >
                  <img src={require('../../assets/images/add.png').default}  style={{width:'2rem'}}/>
                 </div>
        </div>
    )
}