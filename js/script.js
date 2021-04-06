// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let form = document.getElementById("addForm");
let  emp = document.getElementById("employees");
          

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
   let empCount=0;

// ADD EMPLOYEE

    form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION

       e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
   
       var empId= document.getElementById('id').value;
       var empName= document.getElementById('name').value;
       var empExtn= document.getElementById('extension').value;
       var empEmail= document.getElementById('email').value;
       var empDepartment= document.getElementById('department').value;
      

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
      var newRow = document.getElementById("employees");
      var  row = newRow.insertRow(-1);
      

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        cell_0=row.insertCell(0);
        cell_1=row.insertCell(1);
        cell_2=row.insertCell(2);
        cell_3=row.insertCell(3);
        cell_4=row.insertCell(4);
        cell_5=row.insertCell(5);
   
         

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
          
        cell_0.appendChild(document.createTextNode(empId))
        cell_1.appendChild(document.createTextNode(empName))
        cell_2.appendChild(document.createTextNode(empExtn))
        cell_3.appendChild(document.createTextNode(empEmail))
        cell_4.appendChild(document.createTextNode(empDepartment))
        
    // CREATE THE DELETE BUTTON
 
            var delText=document.createTextNode('DELETE')
            var btn = document.createElement("BUTTON");
            btn.type='button';
            btn.className="btn btn-primary";
            btn.appendChild(delText);
            cell_5.appendChild(btn);

            btn.addEventListener('click', delete_emp);


    // RESET THE FORM
      
    reset_empform();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
        

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount += 1;
    var empCountDisplay = document.getElementById('empCount');
    empCountDisplay.value=empCount;

});

// DELETE EMPLOYEE

function delete_emp(e) {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);

    var updateEmpCountOnDel = document.getElementById('empCount');
    updateEmpCountOnDel.value = updateEmpCountOnDel.value - 1;
           
};

  function reset_empform() {
    document.getElementById("addForm").reset();
   };



