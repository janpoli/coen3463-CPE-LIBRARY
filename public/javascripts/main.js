// $('#delete').on('click', function(e){
//   e.preventDefault();

//   $('input:checked').each(function(index, value){
//     var val = $(this).attr('id');
//     console.log($(this));
//     var $thisInput = $(this);

//     $.ajax({
//       url:'/contacts/'+val,
//       type:'DELETE'
//     }).done(function(){
//       $thisInput.parents('tr').remove();
//     });

//   });
// });

function getSearch() {
  localStorage.setItem("search", document.getElementById('search').value);
}
// function getAnItem() {
//   localStorage.setItem("flag",'set');
//   localStorage.setItem("aitem", document.getElementById('aitem').value);
//   console.log(localStorage.getItem("flag"));
//   console.log(localStorage.getItem("aitem"));
// }


if (window.location.pathname === '/access') {
  if (localStorage.getItem("search") === null||localStorage.getItem("search").indexOf(' ') >=0||localStorage.getItem("search") === 'null') {
    fetch('api/v1/lib').then(function(res) {
      res.json().then(function(blobs) {
        console.log('blobs', blobs);
        var tbody = document.getElementById('table-body');
        blobs.forEach(function(blob) {
          // tbody.insertAdjacentHTML('beforeend', '<tr> <td>  <input type="checkbox" id="' + contact._id + '" />  </td>  <td>  <a href="/contacts/#' + contact._id + '">' + contact.name + '</a></td> <td> ' + contact.nickname + '</td> <td>' + contact.email + ' </td> </tr>');
          tbody.insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');

        });
      })
    });
    fetch('api/v1/lib/count').then(function(res) {
        res.json().then(function(blobs) { 
          console.log('blobs', blobs);
          var count = document.getElementById('count');
            count.insertAdjacentHTML('beforeend', '<h3>('+blobs.count+')</h3>');
        
        })
      });
  }
  else{
    fetch('api/v1/lib?query={"name":"~(' + localStorage.getItem("search") + ')"}').then(function(res) {
      res.json().then(function(blobs){
        if (blobs.length === 0) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>No existing subjects </p>');
        }
        else if (blobs.length === 1) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found ' + blobs.length + ' subject/s.</p>');
        }
        else {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found '+blobs.length+' subject/s. </p>');
        }
        blobs.forEach(function(blob) {
          document.getElementById('table-body').insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');
        });
        
      });
    });
    localStorage.setItem("search", null);

  }
}

if (window.location.pathname === '/fifth') {
  fetch('api/v1/lib?query={"year":"~5"}').then(function(res) {
      res.json().then(function(blobs) {
        console.log('blobs', blobs);
        var tbody = document.getElementById('table-body');
        if (blobs.length === 0) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>No existing subjects </p>');
        }
        else if (blobs.length === 1) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found ' + blobs.length + ' subject/s.</p>');
        }
        else {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found '+blobs.length+' subject/s. </p>');
        }
    //     blobs.forEach(function(blob) {
    //       document.getElementById('table-body').insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');
    //     });
        
    //   });
    // });
        blobs.forEach(function(blob) {
          tbody.insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');

        });
      })
    });
}

if (window.location.pathname === '/fourth') {
  fetch('api/v1/lib?query={"year":"~4"}').then(function(res) {
      res.json().then(function(blobs) {
        console.log('blobs', blobs);
        var tbody = document.getElementById('table-body');
        if (blobs.length === 0) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>No existing subjects </p>');
        }
        else if (blobs.length === 1) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found ' + blobs.length + ' subject/s.</p>');
        }
        else {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found '+blobs.length+' subject/s. </p>');
        }
        blobs.forEach(function(blob) {
          tbody.insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');

        });
      })
    });
}

if (window.location.pathname === '/third') {
  fetch('api/v1/lib?query={"year":"~3"}').then(function(res) {
      res.json().then(function(blobs) {
        console.log('blobs', blobs);
        var tbody = document.getElementById('table-body');
        if (blobs.length === 0) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>No existing subjects </p>');
        }
        else if (blobs.length === 1) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found ' + blobs.length + ' subject/s.</p>');
        }
        else {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found '+blobs.length+' subject/s. </p>');
        }
        blobs.forEach(function(blob) {
          tbody.insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');

        });
      })
    });
}

if (window.location.pathname === '/second') {
  fetch('api/v1/lib?query={"year":"~2"}').then(function(res) {
      res.json().then(function(blobs) {
        console.log('blobs', blobs);
        var tbody = document.getElementById('table-body');
        if (blobs.length === 0) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>No existing subjects </p>');
        }
        else if (blobs.length === 1) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found ' + blobs.length + ' subject/s.</p>');
        }
        else {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found '+blobs.length+' subject/s. </p>');
        }
        blobs.forEach(function(blob) {
          tbody.insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');

        });
      })
    });
}

if (window.location.pathname === '/first') {
  fetch('api/v1/lib?query={"year":"~1"}').then(function(res) {
      res.json().then(function(blobs) {
        console.log('blobs', blobs);
        var tbody = document.getElementById('table-body');
        if (blobs.length === 0) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>No existing subjects </p>');
        }
        else if (blobs.length === 1) {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found ' + blobs.length + ' subject/s.</p>');
        }
        else {
          document.getElementById('count').insertAdjacentHTML('beforeend', '<p>Found '+blobs.length+' subject/s. </p>');
        }
        blobs.forEach(function(blob) {
          tbody.insertAdjacentHTML('beforeend', '<div class="col-md-4 list-g"><div class="animated rotateInDownLeft"><div class="service-box"><div class="list-group"><div class="service-desc"><h5>'+blob.name+'</h5><div class="divider-header"></div><p>'+blob.code+'</p><a class="btn btn-skin" href="/access/'+blob._id+'"> View</a><br/></div></div></div></div></div>');

        });
      })
    });
}