const Arry1 = [];
const Arry2 = [];
const Arry3 = [];
const Arry4 = [];
const Arry5 = [];
const Arry6 = [];
var K = 0;
var Y;
function myFunction()
{
    class User
    {
        constructor(name,surname,sel,email,pwd)
        {
            this.name = name;
            this.sel = sel;
            this.email = email;
            this.pwd = pwd;
        }
    }
    class User2 extends User
    {
        constructor(name,surname,sel,email,pwd,cho)
        {
            super(name,surname,sel,email,pwd);
            this.cho = cho;
        }
        show()
        {
            Arry1.push(name); Arry2.push(surname); Arry3.push(sel); Arry4.push(cho); Arry5.push(email); Arry6.push(pwd);
            var Text = "<thread> ";
            var UI =  Arry1.length;
            var i;

            for(i=0; i<UI; i++)
            {
                Text +=  '<tr><td>' + Arry1[i] + '</td> <td>' + Arry2[i]+ '</td> <td>' + Arry3[i]+ '</td> <td>' + Arry4[i] + '</td> <td>' + Arry5[i] + '</td> <td>' + Arry6[i]+ '</td><td> <button type="button" class="btn btn-warning" onclick="Edit('+i+')">Edit</button> </td><td> <button type="button" class="btn btn-danger" onclick="Delete('+i+')">Delete</button> </td> </tr>';
            }

                Text += "</thread>";
            document.getElementById('UIO').innerHTML = Text;
              
        }
    }

    var name = document.getElementById('name').value;

    var surname = document.getElementById('surname').value; 

    var sel = document.getElementById('sel').value;
        
    var cho;

    if(document.getElementById('exampleRadios1').checked)
    {
        cho = document.getElementById('exampleRadios1').value;
    }
    else if(document.getElementById('exampleRadios2').checked)
    {
        cho = document.getElementById('exampleRadios2').value;
    }
    else if(document.getElementById('exampleRadios3').checked)
    {
        cho = document.getElementById('exampleRadios3').value;
    }
    
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    
    if(name === '' || surname === '' || sel === '' || email === '' || pwd === '' || cho === '')
    {
        alert('Some Property is undefined!');
    }
    else
    {

        let P = email.search("@");
        
        if(P>0)
        {
           var G = Arry5.some(checkAdult);

            function checkAdult(a) {
            return a == email;
                                }

        
        if( G == true && K == 0)
        {
            alert('data is a Dublicate!');
        }
        else if(K == 1){
        
        var Text = "<thread> ";
        var UI =  Arry1.length;
        
        Arry1[Y] = name;
        Arry2[Y] = surname;
        Arry3[Y] = sel;
        Arry4[Y] = cho;
        Arry5[Y] = email;
        Arry6[Y] = pwd; 

        var i;

        for(i=0; i<UI; i++)
        {
            Text +=  '<tr><td>' + Arry1[i] + '</td> <td>' + Arry2[i]+ '</td> <td>' + Arry3[i]+ '</td> <td>' + Arry4[i] + '</td> <td>' + Arry5[i] + '</td> <td>' + Arry6[i]+ '</td><td> <button type="button" class="btn btn-warning" onclick="Edit('+i+')">Edit</button> </td><td> <button type="button" class="btn btn-danger" onclick="Delete('+i+')">Delete</button> </td> </tr>';
        }

            Text += "</thread>";
            document.getElementById('UIO').innerHTML = Text;

             document.getElementById('name').value = "";
            document.getElementById('surname').value = ""; 
            document.getElementById('email').value = "";
            document.getElementById('pwd').value = "";
            K = 0;
        }
        else{
            const myUser = new User2(name,surname,sel,email,pwd,cho);
            myUser.show();

            document.getElementById('name').value = "";
            document.getElementById('surname').value = ""; 
            document.getElementById('email').value = "";
            document.getElementById('pwd').value = "";
        }

     }
     else{
         alert("Your Email is wrong!");
     }

    }


    }





    function Edit(i)
    {
        K = 1;

        Y = i;
        // Fvent.preventDefult();
        document.getElementById('name').value = Arry1[i];
        document.getElementById('surname').value = Arry2[i];
        document.getElementById('sel').value = Arry3[i];

        if(Arry4[i]=="Male")
        {
            document.getElementById('exampleRadios1').value = Arry4[i];
        }
        else  if(Arry4[i] == "Female")
        {
            document.getElementById('exampleRadios2').value = Arry4[i];
        }
        else
        {
        document.getElementById('exampleRadios1').value = Arry4[i];
        }
        document.getElementById('email').value = Arry5[i];
        document.getElementById('pwd').value = Arry6[i];
   }



    function Delete(i)
    {
        Arry1.splice(i,1);
        Arry2.splice(i,1);
        Arry3.splice(i,1);
        Arry4.splice(i,1);
        Arry5.splice(i,1);
        Arry6.splice(i,1);

        var Text = "<thread> ";
        var UI =  Arry1.length;
        var i;

        for(i=0; i<UI; i++)
        {
            Text +=  '<tr><td>' + Arry1[i] + '</td> <td>' + Arry2[i]+ '</td> <td>' + Arry3[i]+ '</td> <td>' + Arry4[i] + '</td> <td>' + Arry5[i] + '</td> <td>' + Arry6[i]+ '</td><td> <button type="button" class="btn btn-warning" onclick="Edit('+i+')">Edit</button> </td><td> <button type="button" class="btn btn-danger" onclick="Delete('+i+')">Delete</button> </td> </tr>';
        }

            Text += "</thread>";
        document.getElementById('UIO').innerHTML = Text;
   }

 