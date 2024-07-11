
fetch("img/galery/names.txt")
    .then(response => response.text().then(res => {
        
        var carousel = document.querySelector('.carousel-inner');
    
        res.split(',').forEach(function (name, index) {
            name = '/img/galery/' + name;
            buttonSlides(index, index === 0);
            var div = document.createElement('div');
            div.className = 'carousel-item' + (index === 0 ? ' active' : '');

            var img = document.createElement('img');
            img.src = '.' + name;
            img.className = 'd-block w-100';
            img.alt = '...';

            div.appendChild(img);
            
            carousel.appendChild(div);
        });

    }))

    function buttonSlides(index, isActive) {
        const slide = document.createElement('button');
        slide.type = 'button';
        slide.setAttribute('data-bs-target', '#carouselExampleIndicators');
        slide.setAttribute('data-bs-slide-to', index);
        slide.setAttribute('aria-current', 'true');
        slide.setAttribute('aria-label', 'Slide ' + index);
        if (isActive) {
            slide.setAttribute('class', 'active');
        }

        document.querySelector('.carousel-indicators').appendChild(slide);
    }

