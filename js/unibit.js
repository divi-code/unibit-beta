
$(document).ready(function(){
    $('.nacVb-hhd').on('click',function(){
        $(this).toggle();
    });
    $('.mui-style-532m1e').on('click',function(){
        $('.nacVb-hhd').toggle();
    });
    $('.close_modal_wa').on('click',function(){
        $('.container-asset').toggle();
    });
    $('.mui-style-12uugcb').on('click',function(){
        $('.container-asset').toggle();
    });
});
document.addEventListener("DOMContentLoaded", function() {
const selectContainer = document.querySelector('.custom-select');
const selectOptions = selectContainer.querySelector('.select-options');
const options = selectOptions.querySelectorAll('label');

selectContainer.addEventListener('click', function() {
selectContainer.classList.toggle('select-active');
});

options.forEach(option => {
option.addEventListener('click', function() {
  options.forEach(o => o.classList.remove('selected'));
  option.classList.add('selected');
  selectContainer.querySelector('.select-style').textContent = option.textContent;
  selectContainer.classList.remove('select-active');
});
});
});
$('#ht-from-d-qw').on('click',function(){
$('.custom-select').toggle();
});
$('#hy-hs-to-r').on('click',function(){
$('#jd-ghrvgd-d').toggle();
});