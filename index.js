myForm.addEventListener("submit",function(e){
    e.preventDefault();
var input=document.getElementById('info');
//alert(info.value);
var apiKey="8087f8dd34eca257dadbcf0421d4537b"
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)

.then(res=>{
    console.log(res)
document.getElementById('display').innerHTML=`<h3>City:${res.data.name}</h3><h3>Tempareture:${res.data.main.temp}<sup>0</sup>C</h3>
<p>Clouds: ${res.data.weather[0].description}</p>`;
})
.catch(error=>alert("Enter valid city"));
});
//using prevent default for not getting the data to be deleted in the console.
 
