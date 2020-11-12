var calcFirst = document.querySelector('.calc-section__first');
var calcSecond = document.querySelector('.calc-section__second');
var calcThird = document.querySelector('.calc-section__third');

var calcFirstNext = document.querySelector('.gotoCalcNext');
var calcSecondPrev = document.querySelector('.gotoCalcFirst');
var calcThirdPrev = document.querySelector('.gotoCalcSecond');
var calculateButton = document.querySelectorAll('.calculateButton');
var finalCalculate = document.querySelector('.finalCalc');

var carNumberInput = document.getElementById('carNumber');
var numberInputWrapper = document.querySelector('.calc-section__calculator-input-wrapper');


var uaRegistration = true;
var previlege = false;
var previlegable = true;

var validation = {
    carNumber: {
        isValid: false
    },
    cityInputs: [
        {isValid: false},
        {isValid: false}
    ]
};

// Обработка ошибки на вводе номера авто
// carNumberInput.addEventListener('input', function (event) {
//     var value = event.target.value;
//     var errorMesssage = '<span class="error-message">Введите номер транспортного средства</span>';
//     if (value.trim().length === 0) {
//         // ОШИБКА
//         numberInputWrapper.classList.add('error');
//         numberInputWrapper.insertAdjacentHTML('afterend', errorMesssage);
//         validation.carNumber.isValid = false;
//     } else {
//         // НЕТ ОШИБКИ
//         validation.carNumber.isValid = true;
//         numberInputWrapper.classList.remove('error');
//         if (numberInputWrapper.nextSibling.classList && numberInputWrapper.nextSibling.classList.contains('error-message')) {
//             numberInputWrapper.nextSibling.parentNode.removeChild(numberInputWrapper.nextSibling);
//         }
//     }

// });

// calculateButton.forEach(button => {
//     button.addEventListener('click', e => {
//         e.preventDefault();

//         if (calcFirst.classList.contains('show')) {
//             var errorMesssage = '<span class="error-message">Введите номер транспортного средства</span>';

//             if (validation.carNumber.isValid) {
//                 calcFirst.classList.remove('show');
//                 calcThird.classList.add('show');

//                 return;
//             } else {
//                 if (numberInputWrapper.nextSibling.classList && numberInputWrapper.nextSibling.classList.contains('error-message')) {
//                     return;
//                 }
//                 numberInputWrapper.classList.add('error');
//                 numberInputWrapper.insertAdjacentHTML('afterend', errorMesssage);
//             }

//             return;
//         }


//         if (calcSecond.classList.contains('show')) {
//             if (cityInput.value.trim().length === 0 && !uaRegistration) {
//                 validation.cityInputs[0].isValid = true;
//                 handleCityInputCorrect('.city-search');
//                 calcSecond.classList.remove('show');
//                 calcThird.classList.add('show');
//                 return;
//             }

//             if (cityInput.value.trim().length !== 0) {
//                 validation.cityInputs[0].isValid = true;
//                 calcSecond.classList.remove('show');
//                 calcThird.classList.add('show');
//                 return;
//             } else {
//                 validation.cityInputs[0].isValid = false;
//                 handleCityInputInvalid('.city-search', cityInput.value, 0);
//                 return;
//             }


//         }

//         calcFirst.classList.remove('show');
//         calcSecond.classList.remove('show');
//         calcThird.classList.add('show');
//     });
// });

// finalCalculate.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (cityInput2.value.trim().length !== 0) {
//         validation.cityInputs[1].isValid = true;
//         console.log('success');
//     } else {
//         validation.cityInputs[1].isValid = false;
//         console.log('error');
//         handleCityInputInvalid('.city-search3', cityInput2.value, 1);
//     }
// });

// calcThirdPrev.addEventListener('click', function (e) {
//     e.preventDefault();

//     calcFirst.classList.remove('show');
//     calcSecond.classList.add('show');
//     calcThird.classList.remove('show');
// });

// calcFirstNext.addEventListener('click', function (e) {
//     e.preventDefault();


//     // hardcode preloader logic
//     showPreloaderOnTime(1400);
//     calcFirst.classList.remove('show');
//     calcThird.classList.remove('show');

//     setTimeout(function () {
//         calcSecond.classList.add('show');
//     }, 1400);
// });

