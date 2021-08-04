const employeename = document.querySelector('#employeename');
const position = document.querySelector('#position');
const salary = document.querySelector('#salary');
const btn = document.querySelector('.btn');
const employeeList = document.querySelector('#employee-list');


btn.addEventListener('click',function(e){


     e.preventDefault();

     if(employeename.value=='' && position.value=='' && salary.value=='' ){


         alert('All fields are required!')
     }else{

         const newRow = document.createElement('tr');

         //create employee name
        const newEmployee = document.createElement('th');
        newEmployee.innerHTML=employeename.value;
        newRow.appendChild(newEmployee);

         //create employee position
         const employeePosition = document.createElement('th');
         employeePosition.innerHTML=position.value;
         newRow.appendChild(employeePosition); 
         
         //create employee salary
         const employeeSalary = document.createElement('th');
         employeeSalary.innerHTML=salary.value;
         newRow.appendChild(employeeSalary);

         employeeList.appendChild(newRow);
    }
})