namea=[]
function sub(){
    var dis2=[]
for (var j= 1; j <=3; j++){
var name= document.getElementById("n"+j).value
console.log(name)
namea.push(name)
}
console.log(namea)
l=namea.length
console.log(l)

for (var k= 0; k <l; ++){
    var name= document.getElementById("n"+j).value
    dis2.push("<h4>name -"+ namea[k]+"</h4>")
    console.log(dis2)
    }
    document.getElementById("disc").innerHTML=dis2
    r=dis2.join("")
    document.getElementById("disc").innerHTML=r
}
function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}