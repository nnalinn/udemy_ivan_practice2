import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    /* cards.forEach(card => {
        card.classList.add('animated', 'fadeInup');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    }); */
/* 
    <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    <div class=styles-block>
        <img src=assets/img/styles-5.jpg alt>
        <h4>Пастелью</h4>
        <a href="#">Подробнее</a>
    </div>
</div> */

    btn.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInup', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                    <div class="styles-block">
                        <img src=${src} alt="style">
                        <h4>${title}</h4>
                        <a href=${link}>Подробнее</a>
                    </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;