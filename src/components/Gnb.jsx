import React from "react";

function Gnb(props){
  return(
    <nav>
    <ul className="gnb">
      <li><a href="/" rel="noopener noreferer">긴급분양</a></li>
      <li class="on"><a href="/" rel="noopener noreferer">애견분양</a></li>
      <li><a href="/" rel="noopener noreferer">무료분양</a></li>
      <li><a href="/" rel="noopener noreferer">애견정보</a></li>
    </ul>
  </nav>
  )
}

export default Gnb;