// calcSecondPrev.addEventListener('click', function (e) {
//     e.preventDefault();


//     // hardcode preloader logic

//     showPreloaderOnTime(1400);
//     calcSecond.classList.remove('show');
//     calcThird.classList.remove('show');

//     setTimeout(function () {
//         calcFirst.classList.add('show');

//     }, 1400);
// });

var foreignCheck = document.getElementById('foreignRegistration');
var inputWrapper = document.querySelector('.calc-section__calculator-input-wrapper');

var foreign1 = document.getElementById('foreign1');
var cityInput = document.getElementById('city');
var cityButtons = document.querySelectorAll('.city-button');

var cityInput2 = document.getElementById('city2');
var cityButtons2 = document.querySelectorAll('.city-button2');

// foreignCheck.addEventListener('change', function (e) {
//     if (e.target.checked) {
//         uaRegistration = false;
//         updateCityInputByReg(uaRegistration);
//         updatePrevilegesByReg(uaRegistration);
//     } else {
//         uaRegistration = true;
//         updateCityInputByReg(uaRegistration);
//         updatePrevilegesByReg(uaRegistration);
//     }

//     if (!uaRegistration) {
//         handleCityInputCorrect('.city-search');
//         validation.cityInputs[0].isValid = true;
//     }
// });

// foreign1.addEventListener('change', function (e) {
//     if (e.target.checked) {
//         uaRegistration = false;
//         updateCityInputByReg(uaRegistration);
//         updatePrevilegesByReg(uaRegistration);

//     } else {
//         uaRegistration = true;
//         updateCityInputByReg(uaRegistration);
//         updatePrevilegesByReg(uaRegistration);
//     }
// });

// cityButtons.forEach(button => {
//     button.addEventListener('click', function (event) {
//         event.preventDefault();
//         if (cityInput.disabled) return;
//         cityInput.value = event.target.dataset.value;

//         handleCityInputCorrect('.city-search');
//         validation.cityInputs[0].isValid = true;
//     });
// });

// cityButtons2.forEach(button => {
//     button.addEventListener('click', function (event) {
//         event.preventDefault();
//         if (cityInput2.disabled) return;
//         cityInput2.value = event.target.dataset.value;

//         handleCityInputCorrect('.city-search3');
//         validation.cityInputs[1].isValid = true;
//     });
// });

// cityInput.addEventListener('input', function (event) {
//     var value = event.target.value;

//     handleCityInputValidation('.city-search', value, 0);
// });

// cityInput2.addEventListener('input', function (event) {
//     var value = event.target.value;

//     handleCityInputValidation('.city-search3', value, 1);
// });

// TIP
$('.calc-next__tip').on('click', function (e) {
    $('.tooltip-calc-next').toggleClass('show');
});

$(document).mouseup(function (e) {
    var container = $('.tooltip-calc-next');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('show');
    }

});

var previlegeCheckboxes = document.querySelectorAll('.previlege-checkbox');

// previlegeCheckboxes.forEach(function (item) {
//     item.addEventListener('change', function (event) {
//         if (event.target.checked) {
//             previlege = true;
//             updatePrevilegeStatus(previlege);
//         } else {
//             previlege = false;
//             updatePrevilegeStatus(previlege);
//         }
//     });
// });
//
// updateSelectByCarType(selectedCarType);
// updateCityInputByReg(uaRegistration);
// updatePrevilegesByReg(uaRegistration);
//
//
// // ИНИЦИАЛИЗАЦИЯ
// // osago cartype
// parasolSelect('cartype-select');
//
// // osago engineVolume
// parasolSelect('engineVolume-select', true);
//
// // osago electrocarPower-select
// parasolSelect('electrocarPower-select', true);
//
// // osago bikeVolume-select
// parasolSelect('bikeVolume-select', true);
//
// // osago passengersNum-select
// parasolSelect('passengersNum-select', true);
//
// // osago capacity-select
// parasolSelect('capacity-select', true);
//
// // osago trailerType-select
// parasolSelect('trailerType-select', true);
//
// // osago City search
// parasolSearch('city-search');
//
// // osago City search2
// parasolSearch('city-search2');
//
// // osago city-search3
// parasolSearch('city-search3');
//
// // osago city-search4
// parasolSearch('city-search4');
//
