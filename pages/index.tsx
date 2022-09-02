import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [checkList, setCheckList] = useState([]);
  const [checkAll, setCheckAll] = useState(false);


  const total_chkbox_id = ['1','2','3'];

  const onChangeAll = (e) => {
    if(checkList.length != total_chkbox_id.length){
      setCheckAll(true);
      setCheckList(total_chkbox_id);
    }
    else{
      setCheckAll(false);
      setCheckList([]);
    }

  };

  
  const onChangeEach = (e) => {
    // 체크할 시 CheckList에 id값 넣기
    const id = e.target.id;

    if (e.target.checked) {
      // 체크 해제할 시 CheckList에서 해당 id값이 `아닌` 값만 배열에 넣기
      setCheckList([...checkList, id])
      console.log(checkList)
    } else {
      if(checkList.length === total_chkbox_id.length){
        setCheckAll(false);
      }
      setCheckList(checkList.filter((checkedId) => checkedId !== id));
      console.log(checkList)
    }
  };

  const isTrue = (num) => {
    if(num==0){
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id = "chk_checkall"
          onChange={(e) => onChangeAll(e)}
          checked={checkList.length === total_chkbox_id.length || checkAll }
        />
        <label htmlFor="chk_checkall">전체선택</label>
        
      </div>
      <div>
        <input
          id='1'
          type="checkbox"
          onChange={(e) => onChangeEach(e)}
          checked={checkAll || isTrue(checkList.indexOf('1')+1)}
        />1번
        <input
        id='2'
          type="checkbox"
          onChange={(e) => onChangeEach(e)}
          checked={checkAll || isTrue(checkList.indexOf('2')+1)}
        />2번
        <input
        id='3'
          type="checkbox"
          onChange={(e) => onChangeEach(e)}
          checked={checkAll || isTrue(checkList.indexOf('3')+1)}
        />3번
      </div>
    </div>
  );
};

export default Home;
