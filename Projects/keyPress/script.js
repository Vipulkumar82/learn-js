const insert = document.getElementById('insert');

window.addEventListener('keydown',function(e){
    insert.innerHTML=`
    <div class="output">
        <table>
        <tr>
            <th>KEY</th>
            <th>KEY CODE</th>
            <th>CODE </th>
        </tr>
        <tr>
            <td>${e.key==' '?"Space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `
})