"use strict";
var slideShow = (function () {
  return function (selector, config) {
    var _slider = document.querySelector(selector), // основный элемент блока
      _sliderContainer = _slider.querySelector(".slider__items"), // контейнер для .slider-item
      _sliderItems = _slider.querySelectorAll(".slider__item"), // коллекция .slider-item
      _sliderControls = _slider.querySelectorAll(".slider__control"), // элементы управления
      _currentPosition = 0, // позиция левого активного элемента
      _transformValue = 0, // значение транфсофрмации .slider_wrapper
      _transformStep = 100, // величина шага (для трансформации)
      _itemsArray = [], // массив элементов
      _timerId,
      _indicatorItems,
      _indicatorIndex = 0,
      _indicatorIndexMax = _sliderItems.length - 1,
      _config = {
        isAutoplay: false, // автоматическая смена слайдов
        directionAutoplay: "next", // направление смены слайдов
        delayAutoplay: 5000, // интервал между автоматической сменой слайдов
        isPauseOnHover: true, // устанавливать ли паузу при поднесении курсора к слайдеру
      };

    // настройка конфигурации слайдера в зависимости от полученных ключей
    for (var key in config) {
      if (key in _config) {
        _config[key] = config[key];
      }
    }

    // наполнение массива _itemsArray
    for (var i = 0; i < _sliderItems.length; i++) {
      _itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
    }

    // переменная position содержит методы с помощью которой можно получить минимальный и максимальный индекс элемента, а также соответствующему этому индексу позицию
    var position = {
      getItemIndex: function (mode) {
        var index = 0;
        for (var i = 0; i < _itemsArray.length; i++) {
          if (
            (_itemsArray[i].position < _itemsArray[index].position &&
              mode === "min") ||
            (_itemsArray[i].position > _itemsArray[index].position &&
              mode === "max")
          ) {
            index = i;
          }
        }
        return index;
      },
      getItemPosition: function (mode) {
        return _itemsArray[position.getItemIndex(mode)].position;
      },
    };

    // функция, выполняющая смену слайда в указанном направлении
    var _move = function (direction) {
      var nextItem,
        currentIndicator = _indicatorIndex;
      if (direction === "next") {
        _currentPosition++;
        if (_currentPosition > position.getItemPosition("max")) {
          nextItem = position.getItemIndex("min");
          _itemsArray[nextItem].position = position.getItemPosition("max") + 1;
          _itemsArray[nextItem].transform += _itemsArray.length * 100;
          _itemsArray[nextItem].item.style.transform =
            "translateX(" + _itemsArray[nextItem].transform + "%)";
        }
        _transformValue -= _transformStep;
        _indicatorIndex = _indicatorIndex + 1;
        if (_indicatorIndex > _indicatorIndexMax) {
          _indicatorIndex = 0;
        }
      } else {
        _currentPosition--;
        if (_currentPosition < position.getItemPosition("min")) {
          nextItem = position.getItemIndex("max");
          _itemsArray[nextItem].position = position.getItemPosition("min") - 1;
          _itemsArray[nextItem].transform -= _itemsArray.length * 100;
          _itemsArray[nextItem].item.style.transform =
            "translateX(" + _itemsArray[nextItem].transform + "%)";
        }
        _transformValue += _transformStep;
        _indicatorIndex = _indicatorIndex - 1;
        if (_indicatorIndex < 0) {
          _indicatorIndex = _indicatorIndexMax;
        }
      }
      _sliderContainer.style.transform = "translateX(" + _transformValue + "%)";
      _indicatorItems[currentIndicator].classList.remove("active");
      _indicatorItems[_indicatorIndex].classList.add("active");
    };

    // функция, осуществляющая переход к слайду по его порядковому номеру
    var _moveTo = function (index) {
      var i = 0,
        direction = index > _indicatorIndex ? "next" : "prev";
      while (index !== _indicatorIndex && i <= _indicatorIndexMax) {
        _move(direction);
        i++;
      }
    };

    // функция для запуска автоматической смены слайдов через промежутки времени
    var _startAutoplay = function () {
      if (!_config.isAutoplay) {
        return;
      }
      _stopAutoplay();
      _timerId = setInterval(function () {
        _move(_config.directionAutoplay);
      }, _config.delayAutoplay);
    };

    // функция, отключающая автоматическую смену слайдов
    var _stopAutoplay = function () {
      clearInterval(_timerId);
    };

    // функция, добавляющая индикаторы к слайдеру
    var _addIndicators = function () {
      var indicatorsContainer = document.createElement("ol");
      indicatorsContainer.classList.add("slider__indicators");
      for (var i = 0; i < _sliderItems.length; i++) {
        var sliderIndicatorsItem = document.createElement("li");
        if (i === 0) {
          sliderIndicatorsItem.classList.add("active");
        }
        sliderIndicatorsItem.setAttribute("data-slide-to", i);
        indicatorsContainer.appendChild(sliderIndicatorsItem);
      }
      _slider.appendChild(indicatorsContainer);
      _indicatorItems = _slider.querySelectorAll(".slider__indicators > li");
    };

    // функция, осуществляющая установку обработчиков для событий
    var _setUpListeners = function () {
      _slider.addEventListener("click", function (e) {
        if (e.target.classList.contains("slider__control")) {
          e.preventDefault();
          _move(
            e.target.classList.contains("slider__control_next")
              ? "next"
              : "prev"
          );
          _startAutoplay();
        } else if (e.target.getAttribute("data-slide-to")) {
          e.preventDefault();
          _moveTo(parseInt(e.target.getAttribute("data-slide-to")));
          _startAutoplay();
        }
      });
      document.addEventListener(
        "visibilitychange",
        function () {
          if (document.visibilityState === "hidden") {
            _stopAutoplay();
          } else {
            _startAutoplay();
          }
        },
        false
      );
      if (_config.isPauseOnHover && _config.isAutoplay) {
        _slider.addEventListener("mouseenter", function () {
          _stopAutoplay();
        });
        _slider.addEventListener("mouseleave", function () {
          _startAutoplay();
        });
      }
    };

    // добавляем индикаторы к слайдеру
    _addIndicators();
    // установливаем обработчики для событий
    _setUpListeners();
    // запускаем автоматическую смену слайдов, если установлен соответствующий ключ
    _startAutoplay();

    return {
      // метод слайдера для перехода к следующему слайду
      next: function () {
        _move("next");
      },
      // метод слайдера для перехода к предыдущему слайду
      left: function () {
        _move("prev");
      },
      // метод отключающий автоматическую смену слайдов
      stop: function () {
        _config.isAutoplay = false;
        _stopAutoplay();
      },
      // метод запускающий автоматическую смену слайдов
      cycle: function () {
        _config.isAutoplay = true;
        _startAutoplay();
      },
    };
  };
})();

