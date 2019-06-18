// search for a specific type of dog

function getDogInfo() {
    var searchString = document.getElementById('').value.trim()
    var url: "https://api.thedogapi.com/v1/breeds/search?q="+ searchString + "";
  
    fetch(url, url2 {
      method: get,
      headers: {
        'x-api-key': '5f3e22bb-9492-4bf7-a78c-51a30219b72a'
      }
    }).then((res) => {

      var url2 =https://dog.ceo/api/breed/     /images/random
  
      res.render('blah'{
        name: res.body.name,
        life_span: res.body.life_span,
        bred_for: res.body.bred_for,
        group: res.body.breed_group,
        weight: res.body.weight.metric
      })
    }).catch((err) => {
      res.render(err)
    })
  }
  
  document.getElementById('searchDog').addEventListener('click', getDogInfo)
