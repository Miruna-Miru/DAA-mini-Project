let pPic = document.getElementById('pic');
        let newPic = document.getElementById('up-usr');

        newPic.onchange = function(){
            pPic.src = URL.createObjectURL(newPic.files[0]);
        };