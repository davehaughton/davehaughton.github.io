function subjects(event){
   event.preventDefault();
    let subjectNumber = document.getElementById("subjectNumber").value;
    const subjectsForm = document.querySelector('.subjects_form');
    const gradesForm = document.querySelector('.grades');
    const gradeContainer = document.getElementById('subjectGrades');
    const progressBar = document.querySelector('.progress_bar');
    const circle1 = document.querySelector('.circle_1');
    const circle2 = document.querySelector('.circle_2');
    gradesForm.classList.add('show');
    subjectsForm.classList.add('hide');
    circle1.classList.remove('active');
    circle2.classList.add('active');

    for(i=0;i< subjectNumber; i++){

        gradeContainer.innerHTML+='<div class="form-group">'+
                        '<label for="subjectNumber'+i+'">Enter your score for subject <span>'+(i+1)+'</span></label>'+
                        '<input type="number" class="form-control" id="subjectNumber'+i+'" placeholder="i.e. 86" required>'+
                    '</div>';


    }

}

function grades(event){

    event.preventDefault();

    let subjectNumber = document.getElementById("subjectNumber").value;
    const resultList = document.querySelector('.result_list');
    const gradesForm = document.querySelector('.grades');
    const tableBody = document.querySelector('.table_body');
    const tableWrap = document.querySelector('.table_wrap');

    const circle2 = document.querySelector('.circle_2');
    const circle3 = document.querySelector('.circle_3');

    circle2.classList.remove('active');
    circle3.classList.add('active');
    

    gradesForm.classList.remove('show');
    tableWrap.classList.remove('hide');

    for(i=0;i< subjectNumber; i++){

        let theScore = document.getElementById("subjectNumber"+i).value;
       // console.log("thegrade for "+i+" "+theScore);
        let theGrade;

        if(theScore >= '85'){
            theGrade = 'A';
        } else if( theScore < '85' && theScore >= '70'){
            theGrade = 'B';
        } else if(theScore < '70' && theScore >= '55'){
            theGrade = 'C';
        } else if(theScore < '55' && theScore >= '40'){
            theGrade = 'D';
        } else if(theScore < '40' && theScore >= '25'){
            theGrade = 'E';
        } else {
            theGrade = 'F';
        }

        tableBody.innerHTML+='<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td>'+theScore+'%</td>'+
            '<td>'+theGrade+'</td>'+
        '</tr>';

    }

    
}