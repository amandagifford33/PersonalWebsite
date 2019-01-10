var i = 0;
            var images = [];
            var time = 3000;

            images[0] = 'images/download.jpg';
            images[1] = 'images/download-1.jpg';
            images[2] = 'images/download-2.jpg';
            images[3] = 'images/download-3.jpg';

            function changeImg() {
                document.slide.src = images[i];


                if(i < images.length - 1) {
                    i++;
                } else {
                    i = 0;
                }
                
                setTimeout("changeImg()", time);
            }

            window.onload = changeImg;