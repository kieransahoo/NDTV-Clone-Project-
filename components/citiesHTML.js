let filterFun=()=>{
     return` <h1 class="heading">Cities</h1>
       
     <select  id="changeName">
         <option value="">Select Your Option Here</option>
         <option value="agra">agra</option>
         <option value="ahmedabad">ahmedabad</option>
         <option value="allahabad">allahabad</option>
         <option value="amritsar">amritsar</option>
         <option value="aurangabad">aurangabad</option>
         <option value="bangalore">bangalore</option>
         <option value="bhopal">bhopal</option>
         <option value="bhubaneshwar">bhubaneshwar</option>
         <option value="chandigarh">chandigarh</option>
         <option value="chennai">chennai</option>
         <option value="delhi">delhi</option>
         <option value="ghaziabad">ghaziabad</option>
         <option value="goa">goa</option>
         <option value="gurgaon">gurgaon</option>
         <option value="guwahati">guwahati</option>
         <option value="hyderabad">hyderabad</option>
         <option value="jaipur">jaipur</option>
         <option value="jammu">jammu</option>
         <option value="kanpur">kanpur</option>
         <option value="kolkata">kolkata</option>
         <option value="lucknow">lucknow</option>
         <option value="ludhiana">ludhiana</option>
         <option value="meerut">meerut</option>
         <option value="mumbai">mumbai</option>
         <option value="muzaffarnagar">muzaffarnagar</option>
         <option value="muzaffarpur">muzaffarpur</option>
         <option value="nagpur">nagpur</option>
         <option value="noida">noida</option>
         <option value="patna">patna</option>
         <option value="pune">pune</option>
         <option value="srinagar">srinagar</option>
         <option value="surat">surat</option>
         <option value="thiruvananthapuram">thiruvananthapuram</option>

     </select>`
}

let container=()=>{
     return`   <div id="treadingNews">

     </div>
     <div id="midNews">

     </div>
     <div id="rightSideNews">`
}

export {filterFun,container};