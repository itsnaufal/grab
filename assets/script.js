



const generate_btn = document.querySelector("#generate-btn");
const copy_btn = document.querySelector('#copy-btn');


const getData = () => {
    const order = document.querySelector('#order');
    const resto = document.querySelector("#resto");
    const menu = document.querySelector("#menu");
    const note = document.querySelector("#note");


    return {
        order : order.value,
        resto : resto.value,
        menu : menu.value,
        note : note.value
    };
};

generate_btn.addEventListener('click',event => {
    event.preventDefault();

    const data = getData();

    const text = `
	======================================
	Order ke: ${data.order}
	Resto: ${data.resto} 
	Menu : ${data.menu} 
	Note : ${data.note};'

    console.log(text);
    const text_el = document.querySelector('#text');
    text_el.innerText = text;

    

    /* 
    nama

     */
});

copy_btn.addEventListener('click',event => {
    const text = document.querySelector('#text');
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");

    document.querySelector('#copy-alert').innerText = '*tercopy*';
});
