"use strict"
const panels = document.querySelectorAll('.panel')
// class'ı panel olan tüm elemanları çağırır ve o da dizi şeklinde döndürülür.
console.log(panels);

panels.forEach(panel => { 
    //    console.log(panel);
   
    panel.addEventListener('click', () => {
        // panels dizisi içindeki (yani class'ı panel olan 5 adet img dosyası) her bir elemana panel dedik ve bu panele tıklandığında
        // aşağıdaki removeActiveClasses fonksiyonu çalışsın ve burda tanımladığımız gibi active class'ı kaldırılsın.
        // Daha sonra tıkladığımız yeni img yani panel active edilsin.
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



