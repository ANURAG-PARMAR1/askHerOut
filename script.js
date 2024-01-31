const effect = document.querySelector('.effect');
const yes = document.querySelector('.yes');
const main = document.querySelector('.main');
const ans = document.querySelector('.ans');


yes.addEventListener('click',function(e) {
    e.preventDefault();
    main.classList.add('hidden');
    ans.classList.remove('hidden');
});

// Yes -> No and No -> Yes

effect.addEventListener('mouseover', function (e) {
    e.preventDefault();
    yes.textContent = "No";
    effect.textContent = "Yes";
    
});

effect.addEventListener('mouseout', function (e) {
    e.preventDefault();
    yes.textContent = "Yes";
    effect.textContent = "No";
    
});

effect.addEventListener('click',function(e) {
    e.preventDefault();
    main.classList.add('hidden');
    ans.classList.remove('hidden');
});


// Running No

// const ran = function (a,b) {
//     let num = Math.trunc(Math.random()*b)+a;
//     if(num >= -1 && num <= 1) num = Math.trunc(Math.random() * 4)+2;
//     return num;
// };

// effect.addEventListener('mouseover', function (e) {
//     let n = ran(-5,5);
//     e.preventDefault();
//     effect.style.transform = `translate(${n * 100}%,${n * 100}%)`;
    
// });