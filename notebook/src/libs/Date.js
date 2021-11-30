function addZero(val){
     return val < 10 ? ('0' + val) : val;
}

export default function formatDataTime(timeStamp){

    const date = new Date(timeStamp);
    const y = date.getFullYear(),
          m = date.getMonth() +1,
          d = date.getDate(),
          h = addZero(date.getHours()),
          i = addZero(date.getMinutes()),
          s = addZero(date.getSeconds());
    return `${y}年${m}月${d}日 ${h}:${i}:${s}`;
    


}