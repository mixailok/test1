$(document).ready(function(){            
                // Magnific pop up = всплывающее окно галереи с картинками
                $('.tm-gallery-1').magnificPopup({
                  delegate: 'a', // child селектор, при нажатии на него всплывает окно
                  type: 'image', /* тип контента - картинка, галерея картинак - gallery*/
                  gallery: {enabled:true} /*включено */
                }); 

                $('.tm-gallery-2').magnificPopup({
                  delegate: 'a',
                  type: 'image',
                  gallery: {enabled:true} 
                }); 

                $('.tm-gallery-3').magnificPopup({
                  delegate: 'a', 
                  type: 'image',
                  gallery: {enabled:true}
                }); 
                $('.tm-current-year').text(new Date().getFullYear());   //вывод корректной даты             
            });
 	$(document).on('click', '.float-right', function(e) { //alert
			swal(						
{
  title: 'Упс, что-то не так...',
  text: "Сайт временно не работает. Для обратной связи просим писать на почту: podarki.shop.by@mail.ru",
  type: 'error',
  showCancelButton: false,
  confirmButtonColor: '#c9a0dc',
}				
			)
			});
		