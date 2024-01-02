let insert =document.getElementById('insert');


window.addEventListener('keydown',function(e){
    insert.innerHTML= `
    <div class ='color'>
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>${e.key === "" ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
    </div>
    `
});