$(document).ready(function () {
  $(".top-block").click(function () {
    if ($(this).hasClass(".active")) {
      let temp = this;
      setTimeout(function () {
        $(temp)
          .parents(".faq-block")
          .children(".main-block")
          .css("display", "none");
      }, 300);

      $(this)
        .parents(".faq-block")
        .children(".main-block")
        .children(".main-text")
        .animate({ opacity: "0" }, 300);
      $(this).removeClass(".active");
    } else {
      $(this).addClass(".active");
      $(this)
        .parents(".faq-block")
        .children(".main-block")
        .css("display", "block");
      $(this)
        .parents(".faq-block")
        .children(".main-block")
        .children(".main-text")
        .animate({ opacity: "1" }, 500);
    }
  });
});

let amountCompanyBlock = document.querySelectorAll(".company-block")

document.querySelector(".companies-string").style.width = `${(amountCompanyBlock.length * 275) / 2}px`

if ((amountCompanyBlock.length * 275) / 2 > document.querySelector(".container-blog").offsetWidth) {
  document.querySelector(".companies-wrapper").style.overflowX = "scroll"
} else {
   document.querySelector(".companies-wrapper").style.overflowX = "hidden"
}


$(".accordionToggler").on("click", function () {
  if ($(this).closest(".more-qna__item").hasClass("open")) {
    $(this).closest(".more-qna__item").removeClass("open");
    return;
  }
  $(".more-qna__item").removeClass("open");
  $(this).closest(".more-qna__item").addClass("open");
});

$(".show-image").click(function(event) {
    event.preventDefault();
    var mainImage = $(this).index(); 
    $('.images img').removeClass('active');
    $('.images img').eq(mainImage).addClass('active'); 
});

window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 1000) {
    document.querySelector(".btn-top-wrap").classList.add("show");
  } else if(window.pageYOffset < 1000) {
    document.querySelector(".btn-top-wrap").classList.remove("show");
  }
  document.querySelector(".btn-top-wrap").onclick = function () {
        window.scrollTo({
    top: 0,
  });
  }
})


$(".copy-link-btn").click(function (event) {
  $(".copy-link-btn").css("display", "none")
})
