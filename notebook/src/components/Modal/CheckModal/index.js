import React,{} from 'react'
import Css from './index.module.css';
import Modal from '..';
import formatDataTime from '../../../libs/Date';

export default function CheckModal(props) {

const {isShowCheckModal,data,closeModal} = props;



     
    return (
       <Modal
        isShowModal={isShowCheckModal}
        modalTitle="查看事件"
       >
         <p className={Css.topic}>时间：{formatDataTime(data.id)}</p>
         <p className={Css.topic}>内容：{data.content}</p>
         <p className={Css.topic}>状态：{data.completed ? '已完成' : '未完成'}</p>
         <button onClick={closeModal}>
             确定
         </button>
       </Modal>
    )
}
